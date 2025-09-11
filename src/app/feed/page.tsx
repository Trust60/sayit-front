import FeedSection from "@/components/sections/feed-section/feed";
import FeedHashtagsSwiper from "@/components/sliders/feed-hashtags-swiper/feed-hashtags";
import Section from "@/components/ui/section";
import { FeedHashtagsList } from "@/types/feed.interface";

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
      <FeedSection />
    </main>
  );
}
