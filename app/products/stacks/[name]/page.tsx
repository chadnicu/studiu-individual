import Link from "next/link";
import { notFound } from "next/navigation";
import { stacks } from "@/constants";
import MapOpenner from "./map-openner";

export const dynamic = "force-static";

type Params = { params: { name: string } };

export default async function Stack({ params: { name: paramName } }: Params) {
  const stack = stacks.find(({ name }) => name === paramName.toUpperCase());

  if (!stack) notFound();

  return (
    <section className="container flex flex-col items-center gap-10 md:px-20 lg:flex-row lg:px-40">
      <MapOpenner
        src={stack.image}
        alt={stack.name.toLocaleLowerCase()}
        map={stack.map}
      />
      <div className="space-y-4">
        <h1 className="text-3xl font-bold md:text-5xl">{stack.name} STACK</h1>
        <h2 className="text-xl font-semibold md:text-3xl">
          SAVE {stack.saving}%
        </h2>
        <p>{stack.longDescription}</p>
        <h2 className="text-xl font-semibold md:text-3xl">
          <s>${stack.price}</s> ${(stack.price * 0.9).toFixed(2)}
        </h2>
        <div className="space-x-2 text-sm md:text-base">
          <button className="rounded-full bg-lightBlue px-7 py-3 font-semibold duration-300 hover:scale-110">
            Add to cart
          </button>
          <span>or</span>
          <Link
            href="/products#stacks"
            className="duration-200 hover:text-lightBlue hover:underline"
          >
            go back to stacks
          </Link>
        </div>
      </div>
    </section>
  );
}
