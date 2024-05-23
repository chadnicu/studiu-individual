"use client";

import { toast } from "@/components/ui/use-toast";
import { useState } from "react";

export default function ContactForm() {
  const props = (str: string, other?: {}) => ({
    type: str === "email" || str === "number" ? str : "text",
    name: str,
    id: str,
    placeholder: str,
    required: true,
    className:
      "w-full appearance-none rounded-3xl border border-white bg-transparent p-3 text-center",
    ...other,
  });

  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <form
      className="grid min-w-[300px] place-items-center gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        toast({
          title: "Message sent!",
          description: <code>{JSON.stringify(data, undefined, 2)}</code>,
        });
      }}
    >
      <input
        {...props("name")}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <input
        {...props("email")}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <input
        {...props("subject")}
        onChange={(e) => setData({ ...data, subject: e.target.value })}
      />
      <textarea
        {...props("message")}
        cols={40}
        rows={4}
        onChange={(e) => setData({ ...data, message: e.target.value })}
      />
      <button
        type="submit"
        className="w-fit rounded-full bg-lightBlue px-12 py-5 text-base font-semibold duration-300 hover:scale-110 md:py-6 md:text-xl "
      >
        Send
      </button>
    </form>
  );
}
