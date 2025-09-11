import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "5");
    const offset = (page - 1) * limit;

    console.log("Feed API called with:", { page, limit, offset });

    const { count: totalCount, error: countError } = await supabase
      .from("post")
      .select("*", { count: "exact", head: true });

    console.log("Total posts count:", totalCount, "Count error:", countError);

    if (countError) {
      console.error("Error counting posts:", countError);
      return NextResponse.json(
        { error: "Failed to count posts", details: countError.message },
        { status: 500 }
      );
    }

    const { data, error } = await supabase
      .from("post")
      .select(
        `
        *,
        teacher:teacher_id (
          id,
          full_name,
          profile_image_url
        )
      `
      )
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1);

    console.log("Posts query result:", { data, error });

    if (error) {
      console.error("Error fetching posts:", error);
      return NextResponse.json(
        { error: "Failed to fetch posts", details: error.message },
        { status: 500 }
      );
    }

    const hasMore = offset + limit < (totalCount || 0);

    console.log("Final response:", {
      postsCount: data?.length || 0,
      hasMore,
      currentPage: page,
      totalCount: totalCount || 0,
    });

    return NextResponse.json({
      posts: data || [],
      hasMore,
      currentPage: page,
      totalCount: totalCount || 0,
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
