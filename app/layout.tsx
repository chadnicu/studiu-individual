import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainNav from "./(components)/main-nav";

export const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fakestore",
  description: "Fake supplement store mockup",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "tracking-tight dark bg-darkBlue bg-[url('/background-blur.png')] bg-cover bg-center bg-no-repeat",
          inter.className
        )}
      >
        <MainNav />
        {children}
      </body>
    </html>
  );
}
