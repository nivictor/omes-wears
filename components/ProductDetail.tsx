"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product, categoryBySlug } from "@/lib/products";
import { ngn } from "@/lib/format";
import { useCart } from "@/lib/cart";

export default function ProductDetail({ p }: { p: Product }) {
  const { add } = useCart();
  const router = useRouter();
  const [size, setSize] = useState<string | null>(null);
  const [colour, setColour] = useState(p.colours[0]);
  const [qty, setQty] = useState(1);
  const [err, setErr] = useState(false);
  const cat = categoryBySlug(p.category);

  function addToCart() {
    if (!size) {
      setErr(true);
      return;
    }
    add(
      { id: p.id, slug: p.slug, name: p.name, category: p.category, price: p.price, size, colour: colour.name, image: p.image },
      qty
    );
    router.push("/basket");
  }

  return (
    <div className="pd">
      <div className="gallery">
        <img src={p.image} alt={p.name} />
      </div>
      <div>
        <div className="eyebrow">{cat?.name}</div>
        <h1 style={{ marginTop: 8 }}>{p.name}</h1>
        <div className="price">{ngn(p.price)}</div>
        <div className="desc">{p.description}</div>

        <div className="flabel">Select size</div>
        <div className="opts">
          {p.sizes.map((s) => (
            <button
              key={s}
              className={`opt ${size === s ? "on" : ""}`}
              onClick={() => {
                setSize(s);
                setErr(false);
              }}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="flabel">Colour &mdash; {colour.name}</div>
        <div className="opts">
          {p.colours.map((c) => (
            <span
              key={c.hex}
              className={`cdot ${colour.hex === c.hex ? "on" : ""}`}
              style={{ background: c.hex }}
              onClick={() => setColour(c)}
            />
          ))}
        </div>

        <div className="qtyrow">
          <div>
            <div className="flabel" style={{ marginBottom: 6 }}>Quantity</div>
            <div className="stepper">
              <button onClick={() => setQty(Math.max(1, qty - 1))}>&minus;</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>
          </div>
        </div>

        <button className="btn btn-primary btn-block" onClick={addToCart}>Add to basket</button>
        {err && <div className="inline-err">Please choose a size first.</div>}
      </div>
    </div>
  );
}
