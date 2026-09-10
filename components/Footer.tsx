import Link from "next/link";
import { config } from "@/lib/config";

export default function Footer() {
  const parts = config.brand.name.split(" ");
  return (
    <footer className="ft">
      <div className="fwrap">
        <div className="fcol fbrand">
          <div className="wordmark"><b>{parts[0]}</b><span> {parts.slice(1).join(" ")}</span></div>
          <p>{config.brand.tagline}</p>
        </div>
        <div className="fcol">
          <h5>Footwear</h5>
          <Link href="/category/office-shoes">Office shoes</Link>
          <Link href="/category/canvas">Canvas</Link>
          <Link href="/category/easy-footwears">Easy footwears</Link>
        </div>
        <div className="fcol">
          <h5>Bags</h5>
          <Link href="/category/handbags">Handbags</Link>
          <Link href="/category/laptop-bags">Laptop bags</Link>
          <Link href="/category/school-bags">School bags</Link>
        </div>
        <div className="fcol">
          <h5>{config.brand.name}</h5>
          <Link href="/about">Our craft</Link>
          <Link href="/contact">Contact</Link>
          <span className="fx" style={{ marginTop: 8 }}>{config.contact.phone}</span>
          <span className="fx">{config.contact.email}</span>
        </div>
      </div>
      <div className="fbottom">&copy; {new Date().getFullYear()} {config.brand.name}. Handmade in Nigeria.</div>
    </footer>
  );
}
