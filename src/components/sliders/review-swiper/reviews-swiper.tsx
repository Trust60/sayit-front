"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import ReviewSwiperCard from "./review-swiper-card";

const reviews = [
  {
    imageSrc: "openart-image_5K0EI6B9_1753109061496_raw.jpg",
    socialName: "@lucy_duval",
    name: "Люсіан Дюваль",
    reviewText:
      "Дякую вашій школі за якісну подачу матеріалу! Викладачі дуже уважні, уроки інтерактивні, а атмосфера сприяє навчанню. Особливо подобається, що акцент робиться на розмовну практику — вже через місяць відчуваю прогрес. Раджу всім, хто хоче вивчити мову з нуля або підтягнути рівень!",
  },
  {
    imageSrc: "openart-image_jYLSHm1-_1753109152282_raw.jpg",
    socialName: "@isabella_vandermont",
    name: "Ізабелла Вандермонт",
    reviewText:
      "Навчання онлайн — це дуже зручно! Платформа працює стабільно, всі матеріали під рукою, а викладачі знаходять спосіб зацікавити навіть через екран. Єдиний нюанс — іноді трапляються технічні збої через інтернет, але це не критично. В цілому — дуже задоволена!",
  },
  {
    imageSrc: "openart-image_5K0EI6B9_1753109061496_raw.jpg",
    socialName: "@john_smith",
    name: "Джон Сміт",
    reviewText:
      "Індивідуальні уроки — це саме те, що мені було потрібно! Викладач адаптує програму під мої цілі (підготовка до іспиту), пояснює зрозуміло і не поспішає. Вартість трохи вища, ніж у групових заняттях, але результат того вартий.",
  },
  {
    imageSrc: "openart-image_jYLSHm1-_1753109152282_raw.jpg",
    socialName: "@sophia_lee",
    name: "Софія Лі",
    reviewText:
      "Групові заняття — це не лише корисно, але й весело! Комунікація з іншими студентами допомагає подолати мовний бар’єр. Іноді бракує часу на персональні пояснення, але загалом — чудовий варіант для тих, хто любить навчатися в команді.",
  },
  {
    imageSrc: "openart-image_PTc16pUH_1753105279793_raw.jpg",
    socialName: "@michael_brown",
    name: "Майкл Браун",
    reviewText:
      "Школа класна, але якщо додати більше відеоматеріалів або підкастів для самостійного вивчення, було б ідеально. Також було б круто мати додаток із словником та тестами. Дякую за вашу працю!",
  },
  {
    imageSrc: "openart-image_PTc16pUH_1753105279793_raw.jpg",
    socialName: "@emma_jones",
    name: "Емма Джонс",
    reviewText:
      "Рекомендую! 🚀 Найкращі викладачі, цікаві уроки та реальний результат. Вже можу вільно спілкуватися — і це за 3 місяці!",
  },
];

export default function ReviewSwiper() {
  return (
    <div className="relative w-full">
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        freeMode
        modules={[FreeMode]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide
            key={review.socialName}
            className="max-w-[280px] min-h-[340px] py-2"
          >
            <ReviewSwiperCard {...review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
