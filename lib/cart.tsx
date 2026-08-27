"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type CartItem = {
  key: string;
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  size: string;
  colour: string;
  image: string;
  qty: number;
};

type AddInput = Omit<CartItem, "key" | "qty">;

type CartContextType = {
  items: CartItem[];
  add: (item: AddInput, qty: number) => void;
  remove: (key: string) => void;
  setQty: (key: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
};

const CartContext = createContext<CartContextType | null>(null);
const STORAGE_KEY = "omes-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items, loaded]);

  const add = (item: AddInput, qty: number) => {
    const key = `${item.id}|${item.size}|${item.colour}`;
    setItems((prev) => {
      const found = prev.find((x) => x.key === key);
      if (found) return prev.map((x) => (x.key === key ? { ...x, qty: x.qty + qty } : x));
      return [...prev, { ...item, key, qty }];
    });
  };
  const remove = (key: string) => setItems((prev) => prev.filter((x) => x.key !== key));
  const setQty = (key: string, qty: number) =>
    setItems((prev) => prev.map((x) => (x.key === key ? { ...x, qty: Math.max(1, qty) } : x)));
  const clear = () => setItems([]);

  const count = items.reduce((a, x) => a + x.qty, 0);
  const subtotal = items.reduce((a, x) => a + x.price * x.qty, 0);

  return (
    <CartContext.Provider value={{ items, add, remove, setQty, clear, count, subtotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
