"use client";

import Image from "next/image";
import { useState } from "react";

export default function MapOpenner({
  src,
  alt,
  map,
}: {
  src: string;
  alt: string;
  map: JSX.Element;
}) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Image
        src={src}
        width={350}
        height={330}
        alt={alt}
        className="w-48 duration-300 hover:scale-110 md:w-72 lg:w-80"
        onClick={() => setOpened(true)}
      />
      {opened && (
        <div
          className="absolute inset-0 h-screen w-screen overflow-hidden bg-darkBlue bg-opacity-90"
          onClick={() => setOpened(false)}
        >
          <div className="absolute inset-0 m-auto h-fit w-fit text-center">
            <Image
              src={src}
              width={350}
              height={350}
              alt={alt}
              useMap={`#${alt}`}
            />
            <p className="mt-5">(Click on a product to shop it individually)</p>
          </div>
          {map}
        </div>
      )}
    </>
  );
}
