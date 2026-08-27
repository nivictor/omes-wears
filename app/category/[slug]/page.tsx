import { notFound } from "next/navigation";
import { categories, categoryBySlug, productsByCategory } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const cat = categoryBySlug(params.slug);
  if (!cat) return notFound();
  const list = productsByCategory(cat.slug);
  return (
    <>
      <div className="toolbar">
        <h1>{cat.name}</h1>
        <p>{cat.desc}</p>
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
