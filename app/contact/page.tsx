import { toast } from "@/components/ui/use-toast";
import ContactForm from "./contact-form";
import Link from "next/link";

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
          <h2 className="text-5xl font-bold tracking-tighter md:text-6xl">
            Let&apos;s get in touch
          </h2>
          <p className="text-lg">
            For all general inquires, please contact us directly via email at{" "}
            <Link href="mailto:mailto:example@email.com" target="_blank" className="text-lightBlue hover:underline">
              support@realscienceathletics.com
            </Link>
            , or use the contact form.
          </p>
        </div>
        <div className="grid w-full gap-5">
          <h2 className="text-5xl font-bold tracking-tighter md:text-6xl">
            Contact us
          </h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
