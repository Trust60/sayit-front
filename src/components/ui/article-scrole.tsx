"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ArticleScroller() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const articles = ["The", "A", "An", "The", "Any"];

  // Анимация для вертикального скролла
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <div ref={containerRef} className="h-[200vh] absolute top-0 left-0">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex whitespace-nowrap">
          {[...articles, ...articles].map((article, index) => (
            <div key={index} className="inline-block px-12 text-8xl font-bold">
              {article}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
