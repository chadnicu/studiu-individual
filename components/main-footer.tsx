import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function MainFooter() {
  const FooterLink = ({
    href,
    blank,
    children,
  }: {
    href: string;
    blank?: boolean;
    children: ReactNode;
  }) => (
    <Link
      href={href}
      className="text-xs md:text-sm"
      target={blank ? "_blank" : "_self"}
    >
      {children}
    </Link>
  );

  return (
    <footer className="mt-10 flex flex-col items-center justify-center p-10 md:px-16">
      {/* phone only */}
      <div className="mb-10 text-left md:mb-0 md:hidden">
        <h1 className="mb-1 text-sm font-semibold md:text-base">Disclaimer</h1>
        <p className="text-xs md:text-sm">
          These statements have not been evaluated by the FDA. These products
          are not intended to diagnose, treat, cure, or prevent any disease.
        </p>
      </div>

      <div className="flex w-screen items-center justify-between px-10 md:px-20">
        {/* desktop only */}
        <div className="mb-10 hidden text-left md:mb-0 md:block md:max-w-[200px] lg:max-w-xs">
          <h1 className="mb-1 text-sm font-semibold md:text-base">
            Disclaimer
          </h1>
          <p className="text-xs md:text-sm">
            These statements have not been evaluated by the FDA. These products
            are not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>

        <div className="flex flex-col items-start justify-start text-left md:max-w-[200px] lg:max-w-xs">
          <h1 className="mb-1 text-sm font-semibold md:text-base">
            Quick links
          </h1>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/products">Products</FooterLink>
          <FooterLink href="/about">About</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
        </div>
        <div className="text-left md:max-w-[200px] lg:max-w-xs">
          <h1 className="mb-1 text-sm font-semibold md:text-base">Follow us</h1>
          <div className="flex items-center gap-1">
            <Image
              src="/facebook.svg"
              width={12}
              height={12}
              alt="Facebook icon"
            />
            <FooterLink href="https://www.facebook.com/" blank>
              fakestore
            </FooterLink>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/twitter.svg"
              width={12}
              height={12}
              alt="Twitter icon"
            />
            <FooterLink href="https://www.twitter.com/" blank>
              fakestore
            </FooterLink>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/youtube.svg"
              width={12}
              height={12}
              alt="Youtube icon"
            />
            <FooterLink href="https://www.youtube.com/" blank>
              fakestore
            </FooterLink>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/instagram.svg"
              width={12}
              height={12}
              alt="Instagram icon"
            />
            <FooterLink href="https://www.instagram.com/" blank>
              fakestore
            </FooterLink>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start text-left md:max-w-[200px] lg:max-w-xs">
          <h1 className="mb-1 text-sm font-semibold md:text-base">Policies</h1>
          <FooterLink href="" blank>
            Shipping Policy
          </FooterLink>
          <FooterLink href="" blank>
            Privacy Policy
          </FooterLink>
          <FooterLink href="" blank>
            Terms of Use
          </FooterLink>
          <FooterLink href="" blank>
            Sign In
          </FooterLink>
        </div>
      </div>

      <hr className="my-11 w-screen border-t-[1px] border-white opacity-50 " />

      <p className="text-xs font-semibold md:text-sm">
        © Copyright 2023 | fakestore - All Rights Reserved
      </p>
    </footer>
  );
}
