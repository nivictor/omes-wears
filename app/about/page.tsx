import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="prose">
      <div className="eyebrow">Our craft</div>
      <h1>Made by hand, made to last</h1>
      <p>Omes wears is a small workshop turning full-grain leather and honest materials into shoes, bags and easy wears that are built to be worn every day, not just admired.</p>
      <p>Every pair and every bag is cut, stitched and finished to order. You wait a little longer than you would for something off a factory line, and in return you get a piece made for you, in the colour and size you chose, with stitching that holds up for years.</p>
      <p>We keep the range tight and the quality high. If you can dream up a variation, message us and we will tell you honestly whether we can make it.</p>
      <Link href="/contact" className="btn btn-primary">Talk to us</Link>
    </div>
  );
}
