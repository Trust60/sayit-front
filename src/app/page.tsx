import HeroSection from "@/components/sections/hero-section/hero-section";
import ReviewsSection from "@/components/sections/reviews-section/reviews";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import TeacherSwiper from "@/components/ui/teacher-swiper";
import TranslationTooltip from "@/components/ui/translation-tooltip";
import { HandHeart, Medal, SearchCheck, Wand } from "lucide-react";

const teacherBenefits = [
  {
    icon: SearchCheck,
    text: "Проходять багатоетапний відбір по багатьох критеріях",
  },
  { icon: HandHeart, text: "Метчаться з тобою за інтересами і характером" },
  {
    icon: Medal,
    text: "Регулярно проводять апскілл та підвищення кваліфікації",
  },
  { icon: Wand, text: "Індивідуально підходять до навчання кожного студента" },
];

export default function Home() {
  return (
    <main>
      <HeroSection />

      <Section>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">
            <TranslationTooltip text="Freedom" translate="Свобода" /> вчити
            англійську як хочеш
          </h2>
          <p className="text-foreground">
            Ми — не просто онлайн-школа з репетиторами, а екосистема вивчення
            англійської:
          </p>
          <ul className="leading-8">
            <li>👉 навчайся хоч з ноуту, хоч зі смартфону</li>
            <li>👉 вивчай мову з perfect teacher match</li>
            <li>
              👉 додатково прокачуйся на спікінг-клабах, онлайн-курсах й інших
              активностях
            </li>
          </ul>
        </div>
      </Section>
      {/* TODO: Add Article Slider */}
      <Section className="p-12">
        <h1 className="text-2xl">Article Slider</h1>
      </Section>
      {/* TODO: Add Custom slider */}
      <Section className="p-12">
        <h1 className="text-2xl">Custom slider</h1>
      </Section>

      <Section>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">
            Круто, якщо ти знаєш свій рівень англійської. А якщо ні —{" "}
            <TranslationTooltip text="here we are" translate="ми поруч" /> ;)
          </h2>
          <p className="text-foreground">
            Проведемо для тебе пробне заняття, де познайомимося, пройдемо тест
            на рівень англійської та визначимо твої цілі на навчання.
          </p>
          <Button className="bg-[#281151] text-purple-100 font-bold text-lg rounded-2xl py-6 shadow-lg">
            Пройти тест
          </Button>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">
            Наша викладацька{" "}
            <TranslationTooltip text="dream team" translate="команда мрії" /> ;)
          </h2>
          <ul>
            {teacherBenefits.map(({ icon: Icon, text }, i) => (
              <li key={i} className="flex items-start gap-2">
                <Icon size={22} />
                {text}
              </li>
            ))}
          </ul>
          <TeacherSwiper />
        </div>
      </Section>

      <Section>
        <h2 className="text-xl font-semibold">
          Ми пропонуємо курси для будь-якої мети та рівня
        </h2>
        {/* TODO: Add courses section */}
        <h1 className="text-2xl">Custom slider</h1>
      </Section>

      <ReviewsSection />
    </main>
  );
}
