"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart";
import { config } from "@/lib/config";
import { ngn } from "@/lib/format";

export default function BasketPage() {
  const { items, remove, setQty, subtotal } = useCart();
  const router = useRouter();

  if (items.length === 0) {
    return (
      <div className="panel">
        <div className="empty">
          <h3>Your basket is empty</h3>
          <p>Browse a collection and add your first piece.</p>
          <Link href="/shop" className="btn btn-primary" style={{ marginTop: 16 }}>Start shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="panel">
      <h1>Your basket</h1>
      {items.map((l) => (
        <div className="line" key={l.key}>
          <div className="lpic"><img src={l.image} alt={l.name} /></div>
          <div className="linfo">
            <div className="lnm">{l.name}</div>
            <div className="lmeta">Size {l.size} &middot; {l.colour}</div>
            <div className="mini-step">
              <button onClick={() => setQty(l.key, l.qty - 1)}>&minus;</button>
              <span>{l.qty}</span>
              <button onClick={() => setQty(l.key, l.qty + 1)}>+</button>
            </div>
            <div className="rm" onClick={() => remove(l.key)}>Remove</div>
          </div>
          <div className="lprice">{ngn(l.price * l.qty)}</div>
        </div>
      ))}
      <div className="totals">
        <div className="totrow"><span>Subtotal</span><span>{ngn(subtotal)}</span></div>
        <div className="note-line">
          <svg className="ic" viewBox="0 0 24 24" style={{ width: 15, height: 15, flex: "none", marginTop: 1 }}>
            <circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16h.01" />
          </svg>
          <span>{config.deliveryNote}</span>
        </div>
        <div className="totrow grand"><span>Total (goods)</span><span>{ngn(subtotal)}</span></div>
      </div>
      <button className="btn btn-primary btn-block" style={{ marginTop: 22 }} onClick={() => router.push("/checkout")}>
        Proceed to checkout
      </button>
      <Link href="/shop" className="btn btn-ghost btn-block" style={{ marginTop: 10 }}>Keep shopping</Link>
    </div>
  );
}
