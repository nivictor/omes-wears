"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { categories, products, audienceOf } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

function ShopInner() {
  const params = useSearchParams();
  const [aud, setAud] = useState("all");
  const [cat, setCat] = useState("all");

  useEffect(() => {
    const a = params.get("aud");
    if (a === "men" || a === "women") setAud(a);
  }, [params]);

  const auds = [{ k: "all", n: "Everyone" }, { k: "men", n: "Men" }, { k: "women", n: "Women" }];
  const chips = [{ slug: "all", name: "All" }, ...categories.map((c) => ({ slug: c.slug, name: c.name }))];

  const list = products.filter((p) => {
    const catOk = cat === "all" || p.category === cat;
    const a = audienceOf(p);
    const audOk = aud === "all" || a === aud || a === "unisex";
    return catOk && audOk;
  });

  const catObj = categories.find((c) => c.slug === cat);
  const audName = aud === "men" ? "Men" : aud === "women" ? "Women" : "";
  let title = "Shop all", sub = "Every piece, made to order.";
  if (catObj && audName) { title = `${audName} \u00b7 ${catObj.name}`; sub = catObj.desc; }
  else if (catObj) { title = catObj.name; sub = catObj.desc; }
  else if (audName) { title = audName; sub = `${audName}'s picks, plus every unisex piece.`; }

  return (
    <>
      <div className="toolbar"><h1>{title}</h1><p>{sub}</p></div>
      <div className="chips audrow">
        {auds.map((a) => (<button key={a.k} className={`chip ${a.k === aud ? "on" : ""}`} onClick={() => setAud(a.k)}>{a.n}</button>))}
      </div>
      <div className="chips">
        {chips.map((c) => (<button key={c.slug} className={`chip ${c.slug === cat ? "on" : ""}`} onClick={() => setCat(c.slug)}>{c.name}</button>))}
      </div>
      <div className="shopwrap">
        <div className="pgrid">
          {list.length ? list.map((p) => <ProductCard key={p.id} p={p} />) : <p style={{ color: "var(--muted)", padding: "8px 2px" }}>Nothing in this combination yet.</p>}
        </div>
      </div>
    </>
  );
}

export default function ShopPage() {
  return <Suspense><ShopInner /></Suspense>;
}
