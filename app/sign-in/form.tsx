"use client";

import { toast } from "@/components/ui/use-toast";
import { ChangeEvent, FormEvent, useState } from "react";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email === process.env.email && password === process.env.password) {
      localStorage.setItem("auth", "true");
      toast({
        title: "Successfully Logged In!",
        description: "Enjoy shopping!",
      });
    } else {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        variant: "destructive",
      });
    }
  }

  function onEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function onPasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="hello@email.com"
        required
        className="mb-3 w-full appearance-none rounded-full border border-white bg-transparent p-4 text-center"
        value={email}
        onChange={onEmailChange}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        required
        className="mb-3 w-full appearance-none rounded-full border border-white bg-transparent p-4 text-center"
        onChange={onPasswordChange}
      />
      <button
        type="submit"
        className="mb-3 w-full rounded-full bg-lightBlue py-4 text-base font-semibold duration-300 hover:scale-110"
      >
        Continue
      </button>
    </form>
  );
}
