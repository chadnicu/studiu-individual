"use client";

import Image from "next/image";
import Link from "next/link";
import SignInForm from "./login-form";
import { AuthContext } from "../global-context";
import { useContext } from "react";

export default function Login() {
  const { username, signOut } = useContext(AuthContext);

  return (
    <main className="flex w-screen flex-col items-center justify-between gap-20 px-4 text-center text-white sm:my-0 md:gap-20 lg:gap-32">
      <section className="container flex max-w-xl flex-col items-center justify-center px-5 md:px-0">
        <h1 className="mb-10 text-5xl font-bold tracking-tighter md:text-7xl">
          Welcome back
          {username && <span className="text-lightBlue"> {username}</span>}
        </h1>
        {username && (
          <div className="flex flex-col-reverse gap-5 sm:flex-row ">
            <button
              className="rounded-full border border-lightBlue bg-transparent px-7 py-5 text-base font-semibold shadow-inner shadow-lightBlue duration-200 hover:scale-110 md:px-9 md:py-6 md:text-xl"
              onClick={signOut}
            >
              Sign Out
            </button>
            <Link href={"/products"}>
              <button className="rounded-full bg-lightBlue px-7 py-5 text-base font-semibold duration-300 hover:scale-110 md:px-9 md:py-6 md:text-xl">
                Start Shopping
              </button>
            </Link>
          </div>
        )}
        {!username && (
          <>
            <SignInForm />
            <p className="mb-10 text-lg">
              Don&apos;t have access?{" "}
              <Link
                href="/contact"
                className="text-lightBlue duration-200 hover:underline"
              >
                Contact us
              </Link>
            </p>
            <div className="mb-8 flex w-full">
              <hr className="border-1 w-full border-white opacity-30" />
              <span className="mt-[-10px] w-fit px-2 font-bold">OR</span>
              <hr className="border-1 w-full border-white opacity-30" />
            </div>
            <button className="relative z-0 w-full rounded-full bg-white py-5 font-semibold text-black duration-300 hover:scale-110">
              <Image
                src="/google.svg"
                alt="google icon"
                width={20}
                height={20}
                className="absolute left-7 top-[22px]"
              />
              <p className="ml-9 sm:ml-0">Continue with Google</p>
            </button>
          </>
        )}
      </section>
    </main>
  );
}
