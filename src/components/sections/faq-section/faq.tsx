import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    id: "1",
    title: "Що таке безкоштовний пробний урок?",
    content:
      "Це зустріч онлайн, де ти знайомишся з викладачем, дізнаєшся свій рівень, тестиш формат занять і платформу. Без зобов’язань — просто подивитись, як усе працює.",
  },
  {
    id: "2",
    title: "Як формується графік занять?",
    content:
      "Самостійно обираєш зручні дні та години. Узгоджуєш усе з викладачем і можеш змінювати, якщо щось зміниться.",
  },
  {
    id: "3",
    title: "Що робити, якщо не вдається підʼєднатися до уроку?",
    content:
      "Перевір інтернет, перезавантаж пристрій і спробуй ще раз. Якщо не спрацює — напиши в техпідтримку 💬 Вони швидко допоможуть.",
  },
  {
    id: "4",
    title: "Як перенести урок?",
    content:
      "Зайди в особистий кабінет і попередь викладача за 6+ годин до початку. Маєш 2 безкоштовні перенесення щомісяця.",
  },
  {
    id: "5",
    title: "Як скасувати урок?",
    content:
      "Можна скасувати урок у своєму кабінеті — просто попередь викладача не пізніше ніж за 6 годин до початку. На місяць маєш 2 безкоштовні скасування.",
  },
  {
    id: "6",
    title: "Як довго триває урок?",
    content:
      "50 хвилин — і за цей час встигаєш усе потрібне: перевірити домашку, розібратись у темі, попрактикуватися і спокійно поставити запитання.",
  },
];

export default function FaqSection() {
  return (
    <section className="space-y-4" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-xl font-bold">
        Відповіді на типові запитання
      </h2>
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-5"
        role="region"
        aria-label="Часті питання та відповіді"
      >
        {items.map((item) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className="bg-background has-focus-visible:border-ring has-focus-visible:ring-ring/50 rounded-md px-4 py-5 outline-none has-focus-visible:ring-[3px] shadow-lg"
          >
            <AccordionTrigger className="py-2 text-base leading-6 hover:no-underline focus-visible:ring-0 font-bold">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-2">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
