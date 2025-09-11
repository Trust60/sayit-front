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

    console.log("Teachers API called with:", { page, limit, offset });

    const { count: totalCount, error: countError } = await supabase
      .from("teacher")
      .select("*", { count: "exact", head: true });

    console.log(
      "Total teachers count:",
      totalCount,
      "Count error:",
      countError
    );

    if (countError) {
      console.error("Error counting teachers:", countError);
      return NextResponse.json(
        { error: "Failed to count teachers", details: countError.message },
        { status: 500 }
      );
    }

    const { data, error } = await supabase
      .from("teacher")
      .select(`*`)
      .order("id", { ascending: false })
      .range(offset, offset + limit - 1);

    console.log("Teachers query result:", { data, error });

    if (error) {
      console.error("Error fetching teachers:", error);
      return NextResponse.json(
        { error: "Failed to fetch teachers", details: error.message },
        { status: 500 }
      );
    }

    const hasMore = offset + limit < (totalCount || 0);

    console.log("Final response:", {
      teachersCount: data?.length || 0,
      hasMore,
      currentPage: page,
      totalCount: totalCount || 0,
    });

    return NextResponse.json({
      teachers: data || [],
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
