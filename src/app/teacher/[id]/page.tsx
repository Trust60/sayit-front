import TeacherBio from "@/components/sections/teacher-bio-section/teacher-bio";
import TeacherTabs from "@/components/sections/teacher-tabs-section/teacher-tabs";
import Section from "@/components/ui/section";
import { getTeacher } from "@/lib/teacher";
import { notFound } from "next/navigation";

export default async function TeacherPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const teacher = await getTeacher(id);

  if (!teacher) {
    notFound();
  }

  return (
    <main className="pt-15 bg-background">
      <Section>
        <h1 className="text-2xl font-bold mb-2">Профіль викладача</h1>
        <TeacherBio teacher={teacher} />
        <div className="mt-5">
          <TeacherTabs social={teacher.social_links} teacherId={teacher.id} />
        </div>
      </Section>
    </main>
  );
}
