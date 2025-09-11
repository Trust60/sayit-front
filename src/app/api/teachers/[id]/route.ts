import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { Teacher } from "@/types/teacher.interface";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { error: "Teacher ID is required" },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from("teacher")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching teacher:", error);
      return NextResponse.json({ error: "Teacher not found" }, { status: 404 });
    }

    return NextResponse.json(data as Teacher);
  } catch (error) {
    console.error("Unexpected error fetching teacher:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
