"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import TeacherSwiperCard from "./teacher-swiper-card";

import "swiper/css";
import "swiper/css/free-mode";

const teachers = [
  {
    imageSrc: "openart-image_jYLSHm1-_1753109152282_raw.jpg",
    flag: "ukraine",
    name: "Anna",
    title: "Готує до ЗНО/ДПА",
    experience: "6 років досвіду",
  },
  {
    imageSrc: "openart-image_lcBaHbAg_1753108581494_raw.jpg",
    flag: "kazakhstan",
    name: "Emiliya",
    title: "Сертифікат IELTS",
    experience: "8 років досвіду",
  },
  {
    imageSrc: "openart-image_5K0EI6B9_1753109061496_raw.jpg",
    flag: "ukraine",
    name: "Yaroslav",
    title: "Сертифікат IELTS",
    experience: "7 років досвіду",
  },
  {
    imageSrc: "openart-image_PTc16pUH_1753105279793_raw.jpg",
    flag: "poland",
    name: "Aydan",
    title: "Сертифікат IELTS",
    experience: "7 років досвіду",
  },
];

export default function TeacherSwiper() {
  return (
    <div className="relative w-full">
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {teachers.map((teacher, index) => (
          <SwiperSlide key={index} className="max-w-[240px] py-2">
            <TeacherSwiperCard {...teacher} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
