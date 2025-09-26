import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const offset = (page - 1) * limit;

    console.log("Teacher posts API called with:", {
      teacherId: id,
      page,
      limit,
      offset,
    });

    const { count: totalCount, error: countError } = await supabase
      .from("post")
      .select("*", { count: "exact", head: true })
      .eq("teacher_id", id);

    console.log(
      "Total posts count for teacher:",
      totalCount,
      "Count error:",
      countError
    );

    if (countError) {
      console.error("Error counting teacher posts:", countError);
      return NextResponse.json(
        { error: "Failed to count teacher posts", details: countError.message },
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
      .eq("teacher_id", id)
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1);

    console.log("Teacher posts query result:", { data, error });

    if (error) {
      console.error("Error fetching teacher posts:", error);
      return NextResponse.json(
        { error: "Failed to fetch teacher posts", details: error.message },
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
