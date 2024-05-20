"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

export default function MainNav() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [shoppingCart, setShoppingCart] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setMobileMenu(false);
    setShoppingCart(false);
  }, [pathname]);

  const NavLink = ({
    href,
    desktop,
    children,
  }: {
    href: string;
    desktop?: boolean;
    children: ReactNode;
  }) => (
    <Link
      href={href}
      className={cn("duration-300 hover:scale-110", {
        "text-lightBlue": pathname === href,
        "hidden text-lg md:block": desktop,
      })}
    >
      {children}
    </Link>
  );

  return (
    <>
      {/* mobile menu opened */}
      <section
        className={cn("absolute z-10 h-screen w-screen md:hidden", {
          hidden: !mobileMenu,
        })}
      >
        <div
          className="absolute h-screen w-screen bg-darkBlue opacity-80"
          onClick={() => setMobileMenu(false)}
        />
        <div className="animate-fadeIn absolute right-4 top-4 flex flex-col items-center justify-center gap-7 rounded-xl bg-[#131d36] pb-9 pl-10 pr-16 pt-12 font-semibold">
          <Cross2Icon
            className="absolute right-5 top-5 h-5 w-5 text-white duration-300 hover:scale-110"
            onClick={() => setMobileMenu(false)}
          />
          <NavLink href="/">Home</NavLink>
          <NavLink href="/products">Products</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/sign-in">Sign In</NavLink>
        </div>
      </section>

      {/* shopping cart opened */}
      <section
        className={cn("absolute z-10 m-auto h-screen w-screen", {
          hidden: !shoppingCart,
        })}
      >
        <div
          className="absolute h-full w-full bg-darkBlue opacity-80"
          onClick={() => setShoppingCart(false)}
        />
        <div className="animate-fadeIn absolute right-9 top-4 flex flex-col items-center justify-center gap-7 rounded-xl bg-[#131d36] pb-9 pl-10 pr-16 pt-12 font-medium md:right-0 md:top-0 md:h-full md:w-80 md:justify-start md:rounded-none lg:w-96">
          <Cross2Icon
            className="absolute right-5 top-5 h-5 w-5 text-white duration-300 hover:scale-110 md:right-11 md:top-10 lg:h-7 lg:w-7"
            onClick={() => setShoppingCart(false)}
          />
          <h1 className="text-lg font-bold">Shopping Cart</h1>
          <p>Your cart is empty</p>
        </div>
      </section>

      {/* desktop navbar */}
      <nav className="mt-7 flex justify-between px-7 md:mt-9 md:px-10">
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/icon.svg"
            className="h-8 w-8 md:h-10 md:w-10"
            width={50}
            height={50}
            alt="fakestore logo"
          />
          <Link href="/" className="text-xl font-semibold md:text-2xl">
            fakestore
          </Link>
        </div>
        <div className="flex items-center justify-center gap-2 text-xs font-medium md:flex-row md:gap-8 md:text-base lg:gap-10">
          <NavLink href="/" desktop>
            Home
          </NavLink>
          <NavLink href="/products" desktop>
            Products
          </NavLink>
          <NavLink href="/about" desktop>
            About
          </NavLink>
          <NavLink href="/contact" desktop>
            Contact
          </NavLink>
          <NavLink href="/sign-in" desktop>
            Sign In
          </NavLink>
          <ShoppingCartIcon
            className="h-6 w-6 text-lightBlue duration-300 hover:scale-110 md:h-8 md:w-8"
            onClick={() => setShoppingCart(true)}
          />
          <HamburgerMenuIcon
            className="h-6 w-6 text-white md:hidden"
            onClick={() => setMobileMenu(true)}
          />
        </div>
      </nav>
    </>
  );
}
