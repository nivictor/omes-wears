import Link from "next/link";
import { categories } from "@/lib/products";

export default function CategoryGrid() {
  return (
    <div className="bento">
      {categories.map((c) => (
        <Link key={c.slug} href={`/category/${c.slug}`} className={`cat ${c.layout}`}>
          <img className="bg" src={c.image} alt={c.name} />
          <div className="scrim" />
          <div className="chip-lab">{c.group}</div>
          <div className="cc">
            <div>
              <h3>{c.name}</h3>
              <div className="cd">{c.desc}</div>
            </div>
            <span className="arrow">
              <svg className="ic" viewBox="0 0 24 24" style={{ width: 15, height: 15 }}>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
