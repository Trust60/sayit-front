"use client";

import { memo } from "react";
import { Button } from "@/components/ui/button";
import TranslationTooltip from "@/components/ui/translation-tooltip";
import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const FeatureBlock = memo(
  ({
    imageSrc,
    imageAlt,
    title,
    description,
    direction = "left",
    isVisible = false,
  }: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    direction?: "left" | "right";
    isVisible?: boolean;
  }) => (
    <div
      className={`flex flex-col gap-6 transition-all duration-1000 ease-out ${
        isVisible
          ? "translate-x-0 opacity-100"
          : direction === "left"
          ? "-translate-x-full opacity-0"
          : "translate-x-full opacity-0"
      }`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={445}
        height={400}
        quality={100}
        className="rounded-lg"
        priority={false}
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-violet-50 text-lg font-semibold">{title}</h3>
        <p className="text-violet-100">{description}</p>
      </div>
    </div>
  )
);

FeatureBlock.displayName = "FeatureBlock";

export default function WhyWeSection() {
  const { elementRef: firstBlockRef, hasIntersected: firstBlockVisible } =
    useIntersectionObserver();

  const { elementRef: secondBlockRef, hasIntersected: secondBlockVisible } =
    useIntersectionObserver();

  const { elementRef: thirdBlockRef, hasIntersected: thirdBlockVisible } =
    useIntersectionObserver();

  return (
    <section className="bg-[#281151] overflow-hidden relative">
      <div className="max-w-[850px] xl:max-w-[1140px] mx-auto px-4 pt-12 pb-7">
        <h2 className="text-violet-50 text-xl font-semibold mb-7">
          Чому вчити англійську в онлайн‑школі{" "}
          <TranslationTooltip
            text={"effective"}
            translate={"ефективно"}
            color={"#A259FF"}
          />
          ?
        </h2>
        <div ref={firstBlockRef}>
          <FeatureBlock
            imageSrc="/images/FHnnjk1Yj7Y-unsplash.jpg"
            imageAlt="Индивидуальная программа обучения"
            title="Індивідуальна програма навчання"
            description="Займайся англійською онлайн в будь-якому місці і в будь-який час. Для уроку потрібен тільки інтернет. Ми підберемо ідеального викладача під твій характер та інтереси, складемо розклад та інтенсивність занять, а менеджер підтримки допоможе зробити процес навчання комфортним для ефективного вивчення англійської мови."
            direction="left"
            isVisible={firstBlockVisible}
          />
        </div>
        <div className="mt-6" ref={secondBlockRef}>
          <FeatureBlock
            imageSrc="/images/Oalh2MojUuk-unsplash.jpg"
            imageAlt="Инновационный подход к обучению"
            title="Інноваційний підхід"
            description="Онлайн‑платформа повністю вирішує проблему пошуку та придбання навчальних матеріалів. Все необхідне для опанування англійською вже є на нашому сайті. Для закріплення нових знань після онлайн‑уроків та розмовної практики можеш скористатися Розмовним Клубом або прокачати свій рівень в онлайн‑тренажері."
            direction="right"
            isVisible={secondBlockVisible}
          />
        </div>
        <div className="mt-6" ref={thirdBlockRef}>
          <FeatureBlock
            imageSrc="/images/g1Kr4Ozfoac-unsplash.jpg"
            imageAlt="Идеальная атмосфера для обучения"
            title="Ідеальна атмосфера"
            description="Займатися англійською в онлайн‑школі — весело! Наші викладачі — справжні професіонали своєї справи. Інтерактивні уроки не дадуть тобі нудьгувати. На відміну від групових занять, індивідуальні уроки онлайн допомагають скоріше побороти страх та сором спілкування англійською мовою."
            direction="left"
            isVisible={thirdBlockVisible}
          />
        </div>
        <Button className="bg-purple-50 text-slate-900 font-bold text-lg rounded-2xl py-6 mt-6">
          Детальніше
        </Button>
      </div>
    </section>
  );
}
