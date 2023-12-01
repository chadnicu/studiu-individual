"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { YouTubeEmbed } from "@next/third-parties/google";
import { useEffect, useState } from "react";

export function VideoPopover({ className }: { className?: string }) {
  const [isMd, setIsMd] = useState(window.innerWidth > 768);

  useEffect(() => {
    function handleResize() {
      setIsMd(window.innerWidth > 768);
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <Popover>
      <PopoverTrigger asChild className={className}>
        <button className="mx-auto rounded-full border bg-lightBlue p-5 px-7 py-5 text-lg font-semibold duration-300 hover:scale-110 md:px-9 md:py-6 md:text-xl lg:w-[50%]">
          See our video
        </button>
      </PopoverTrigger>
      <PopoverContent className="h-full w-full border-none bg-transparent p-0">
        <YouTubeEmbed
          videoid="aBZE6FcD7qg"
          width={isMd ? 560 : 300}
          height={isMd ? 315 : 200}
        />
      </PopoverContent>
    </Popover>
  );
}
