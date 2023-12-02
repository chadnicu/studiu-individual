"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div
      className="absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-center gap-3 bg-black/60  backdrop-blur-sm"
      onClick={() => router.back()}
    >
      <iframe
        src="https://www.youtube.com/embed/aBZE6FcD7qg?si=b90wLG6QMqPIWUHp"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="h-[50.6vw] w-[90vw] md:h-[39.9vw] md:w-[71vw]"
      ></iframe>
    </div>
  );
}
