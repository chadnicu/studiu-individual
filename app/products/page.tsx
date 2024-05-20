"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { products } from "@/constants/products";
import { stacks } from "@/constants/stacks";
import ProductCard from "./product-card";
import StackCard from "./stack-card";
import { cn } from "@/lib/utils";

export default function Products() {
  useScrollAnimation({ cssClass: "animate-on-scroll" });

  return (
    <main className="flex w-screen flex-col items-center justify-between gap-20 text-center text-white md:gap-20 lg:gap-32">
      <section className="container flex flex-col items-center justify-center gap-16 px-5 md:gap-20">
        <h1 className="flex flex-wrap text-4xl font-bold md:text-6xl lg:text-7xl tracking-tighter">
          Supplements
        </h1>
        <div
          className={cn("grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-x-10")}
        >
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              className={cn({ "animate-on-scroll": index > 2 })}
            />
          ))}
        </div>
      </section>

      <hr className="container border-t-[1px] border-white opacity-30" />

      <section
        className="container flex flex-col items-center justify-center gap-16 px-5 md:gap-20"
        id="stacks"
      >
        <h1 className="animate-on-scroll flex flex-wrap text-4xl font-bold md:text-6xl lg:text-7xl tracking-tighter">
          Stacks
        </h1>
        <div className="grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-x-10 ">
          {stacks.map((stack, index) => (
            <StackCard key={index} stack={stack} />
          ))}
        </div>
      </section>
    </main>
  );
}
