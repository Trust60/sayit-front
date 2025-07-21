"use client";
import ReviewSwiper from "@/components/ui/reviews-swiper";
import TranslationTooltip from "@/components/ui/translation-tooltip";

export default function ReviewsSection() {
  return (
    <section className="bg-[#281151] overflow-hidden relative">
      <div className="max-w-[850px] xl:max-w-[1140px] mx-auto px-4 pt-12 pb-7">
        <h2 className="text-violet-50 text-xl font-semibold mb-6">
          Реальні{" "}
          <TranslationTooltip
            text={"feedbacks"}
            translate={"відгуки"}
            color={"#A259FF"}
          />{" "}
          наших студентів
        </h2>
        <ReviewSwiper />
      </div>
    </section>
  );
}
