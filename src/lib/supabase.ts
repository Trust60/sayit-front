import { createClient } from "@supabase/supabase-js";
import { FeedArticle } from "@/types/feed.interface";

export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);
export async function getFeedPosts(): Promise<FeedArticle[]> {
  try {
    const { data, error } = await supabaseAdmin
      .from("post")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching posts:", error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error("Unexpected error fetching posts:", error);
    return [];
  }
}
