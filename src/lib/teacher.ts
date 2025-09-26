import { supabaseAdmin } from "./supabase";
import { Teacher } from "@/types/teacher.interface";

export async function getTeacher(id: string): Promise<Teacher | null> {
  try {
    if (!id) {
      return null;
    }

    const { data, error } = await supabaseAdmin
      .from("teacher")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching teacher:", error);
      return null;
    }

    return data as Teacher;
  } catch (error) {
    console.error("Unexpected error fetching teacher:", error);
    return null;
  }
}
