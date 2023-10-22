"use client";

import {
  BeakerIcon,
  NewspaperIcon,
  MagnifyingGlassIcon,
  CurrencyDollarIcon,
  TrophyIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import SwipeableReviews from "@/components/swipeable-reviews";
import { useScrollAnimation } from "./hooks";

export default function Home() {
  useScrollAnimation("animate-on-scroll");

  return (
    <main className="mt-3 flex w-screen flex-col items-center justify-between gap-32 text-center text-white md:gap-44 lg:gap-36">
      <section className="container flex flex-col items-center justify-center gap-10 px-5 lg:px-48">
        <h1 className="flex flex-wrap text-4xl font-bold md:text-6xl lg:text-7xl">
          Science based fitness suplementation
        </h1>
        <p className="text-xs font-medium md:text-lg">
          No hype. No gimmicks. Just clean, simple, scientifically-supported
          formulas that optimize body composition, training performance and
          overall health. Period.
        </p>
        <Link
          href="/about"
          className="rounded-full bg-lightBlue px-7 py-5 text-base font-semibold duration-300 hover:scale-110 md:px-9 md:py-6 md:text-xl"
        >
          Learn more
        </Link>
      </section>

      <section className="container flex flex-col items-center justify-center gap-20">
        <h1 className="animate-on-scroll text-3xl font-semibold md:text-4xl">
          Our standards
        </h1>
        <div className="grid grid-cols-1 place-items-start gap-16 px-10 md:grid-cols-2 md:px-24 lg:grid-cols-3 lg:px-20">
          <div className="animate-on-scroll flex flex-col items-center justify-center gap-2">
            <BeakerIcon className="h-12 w-12 text-lightBlue md:h-16 md:w-16" />
            <h2 className="text-base font-semibold md:text-lg">
              Research proven ingredients
            </h2>
            <p className="text-sm md:text-base">
              Every single ingredient used in our formulas is fully supported by
              legitimate peer-reviewed scientific literature. Fancy “fad
              ingredients” wear off and fade away, but pure, effective,
              research-backed compounds can always be counted on for the long
              haul.
            </p>
          </div>
          <div className="animate-on-scroll flex flex-col items-center justify-center gap-2">
            <NewspaperIcon className="h-12 w-12 text-lightBlue md:h-16 md:w-16" />
            <h2 className="text-base font-semibold md:text-lg">
              Proper clinical dosages
            </h2>
            <p className="text-sm md:text-base">
              High quality ingredients aren{"'"}t enough - you need the proper
              doses too. We don{"'"}t skimp out on potency to save on costs like
              most other companies. Every ingredient is present in its
              research-validated dose to ensure maximum benefit and safety.
            </p>
          </div>
          <div className="animate-on-scroll flex flex-col items-center justify-center gap-2">
            <MagnifyingGlassIcon className="h-12 w-12 text-lightBlue md:h-16 md:w-16" />
            <h2 className="text-base font-semibold md:text-lg">
              Full label disclosure
            </h2>
            <p className="text-sm md:text-base">
              No bogus “proprietary blends”. No hidden ingredients. No cheap
              fillers or dangerous substances. What{"'"}s on the label is
              exactly what{"'"}s in the product, and what{"'"}s in the product
              is exactly what{"'"}s on the label, guaranteed.
            </p>
          </div>
          <div className="animate-on-scroll flex flex-col items-center justify-center gap-2">
            <CurrencyDollarIcon className="h-12 w-12 text-lightBlue md:h-16 md:w-16" />
            <h2 className="text-base font-semibold md:text-lg">
              Great value per serving
            </h2>
            <p className="text-sm md:text-base">
              An effective supplement plan shouldn{"'"}t break the bank. It
              should give you the results you deserve for a fair price. Our goal
              is not merely to “maximize profit” - it{"'"}s to create an honest
              exchange of value so that everyone benefits equally.
            </p>
          </div>
          <div className="animate-on-scroll flex flex-col items-center justify-center gap-2">
            <TrophyIcon className="h-12 w-12 text-lightBlue md:h-16 md:w-16" />
            <h2 className="text-base font-semibold md:text-lg">
              Highest quality manufacturing
            </h2>
            <p className="text-sm md:text-base">
              Product safety and control is a top priority. That{"'"}s why we
              only produce our supplements in cGMP/NSF certified USA-based
              facilities to guarantee you{"'"}re getting the purest ingredients
              and highest quality processing available.
            </p>
          </div>
          <div className="animate-on-scroll flex flex-col items-center justify-center gap-2">
            <ScaleIcon className="h-12 w-12 text-lightBlue md:h-16 md:w-16" />
            <h2 className="text-base font-semibold md:text-lg">
              Honesty & transparency
            </h2>
            <p className="text-sm md:text-base">
              In an industry completely overrun with gimmicks, false marketing
              claims and blatant lies, we pride ourselves on our honest, fully
              transparent, no nonsense approach. Our personal promise: if we
              honestly wouldn&apos;t buy it ourselves, we&apos;ll never sell it
              to you.
            </p>
          </div>
        </div>
      </section>

      <section className="container flex flex-col items-center justify-center md:gap-16 lg:flex-row">
        <h1 className="animate-on-scroll mb-2 w-72 text-3xl font-semibold md:mb-0 md:w-96 md:text-4xl">
          Check out what our customers are saying
        </h1>
        <SwipeableReviews />
      </section>

      <section className="container flex flex-col items-center justify-center gap-8">
        <h1 className="animate-on-scroll text-4xl font-semibold md:text-5xl">
          Don&apos;t miss out!
        </h1>
        <Link
          href="/products"
          className="animate-on-scroll rounded-full bg-lightBlue px-7 py-5 text-base font-semibold duration-300 hover:scale-110 md:px-9 md:py-6 md:text-xl"
        >
          Shop now
        </Link>
      </section>
    </main>
  );
}
