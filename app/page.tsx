import Link from "next/link";
import CategoryGrid from "@/components/CategoryGrid";
import Marquee from "@/components/Marquee";
import ProductCard from "@/components/ProductCard";
import { featuredProducts } from "@/lib/products";

export default function Home() {
  const featured = featuredProducts().slice(0, 4);
  return (
    <>
      <section className="hero">
        <div className="eyebrow">Crafted by hand</div>
        <h1>
          Shoes, bags and wears, <em>made by hand</em>
        </h1>
        <p>Pick a collection to start browsing. Add your picks to the basket and check out in minutes.</p>
      </section>
      <CategoryGrid />
      <section className="strip">
        <div className="shead">
          <h2>New in</h2>
          <Link href="/shop">View all</Link>
        </div>
        <div className="pgrid">
          {featured.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>
      <Marquee />
    </>
  );
}
