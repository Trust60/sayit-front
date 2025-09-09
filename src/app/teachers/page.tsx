import TeachersSection from "@/components/sections/teachers-section/teachers";
import Section from "@/components/ui/section";

export default function Teachers() {
  return (
    <main className="pt-15 bg-background">
      <Section>
        <h1 className="text-2xl font-bold">Наші викладачі</h1>
      </Section>
      <TeachersSection />
    </main>
  );
}
