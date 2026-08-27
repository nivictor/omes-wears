import Link from "next/link";
import { notFound } from "next/navigation";
import { products, productBySlug } from "@/lib/products";
import ProductDetail from "@/components/ProductDetail";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = productBySlug(params.slug);
  if (!p) return notFound();
  return (
    <>
      <Link href="/shop" className="back">
        <svg className="ic" viewBox="0 0 24 24" style={{ width: 16, height: 16 }}>
          <path d="M15 6l-6 6 6 6" />
        </svg>
        Back to shop
      </Link>
      <ProductDetail p={p} />
    </>
  );
}
