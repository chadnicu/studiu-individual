import type { Review } from "@/types";
import Image from "next/image";

export default function ReviewCard({ review }: { review: Review }) {
  const { image, content, author } = review;

  // bg-[#1E293B]
  return (
    <div className="flex h-fit w-60 flex-col items-center justify-center rounded-2xl bg-transparent px-4 py-2 shadow-inner shadow-lightBlue backdrop-blur-sm duration-300 hover:scale-110 md:h-40 md:w-[400px] md:p-6">
      <div className="gap mt-3 flex items-center justify-center gap-2">
        <Image
          src={image}
          width={100}
          height={100}
          alt="supplement image"
          className="max-h-24"
        />
        <p className="text-xs font-medium md:text-base md:font-normal">
          &quot;{content}&quot;
        </p>
      </div>
      <p className="ml-auto mr-[-4px] mt-1 text-xs font-light md:mt-0 md:font-normal">
        ~ {author}
      </p>
    </div>
  );
}
