import type { Stack } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";

export default function StackCard({ stack }: { stack: Stack }) {
  const { image, name, saving, price } = stack;
  return (
    <div className="animate-on-scroll flex flex-col gap-4 hover:scale-110 duration-300">
      <Link
        href={`/products/stacks/${stack.name.toLocaleLowerCase()}`}
        className="flex h-56 w-52 flex-col items-center justify-center gap-3 rounded-2xl bg-[#1E293B] p-6"
      >
        <Image
          src={image}
          width={160}
          height={160}
          alt={name.toLocaleLowerCase() + " stack"}
          className="max-h-40"
        />
      </Link>
      <div className="flex flex-col items-center justify-center gap-2">
        <h3 className="text-base">{name} STACK</h3>
        <p className="text-xs">SAVE {saving}%</p>
        <p className="text-xs">
          <s>${price}</s> ${(price * 0.9).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
