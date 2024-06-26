"use client";

import { useEffect, useState } from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { reviews } from "@/constants";
import ReviewCard from "./review-card";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function SwipeableReviews() {
  const [translateX, setTranslateX] = useState(0);
  const [count, setCount] = useState(0);
  const [swipeSize, setSwipeSize] = useState(
    typeof window !== "undefined" && window.innerWidth < 768 ? 304 : 464,
  );

  function increment() {
    if (count < reviews.length) {
      setTranslateX(translateX - swipeSize);
      setCount(count + 1);
    }
  }

  function decrement() {
    if (count > 0) {
      setTranslateX(translateX + swipeSize);
      setCount(count - 1);
    }
  }

  useEffect(() => {
    function handleResize() {
      const swipeSize = window.innerWidth < 768 ? 304 : 464;
      const translateX = count * swipeSize;
      setSwipeSize(swipeSize);
      setTranslateX(-translateX);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [count]);

  return (
    <div className="animate-on-scroll flex items-center">
      <button
        className={cn(
          "h-10 rounded-full duration-300 hover:scale-150 hover:text-lightBlue",
          { "opacity-0": count <= 0 },
        )}
        onClick={decrement}
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <div className="flex h-48 w-72 items-center justify-start overflow-hidden md:w-[500px]">
        <div
          className={cn(
            "flex items-center gap-16 transition-transform duration-300 ease-in-out first:ml-[26px] md:first:ml-[52px]",
          )}
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
          <div className="w-60 md:w-[400px]">
            <Link
              href="https://www.realscienceathletics.com/pages/reviews"
              target="_blank"
              className=""
            >
              <button className="rounded-full bg-lightBlue px-7 py-5 text-base font-semibold duration-300 hover:scale-110 md:px-9 md:py-6 md:text-xl">Read more</button>
            </Link>
          </div>
        </div>
      </div>
      <button
        className={cn(
          "h-10 cursor-pointer rounded-full duration-300 hover:scale-150 hover:text-lightBlue",
          { "opacity-0": count >= reviews.length },
        )}
        onClick={increment}
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
}
