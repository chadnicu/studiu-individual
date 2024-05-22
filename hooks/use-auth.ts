"use client";

import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useAuth() {
  const user =
    typeof window !== "undefined" ? localStorage.getItem("auth") : null;

  const [auth, setAuth] = useState(user);

  const router = useRouter();

  function signOut() {
    localStorage.removeItem("auth");
    setAuth(null);
    toast({
      title: "Successfully Logged Out",
      description: "We're sorry to see you go ;(",
    });
  }

  function signIn({ email, password }: { email: string; password: string }) {
    if (email === process.env.email && password === process.env.password) {
      localStorage.setItem("auth", "DemoUser");
      setAuth("DemoUser");
      toast({
        title: "Successfully Logged In!",
        description: "Enjoy shopping!",
        variant: "success",
      });
      router.refresh();
    } else {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "Couldn't find an account for this email and password.",
        variant: "destructive",
      });
    }
  }

  return { auth, signIn, signOut };
}
