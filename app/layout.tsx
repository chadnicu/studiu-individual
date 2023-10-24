import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainNav from "@/components/main-nav";
import MainFooter from "@/components/main-footer";
import { cn } from "@/lib/utils";

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
          "items-around dark flex min-h-screen flex-col justify-between gap-20 overflow-x-hidden bg-darkBlue bg-[url('/background-blur.png')] bg-cover bg-center bg-no-repeat tracking-tight",
          inter.className,
        )}
      >
        <MainNav />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
