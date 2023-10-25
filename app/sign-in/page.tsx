import Image from "next/image";

export default function Login() {
  return (
    <main className="flex w-screen flex-col items-center justify-between gap-20 px-4 text-center text-white sm:my-0 md:gap-20 lg:gap-32">
      <section className="container flex max-w-xl flex-col items-center justify-center px-5 md:px-0">
        <h1 className="mb-10 text-5xl font-bold md:text-7xl">Welcome back</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="hello@email.com"
          required
          className="mb-3 w-full appearance-none rounded-full border border-white bg-transparent p-4 text-center"
        />
        <button className="mb-3 w-full rounded-full bg-lightBlue py-4 text-base font-semibold duration-300 hover:scale-110">
          Continue
        </button>
        <p className="mb-10 text-lg">
          Don&apos;t have an account?{" "}
          <a
            href=""
            className="duration-200 hover:text-lightBlue hover:underline"
          >
            Sign up
          </a>
        </p>
        <div className="mb-8 flex w-full">
          <hr className="border-1 w-full" />
          <span className="mt-[-10px] w-fit px-2 font-bold">OR</span>
          <hr className="border-1 w-full" />
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
      </section>
    </main>
  );
}
