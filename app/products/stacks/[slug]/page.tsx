import { stacks } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import MapOpenner from "./map-openner";

export default function Stack({ params }: { params: { slug: string } }) {
  const stack = stacks.find(
    ({ name }) => name === params.slug.toLocaleUpperCase(),
  );

  if (!stack) {
    notFound();
  }

  return (
    <section className="container flex flex-col items-center gap-10 md:flex-row md:px-40">
      <MapOpenner
        src={stack.image}
        alt={stack.name.toLocaleLowerCase()}
        map={stack.map}
      />
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{stack.name} STACK</h1>
        <h2 className="text-2xl font-semibold">SAVE {stack.saving}%</h2>
        <p>{stack.longDescription}</p>
        <h2 className="text-2xl font-semibold">
          <s>${stack.price}</s> ${(stack.price * 0.9).toFixed(2)}
        </h2>
        <div className="space-x-4">
          <button className="rounded-full bg-lightBlue px-7 py-3 text-sm font-semibold duration-300 hover:scale-110">
            Add to cart
          </button>
          <span>or</span>
          <Link
            href="/products#stacks"
            className="duration-200 hover:text-lightBlue hover:underline"
          >
            Go back to stacks
          </Link>
        </div>
      </div>
    </section>
  );
}
