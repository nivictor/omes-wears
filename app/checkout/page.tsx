"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import { config } from "@/lib/config";
import { ngn } from "@/lib/format";

export default function CheckoutPage() {
  const { items, subtotal } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [addr, setAddr] = useState("");
  const [note, setNote] = useState("");
  const [bad, setBad] = useState<{ name?: boolean; phone?: boolean; addr?: boolean }>({});
  const [copied, setCopied] = useState(false);

  if (items.length === 0) {
    return (
      <div className="panel">
        <div className="empty">
          <h3>Nothing to check out</h3>
          <p>Your basket is empty.</p>
          <Link href="/shop" className="btn btn-primary" style={{ marginTop: 16 }}>Start shopping</Link>
        </div>
      </div>
    );
  }

  function copyAcct() {
    try {
      navigator.clipboard.writeText(config.bank.accountNumber);
    } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  function placeOrder() {
    const errs = { name: !name.trim(), phone: !phone.trim(), addr: !addr.trim() };
    setBad(errs);
    if (errs.name || errs.phone || errs.addr) return;

    let msg = "New order from " + config.brand.name + "\n---\n";
    items.forEach((l) => {
      msg += `${l.qty} x ${l.name} | Size ${l.size}, ${l.colour} | ${ngn(l.price * l.qty)}\n`;
    });
    msg += "---\n";
    msg += `Subtotal: ${ngn(subtotal)}\n`;
    msg += `Payment: Bank transfer to ${config.bank.name} (${config.bank.accountName})\n`;
    msg += "Delivery: to be confirmed\n---\n";
    msg += `Name: ${name}\nPhone: ${phone}\nAddress: ${addr}`;
    if (note.trim()) msg += `\nNote: ${note}`;

    const url = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  }

  return (
    <div className="panel">
      <h1>Checkout</h1>
      <div className="co-grid">
        <div>
          <div className={`field ${bad.name ? "bad" : ""}`}>
            <label>Full name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
            <div className="err">Enter your name</div>
          </div>
          <div className={`field ${bad.phone ? "bad" : ""}`}>
            <label>Phone number</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="080..." />
            <div className="err">Enter your phone number</div>
          </div>
          <div className={`field ${bad.addr ? "bad" : ""}`}>
            <label>Delivery address</label>
            <textarea rows={3} value={addr} onChange={(e) => setAddr(e.target.value)} placeholder="Where should we deliver?" />
            <div className="err">Enter a delivery address</div>
          </div>
          <div className="field">
            <label>Note (optional)</label>
            <textarea rows={2} value={note} onChange={(e) => setNote(e.target.value)} placeholder="Anything we should know?" />
          </div>
          <button className="btn btn-primary btn-block" onClick={placeOrder}>
            <svg className="ic" viewBox="0 0 24 24" style={{ width: 18, height: 18 }}>
              <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.2-5.4A8.5 8.5 0 1 1 21 11.5z" />
            </svg>
            Place order on WhatsApp
          </button>
          <p className="fineprint">Your order opens in WhatsApp so you can send it to us and attach your transfer receipt.</p>
        </div>
        <div>
          <div className="summary">
            <h4>Order summary</h4>
            {items.map((l) => (
              <div className="sline" key={l.key}>
                <span>{l.qty} &times; {l.name}</span>
                <span>{ngn(l.price * l.qty)}</span>
              </div>
            ))}
            <div className="sline total"><span>Total (goods)</span><span>{ngn(subtotal)}</span></div>
            <div className="sline"><span>Delivery</span><span>Confirmed on WhatsApp</span></div>
          </div>
          <div className="paybox">
            <h4>
              <svg className="ic" viewBox="0 0 24 24" style={{ width: 17, height: 17 }}>
                <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18" />
              </svg>
              Pay by bank transfer
            </h4>
            <div className="payrow"><span>Bank</span><b>{config.bank.name}</b></div>
            <div className="payrow"><span>Account name</span><b>{config.bank.accountName}</b></div>
            <div className="payrow">
              <span>Account number</span>
              <b className="acct">
                {config.bank.accountNumber}
                <button className="copybtn" onClick={copyAcct}>{copied ? "Copied" : "Copy"}</button>
              </b>
            </div>
            <p className="paynote">Transfer the goods total to this account, then press Place order on WhatsApp and attach your payment receipt. {config.deliveryNote}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
