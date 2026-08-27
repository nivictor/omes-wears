import Link from "next/link";
import { Product } from "@/lib/products";
import { ngn } from "@/lib/format";

function sizeSummary(p: Product) {
  const s = p.sizes;
  if (!s.length) return "";
  const numeric = /^[0-9]/.test(s[0]) && !s[0].includes('"');
  if (numeric && s.length > 2) return `Sizes ${s[0]}\u2013${s[s.length - 1]}`;
  return "Sizes " + s.join(" \u00b7 ");
}

export default function ProductCard({ p }: { p: Product }) {
  return (
    <Link href={`/product/${p.slug}`} className="card">
      <div className="pic">
        <img src={p.image} alt={p.name} />
        {p.featured && <span className="tag">New in</span>}
      </div>
      <div className="nm">{p.name}</div>
      <div className="pr">{ngn(p.price)}</div>
      <div className="sz">{sizeSummary(p)}</div>
      <div className="sw">
        {p.colours.map((c) => (
          <span key={c.hex} className="dot" style={{ background: c.hex }} />
        ))}
      </div>
    </Link>
  );
}
