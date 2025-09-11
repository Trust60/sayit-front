import { NextRequest, NextResponse } from "next/server";
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

export async function POST(request: NextRequest) {
  try {
    const { postId } = await request.json();

    if (!postId) {
      return NextResponse.json(
        { error: "Post ID is required" },
        { status: 400 }
      );
    }

    // Сначала получаем текущее количество лайков
    const { data: currentPost, error: fetchError } = await supabase
      .from("post")
      .select("likes_count")
      .eq("id", postId)
      .single();

    if (fetchError) {
      console.error("Error fetching post:", fetchError);
      return NextResponse.json(
        { error: "Failed to fetch post" },
        { status: 500 }
      );
    }

    // Увеличиваем количество лайков на 1
    const { data, error } = await supabase
      .from("post")
      .update({
        likes_count: (currentPost.likes_count || 0) + 1,
      })
      .eq("id", postId)
      .select("likes_count")
      .single();

    if (error) {
      console.error("Error updating likes:", error);
      return NextResponse.json(
        { error: "Failed to update likes" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      likes_count: data.likes_count,
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
