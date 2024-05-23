import type { Stack } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function StackCard({ stack }: { stack: Stack }) {
  const { image, name, saving, price } = stack;
  return (
    <div className="animate-on-scroll flex flex-col gap-4 duration-300 hover:scale-110">
      <Link
        href={`/products/stacks/${stack.name.toLocaleLowerCase()}`}
        // className="flex h-56 w-52 flex-col items-center justify-center gap-3 rounded-2xl bg-[#1E293B] p-6"
        className="my-auto flex h-fit w-[220px] flex-col items-center justify-center gap-3 rounded-2xl bg-transparent py-6 shadow-inner shadow-[#38BDF8] backdrop-blur-sm"
      >
        <Image
          src={image}
          width={160}
          height={160}
          alt={name.toLocaleLowerCase() + " stack"}
          className="max-h-40"
        />
      </Link>
      <div className="mx-auto flex flex-col items-center justify-center gap-2 break-words">
        <h3 className="text-base font-semibold">{name} STACK</h3>
        <p className="text-xs">SAVE {saving}%</p>
        <p className="text-xs">
          <s>${price}</s> ${(price * 0.9).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
