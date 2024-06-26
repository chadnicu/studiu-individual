"use client";

import { toast } from "@/components/ui/use-toast";
import { Product } from "@/types";
import { ReactNode, createContext, useEffect, useState } from "react";

type CartContext = {
  cart: CartItemValues[];
  addToCart: (item: CartItemValues) => void;
  removeFromCart: (index: number) => void;
  clearCart: () => void;
};

export type CartItemValues = Omit<
  Product,
  "description" | "longDescription" | "starCount"
>;

export const ShoppingCartContext = createContext<CartContext>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

type AuthentificationContext = {
  username: string | null;
  signIn: ({ email, password }: { email: string; password: string }) => void;
  signOut: () => void;
};

export const AuthContext = createContext<AuthentificationContext>({
  username: null,
  signIn: () => {},
  signOut: () => {},
});

export default function GlobalContext({ children }: { children: ReactNode }) {
  // cart
  const [cart, setCart] = useState<CartItemValues[]>(
    typeof window !== "undefined" && !!localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart") as string)
      : [],
  );

  useEffect(() => {
    if (typeof window !== "undefined")
      localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item: CartItemValues) {
    toast({
      title: "Item was successfully added to the shopping cart.",
      variant: "success",
    });
    setCart([...cart, item]);
  }

  function removeFromCart(index: number) {
    toast({
      title: "Item was successfully removed from the shopping cart.",
    });
    setCart(cart.toSpliced(index, 1));
  }

  function clearCart() {
    toast({
      title: "Shopping cart was successfully emptied.",
    });
    setCart([]);
  }

  // auth
  const [username, setUsername] = useState<string | null>(
    typeof window !== "undefined" && !!localStorage.getItem("auth")
      ? localStorage.getItem("auth")
      : null,
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (username) localStorage.setItem("auth", username);
    else localStorage.removeItem("auth");
  }, [username]);

  function signOut() {
    setUsername(null);
    toast({
      title: "Successfully Logged Out",
      description: "We're sorry to see you go ;(",
    });
  }

  function signIn({ email, password }: { email: string; password: string }) {
    if (email === process.env.email && password === process.env.password) {
      setUsername("DemoUser");
      toast({
        title: "Successfully Logged In!",
        description: "Enjoy shopping!",
        variant: "success",
      });
    } else {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "Couldn't find an account for this email and password.",
        variant: "destructive",
      });
    }
  }

  return (
    <AuthContext.Provider value={{ username, signIn, signOut }}>
      <ShoppingCartContext.Provider
        value={{ cart, addToCart, removeFromCart, clearCart }}
      >
        {children}
      </ShoppingCartContext.Provider>
    </AuthContext.Provider>
  );
}
