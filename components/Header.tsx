"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/lib/cart";
import { config } from "@/lib/config";

export default function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const [floating, setFloating] = useState(false);
  const parts = config.brand.name.split(" ");

  useEffect(() => {
    const onScroll = () => setFloating(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`bar ${floating ? "floating" : ""}`}>
      <nav className={`nav-links ${open ? "open" : ""}`}>
        <button className="menu-btn icon-btn" aria-label="Menu" onClick={() => setOpen(!open)}>
          <svg className="ic" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
        </button>
        <Link href="/shop?aud=men" onClick={() => setOpen(false)}>Men</Link>
        <Link href="/shop?aud=women" onClick={() => setOpen(false)}>Women</Link>
        <Link href="/shop" onClick={() => setOpen(false)}>Shop</Link>
      </nav>
      <Link href="/" className="wordmark" onClick={() => setOpen(false)}>
        <b>{parts[0]}</b><span> {parts.slice(1).join(" ")}</span>
      </Link>
      <div className="bar-right">
        <Link href="/shop" className="icon-btn" aria-label="Search">
          <svg className="ic" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4" /></svg>
        </Link>
        <Link href="/basket" className="cart-btn" aria-label="Basket">
          <svg className="ic" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1.5"/><circle cx="20" cy="21" r="1.5"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          <span className="cart-count">{count}</span>
        </Link>
      </div>
    </header>
  );
}
