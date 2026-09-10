import Link from "next/link";
import CategoryGrid from "@/components/CategoryGrid";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <>
      <section className="hero center">
        <div className="eyebrow">Crafted by hand</div>
        <h1>Shoes, bags and wears, <em>made by hand</em></h1>
        <p>Pick a collection to start browsing. Add your picks to the basket and check out in minutes.</p>
      </section>
      <Marquee />
      <div className="hero-cta">
        <a href="#catgrid" className="btn btn-primary btn-lg">
          Shop now
          <svg className="ic" viewBox="0 0 24 24" style={{ width: 16, height: 16 }}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </a>
        <div className="aud-pills">
          <Link href="/shop?aud=men" className="btn btn-ghost btn-pill">Men</Link>
          <Link href="/shop?aud=women" className="btn btn-ghost btn-pill">Women</Link>
        </div>
      </div>
      <CategoryGrid />
    </>
  );
}
