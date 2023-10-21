"use client";

import { useState } from "react";

export default function Page() {
  const [number, setNumber] = useState("");

  return (
    <div className="p-20 text-center">
      <input type="text" value={number} className="my-10" />
      <br />

      {new Array(10).fill(0).map((_, i) => (
        <button
          key={i}
          onClick={() => setNumber(number + i)}
          className="border border-white p-5"
        >
          {i}
        </button>
      ))}
    </div>
  );
}
