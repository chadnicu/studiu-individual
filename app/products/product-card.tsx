import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";
import { cn } from "@/lib/utils";
import { StarIcon } from "@heroicons/react/20/solid";
import { BottomBlur, TopBlur } from "@/components/blurs";

export default function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const { name, description, price, starCount, image } = product;
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 overflow-hidden duration-300 hover:scale-110",
        className,
      )}
    >
      <Link
        href={"/products/" + name.toLocaleLowerCase()}
        className="flex h-fit w-[220px] flex-col items-center justify-center gap-3 rounded-3xl bg-transparent py-6 shadow-inner shadow-[#38BDF8] backdrop-blur-sm"
      >
        <Image
          src={image}
          width={130}
          height={180}
          className="max-h-52"
          alt={name}
        />
      </Link>
      <div className="flex flex-col items-center justify-center gap-2 break-words">
        {/* flex flex-col items-center justify-center gap-2 */}
        <h3 className="text-base font-semibold">{name}™</h3>
        <p className="text-xs">{description}</p>
        <div className="flex gap-1">
          {new Array(starCount).fill(0).map((_, index) => (
            <StarIcon key={index} className="h-4 w-4 text-amber-400" />
          ))}
        </div>
        <p className="text-xs">${price}</p>
      </div>
    </div>
  );
}
