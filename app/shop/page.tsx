"use client";
import { useState } from "react";
import { categories, products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function ShopPage() {
  const [filter, setFilter] = useState("all");
  const chips = [{ slug: "all", name: "All" }, ...categories.map((c) => ({ slug: c.slug, name: c.name }))];
  const list = filter === "all" ? products : products.filter((p) => p.category === filter);
  const cat = categories.find((c) => c.slug === filter);
  return (
    <>
      <div className="toolbar">
        <h1>{cat ? cat.name : "Shop all"}</h1>
        <p>{cat ? cat.desc : "Every piece, made to order."}</p>
      </div>
      <div className="chips">
        {chips.map((c) => (
          <button key={c.slug} className={`chip ${c.slug === filter ? "on" : ""}`} onClick={() => setFilter(c.slug)}>
            {c.name}
          </button>
        ))}
      </div>
      <div className="shopwrap">
        <div className="pgrid">
          {list.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </>
  );
}
