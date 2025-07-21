import { Button } from "@/components/ui/button";
import Image from "next/image";
import Features from "./features";
import Stats from "./stats";

export default function HeroSection() {
  return (
    <section className="bg-[#281151] h-screen overflow-hidden relative">
      <div className="max-w-[850px] xl:max-w-[1140px] flex flex-col pt-40 px-4 justify-around h-full mx-auto">
        <div className="absolute inset-0 max-w-[850px] xl:max-w-[1280px] mx-auto">
          <div className="absolute bottom-10 md:top-30 xl:top-40 -left-20 xl:left-0 w-96 xl:w-[600px] h-96 xl:h-[600px] bg-purple-600 rounded-full filter blur-2xl opacity-30 xl:opacity-20 animate-blob"></div>
          <div className="absolute top-40 xl:top-60 right-0 md:right-40 xl:right-60 w-96 xl:w-[600px] h-96 xl:h-[600px] bg-pink-500 rounded-full filter blur-3xl opacity-40 xl:opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 md:bottom-40 xl:-bottom-60 left-1/2 md:left-40 w-96 xl:w-[600px] h-96 xl:h-[600px] bg-blue-500  rounded-full filter blur-2xl opacity-40 xl:opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        <div className="flex flex-col items-center justify-center text-center md:text-left md:items-start relative z-20">
          <h1 className="text-4xl font-bold mb-10 text-violet-50 md:text-6xl md:mb-5 relative z-20">
            Опановуй мову <br className="hidden sm:block" />
            разом з нами
          </h1>
          <Features vertical />
          <Features />
          <div className="hidden md:block absolute z-0 top-70 right-0">
            <Image
              src="/cursor.webp"
              alt="Vector"
              width={270}
              height={230}
              quality={100}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:hidden relative z-20">
          <h3 className="text-violet-100 font-semibold text-center">
            Обирай свого тічера з 1000+ найкращих і вивчай англійську онлайн
            24/7
          </h3>
          <Button className="bg-purple-50 text-slate-900 font-bold text-lg rounded-2xl py-6">
            Пройти тест
          </Button>
          <Stats />
        </div>
        <div className="mt-40 gap-4 xl:gap-2 hidden md:flex relative z-20 xl:border-t-2 xl:border-violet-100 xl:pt-5">
          <div className="flex flex-col gap-5 xl:flex-row xl:gap-2 items-center">
            <h3 className="text-violet-100 font-semibold">
              Обирай свого тічера з 1000+ найкращих і вивчай англійську онлайн
              24/7
            </h3>
            <Button className="bg-purple-50 text-slate-900 font-bold text-lg rounded-2xl py-6 shadow-xl xl:w-2/5">
              Пройти тест
            </Button>
          </div>
          <Stats />
        </div>
      </div>
    </section>
  );
}
