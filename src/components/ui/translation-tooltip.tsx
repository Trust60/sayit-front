"use client";

import { GlobeIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

export default function TranslationTooltip({
  text,
  translate,
  color = "#fdb548",
}: {
  text: string;
  translate: string;
  color?: string;
}) {
  return (
    <Tooltip>
      <TooltipTrigger className="relative pb-1 inline-block group">
        <span className="relative z-10">{text}</span>
        <span
          className="absolute bottom-1 left-1/2 w-[105%] transform -translate-x-1/2 h-4 rounded-xs z-0"
          style={{ background: color }}
        ></span>
      </TooltipTrigger>
      <TooltipContent showArrow side="bottom" className="shadow-lg">
        <span className="flex items-center gap-1 text-lg">
          <GlobeIcon size={18} className="pr-1 border-r-2" /> {translate}
        </span>
      </TooltipContent>
    </Tooltip>
  );
}
