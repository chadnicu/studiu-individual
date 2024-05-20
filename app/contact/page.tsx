export default function Contact() {
  const props = (str: string, other?: {}) => ({
    type: str === "email" || str === "number" ? str : "text",
    name: str,
    id: str,
    placeholder: str,
    required: true,
    className:
      "w-full appearance-none rounded-full border border-white bg-transparent p-3 text-center",
    ...other,
  });

  return (
    <main className="flex flex-col items-center justify-between gap-20 px-4 text-center text-white sm:my-0 md:gap-20 md:px-20 lg:gap-32">
      <section className="container flex flex-col items-center justify-center gap-16 px-5 md:flex-row md:px-16 lg:px-20 xl:gap-24 xl:px-32">
        <div className="grid gap-5 text-left">
          <h2 className="text-5xl font-bold tracking-tight md:text-6xl">
            Let&apos;s get in touch
          </h2>
          <p className="text-lg">
            For all general inquires, please contact us directly via email at
            support@realscienceathletics.com, or use the contact form.
          </p>
        </div>
        <div className="grid w-full gap-5">
          <h2 className="text-5xl font-bold tracking-tight md:text-6xl">
            Contact us
          </h2>
          <form className="grid min-w-[300px] place-items-center gap-5">
            <input {...props("name")} />
            <input {...props("email")} />
            <input {...props("subject")} />
            <textarea {...props("message")} cols={40} rows={4} />
            <button
              type="submit"
              className="w-fit rounded-full bg-lightBlue px-12 py-5 text-base font-semibold duration-300 hover:scale-110 md:py-6 md:text-xl "
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
