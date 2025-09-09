import FeedHashtagsSwiper from "@/components/sliders/feed-hashtags-swiper/feed-hashtags";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Section from "@/components/ui/section";
import { Separator } from "@/components/ui/separator";
import { FeedHashtagsList } from "@/types/feed.interface";
import { Heart } from "lucide-react";
import Image from "next/image";

const feedHashtagsList: FeedHashtagsList = {
  hashtags: [
    { id: "1", name: "#Англійська" },
    { id: "2", name: "#Блог" },
    { id: "3", name: "#Чеська" },
    { id: "4", name: "#Репетитор" },
    { id: "5", name: "#Німецька" },
    { id: "6", name: "#Розвиток" },
    { id: "7", name: "#Французька" },
    { id: "8", name: "#Іспанська" },
    { id: "9", name: "#Польська" },
  ],
};

export default function Feed() {
  return (
    <main className="pt-15 bg-background">
      <Section>
        <FeedHashtagsSwiper {...feedHashtagsList} />
      </Section>
      <div className="max-w-[850px] xl:max-w-[1140px] mx-auto px-4">
        <h2 className="text-lg font-semibold">Останні публікації</h2>
        <div className="grid grid-cols-1 gap-4 py-10">
          <div className="flex flex-col gap-4 bg-card p-4 rounded-2xl shadow-md">
            <div className="flex items-center gap-4">
              <Avatar className="size-10">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-base font-semibold">Miranda W</h3>
                <p className="text-sm text-muted-foreground">12 хв тому</p>
              </div>
            </div>
            <Image
              src="/images/FHnnjk1Yj7Y-unsplash.jpg"
              alt="feed"
              width={500}
              height={500}
            />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.{" "}
                <span className="text-primary font-semibold">Ще</span>
              </p>
            </div>
            <Separator />
            <div className="flex items-center gap-2">
              <Heart size={20} /> 10
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
