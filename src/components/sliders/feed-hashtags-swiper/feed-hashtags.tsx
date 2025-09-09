"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { FeedHashtag } from "@/types/feed.interface";
import FeedHashtagCard from "./feed-hashtag-card";

import "swiper/css";
import "swiper/css/free-mode";
import { useState } from "react";

export default function FeedHashtagsSwiper({
  hashtags,
}: {
  hashtags: FeedHashtag[];
}) {
  const [selectedHashtagId, setSelectedHashtagId] = useState<string | null>(
    null
  );

  const handleHashtagClick = (hashtagId: string) => {
    setSelectedHashtagId(selectedHashtagId === hashtagId ? null : hashtagId);
  };

  return (
    <div className="relative w-full">
      <Swiper
        modules={[FreeMode]}
        spaceBetween={16}
        slidesPerView="auto"
        freeMode={true}
      >
        {hashtags.map((hashtag) => (
          <SwiperSlide key={hashtag.id} className="!w-auto">
            <FeedHashtagCard
              hashtag={hashtag}
              isSelected={selectedHashtagId === hashtag.id}
              onClick={() => handleHashtagClick(hashtag.id)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
