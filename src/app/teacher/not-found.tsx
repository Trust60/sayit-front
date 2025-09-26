import Section from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="pt-15 bg-background">
      <Section>
        <div className="text-center py-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Вчитель не знайдений
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            На жаль, запитуваний вчитель не існує або був видалений.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link href="/teachers">Переглянути всіх вчителів</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">На головну</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
