import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import MainNav from "./main-nav";
import MainFooter from "./main-footer";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import GlobalContext from "./global-context";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "Fakestore",
  description: "Fake supplement store mockup",
  applicationName: "Fakestore",
  authors: [
    {
      name: "iusedebian",
      url: "https://github.com/iusedebian",
    },
  ],
  creator: "iusedebian",
  publisher: "iusedebian",
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
        <GlobalContext>
          <MainNav />
          {children}
          <Toaster />
          <MainFooter />
        </GlobalContext>
      </body>
    </html>
  );
}
