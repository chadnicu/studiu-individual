"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  useScrollAnimation({ cssClass: "animate-on-scroll" });

  return (
    <main className="container flex w-screen flex-col items-center justify-between gap-20 px-5 text-center text-white sm:my-0 md:gap-20 md:px-14 lg:gap-32 lg:px-0">
      <section className="container flex flex-col items-center justify-center gap-10 px-5 md:flex-row lg:px-48 ">
        <div className="grid gap-8 text-center">
          <h1 className="flex flex-wrap justify-center text-4xl font-bold tracking-tighter md:text-6xl xl:text-7xl">
            My name is <br /> Sean Nalewanyj
          </h1>
          <p className="hidden text-xs font-medium md:block md:text-base xl:text-lg">
            I&apos;m a fitness author, coach and avid sports supplement
            researcher who prides himself on an evidence-based, no B.S approach
            to building muscle, losing fat and improving overall health and
            fitness.
          </p>
          <Link
            href={"/about/video"}
            className="mx-auto hidden rounded-full border bg-lightBlue p-5 px-7 py-5 text-lg font-semibold duration-300 hover:scale-110 md:block md:px-9 md:py-6 md:text-xl lg:w-[50%]"
          >
            See our video
          </Link>
        </div>
        <div className="grid gap-8 text-center">
          <Image
            src="/sean.jpg"
            alt="Sean Nalewanyj"
            className="min-w-[300px] rounded-xl object-cover md:w-full"
            width={900}
            height={900}
          />
          <p className="block text-xs font-medium md:hidden md:text-lg">
            I&apos;m a fitness author, coach and avid sports supplement
            researcher who prides himself on an evidence-based, no B.S approach
            to building muscle, losing fat and improving overall health and
            fitness.
          </p>
        </div>
        <Link
          href={"/about/video"}
          className="mx-auto rounded-full border bg-lightBlue p-5 px-7 py-5 text-lg font-semibold duration-300 hover:scale-110 md:hidden md:px-9 md:py-6 md:text-xl lg:w-[50%]"
        >
          See our video
        </Link>
      </section>
      <hr className="container border-t-[1px] border-white opacity-30" />
      <section className="flex max-w-5xl flex-col items-start justify-center gap-10 px-5 text-left lg:px-48">
        <p className="animate-on-scroll">
          You work hard for every ounce of muscle you build, every pound of fat
          you burn, and every strength gain you achieve. You stay consistent
          with your workouts from week to week, follow a properly structured
          eating plan, and manage your rest and recovery to support your fitness
          goals.
        </p>
        <h3 className="animate-on-scroll text-xl font-bold">
          THAT&apos;S WHY YOU DESERVE HONEST, EFFECTIVE SUPPLEMENTS THAT TRULY
          WORK WHEN USED IN CONJUNCTION WITH YOUR TRAINING AND DIET.
        </h3>
        <p className="animate-on-scroll">
          Over-the-top promises, “high profile” endorsements and flashy labels
          might look great on paper, but they don&apos;t deliver what actually
          matters in the real world: results.
        </p>
        <p className="animate-on-scroll">The reality?</p>
        <p className="animate-on-scroll">
          The vast majority of popular “mainstream” fitness supplements on the
          market are, quite simply, garbage.
        </p>
        <p className="animate-on-scroll">
          In most cases, all they are is a random concoction of ineffective,
          under-dosed, and sometimes even dangerous ingredients that are not
          backed by reliable studies, created for the sole purpose of turning a
          profit.
        </p>
        <p className="animate-on-scroll">
          My goal was to identify every single thing wrong with nearly all of
          the current “muscle building” and “fat burning” supplements on the
          market today, and to formulate a product line that directly addressed
          and overcame all of these issues.
        </p>
      </section>
      <hr className="container border-t-[1px] border-white opacity-50" />
      <section className="container flex flex-col justify-center gap-10 px-5 lg:px-48">
        <div className="flex flex-col items-end gap-5 text-right">
          <h3 className="animate-on-scroll max-w-md text-xl font-bold">
            THE BIG PROBLEMS WITH THE MAJORITY OF &quot;MAINSTREAM&quot; FITNESS
            SUPPLEMENTS.
          </h3>
          <p className="animate-on-scroll max-w-lg">
            Ineffective ingredients that are not backed by reliable research.
            Weak dosages that produce minimal to no benefit. Dangerous additives
            and banned substances. Low quality manufacturing methods. Hugely
            exaggerated marketing claims. Blatant label fraud.
          </p>
        </div>
        <div className="flex flex-col items-start gap-5 text-left">
          <h3 className="animate-on-scroll max-w-md text-xl font-bold">
            AT REALSCIENCE ATHLETICS, WE DO THINGS VERY DIFFERENTLY.
          </h3>
          <p className="animate-on-scroll max-w-lg">
            Research proven ingredients only. Proper clinical dosages for
            maximum effectiveness. Full label disclosure without any
            “proprietary blends”. Great value per serving. Highest quality
            manufacturing methods. 100% naturally sweetened and flavored.
            Honesty & transparency above all.
          </p>
        </div>
      </section>
      <hr className="container border-t-[1px] border-white opacity-30" />
      <section className="animate-on-scroll flex max-w-5xl flex-col justify-center gap-10 px-5 text-left lg:px-48">
        <p className="animate-on-scroll">The bottom line is this...</p>
        <p className="animate-on-scroll">
          If you take your health and fitness seriously...
        </p>

        <p className="animate-on-scroll">
          If you understand the proper role that supplements play as part of a
          balanced overall training and nutrition program...
        </p>

        <p className="animate-on-scroll">
          And if you&apos;re looking for truly effective, no nonsense formulas
          to maximize your results along the way...
        </p>

        <p className="animate-on-scroll">
          Fakestore is the company you can count on.
        </p>

        <p className="animate-on-scroll">
          Clean, simple and straightforward supplements may not be as
          “glamorous” as those hyped up by flashy endorsements and fad
          ingredients, but that&apos;s fine with us.
        </p>

        <p className="animate-on-scroll">
          Our focus is purely on what works and what will provide the greatest
          benefit to our users, and everything we do is centered around that
          basic vision.
        </p>
        <p className="animate-on-scroll">
          Thanks for stopping by, and we look forward to supporting you in your
          fitness journey.
        </p>
        <p className="animate-on-scroll">
          <Link
            href="/products"
            className="duration-200 hover:text-lightBlue hover:underline"
          >
            Click here
          </Link>{" "}
          to view our product list.
        </p>
      </section>
      {/* this is ugly af */}
    </main>
  );
}
