"use client";

import { useEffect, useState } from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { reviews } from "@/app/constants";
import ReviewCard from "@/components/review-card";

export default function SwipeableReviews() {
  const [isPhone, setIsPhone] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : 0,
  );
  const [translateX, setTranslateX] = useState(isPhone ? 26 : 52);
  const [count, setCount] = useState(0);
  const swipeSize = isPhone ? 304 : 464;

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
    if (typeof window === "undefined") return;

    function handleResize() {
      const isPhone = window.innerWidth < 768;
      setIsPhone(isPhone);
      setTranslateX((isPhone ? 26 : 52) - count * (isPhone ? 304 : 464));
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [count, isPhone]);

  return (
    <div className="animate-on-scroll flex items-center">
      <button
        className="h-10 rounded-full duration-300 hover:scale-150 hover:text-lightBlue"
        onClick={decrement}
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <div className="flex h-48 w-72 items-center justify-start overflow-hidden md:w-[500px]">
        <div
          className="flex items-center gap-16 transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
          <div className="w-60 md:w-[400px]">
            <button className="rounded-full bg-lightBlue px-7 py-5 text-base font-semibold duration-300 hover:scale-110 md:px-9 md:py-6 md:text-xl">
              Read more
            </button>
          </div>
        </div>
      </div>
      <button
        className="h-10 cursor-pointer rounded-full duration-300 hover:scale-150 hover:text-lightBlue"
        onClick={increment}
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
}
