"use client";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { config } from "@/lib/config";

export default function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const parts = config.brand.name.split(" ");
  const first = parts[0];
  const rest = parts.slice(1).join(" ");

  return (
    <header className="bar">
      <div className="bar-left">
        <button className="menu-btn icon-btn" aria-label="Menu" onClick={() => setOpen(!open)}>
          <svg className="ic" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
        </button>
        <Link href="/" className="wordmark" onClick={() => setOpen(false)}>
          <b>{first}</b>
          <span> {rest}</span>
        </Link>
      </div>
      <nav className={`nav-links ${open ? "open" : ""}`}>
        <Link href="/shop" onClick={() => setOpen(false)}>Shop</Link>
        <Link href="/about" onClick={() => setOpen(false)}>About</Link>
        <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </nav>
      <div className="bar-right">
        <Link href="/shop" className="icon-btn" aria-label="Search">
          <svg className="ic" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4" /></svg>
        </Link>
        <Link href="/basket" className="cart-btn" aria-label="Basket">
          <svg className="ic" viewBox="0 0 24 24"><path d="M6 7h12l-1 13H7L6 7z" /><path d="M9 7a3 3 0 0 1 6 0" /></svg>
          <span className="lbl">Basket</span>
          <span className="cart-count">{count}</span>
        </Link>
      </div>
    </header>
  );
}
