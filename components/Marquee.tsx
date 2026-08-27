import { categories } from "@/lib/products";

export default function Marquee() {
  const imgs = [...categories, ...categories];
  return (
    <div className="showcase">
      <h2>From the workshop</h2>
      <div className="marquee">
        <div className="mtrack">
          {imgs.map((c, i) => (
            <img key={i} className="mim" src={c.image} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}
