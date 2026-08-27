export type Colour = { name: string; hex: string };

export type Category = {
  slug: string;
  name: string;
  group: "Footwear" | "Bags";
  desc: string;
  layout: "big" | "wide" | "small";
  image: string;
};

export type Product = {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  description: string;
  sizes: string[];
  colours: Colour[];
  featured: boolean;
  image: string;
};

export const categories: Category[] = [
  { slug: "office-shoes", name: "Office shoes", group: "Footwear", desc: "Formal and oxford styles", layout: "big", image: "/products/office-shoes.jpg" },
  { slug: "handbags", name: "Handbags", group: "Bags", desc: "Totes, satchels and crossbody", layout: "wide", image: "/products/handbags.jpg" },
  { slug: "canvas", name: "Canvas", group: "Footwear", desc: "Everyday sneakers", layout: "small", image: "/products/canvas.jpg" },
  { slug: "laptop-bags", name: "Laptop bags", group: "Bags", desc: "Padded, professional", layout: "small", image: "/products/laptop-bags.jpg" },
  { slug: "easy-footwears", name: "Easy footwears", group: "Footwear", desc: "Slippers, slides, sandals", layout: "small", image: "/products/easy-footwears.jpg" },
  { slug: "school-bags", name: "School bags", group: "Bags", desc: "Backpacks built to last", layout: "wide", image: "/products/school-bags.jpg" }
];

const SH = ["39", "40", "41", "42", "43", "44", "45"];
const HB = ["Small", "Medium", "Large"];
const LB = ['13"', '14"', '15"', '17"'];
const SB = ["Small", "Standard", "Large"];

const C: Record<string, Colour> = {
  brown: { name: "Brown", hex: "#6B4A2E" },
  black: { name: "Black", hex: "#241c14" },
  tan: { name: "Tan", hex: "#C29B6A" },
  cream: { name: "Cream", hex: "#E7DAC2" },
  rust: { name: "Rust", hex: "#A8461F" },
  olive: { name: "Olive", hex: "#6E6B3C" },
  navy: { name: "Navy", hex: "#2C3648" },
  grey: { name: "Grey", hex: "#726B60" },
  white: { name: "White", hex: "#EFEAE0" }
};

const img = (cat: string) => `/products/${cat}.jpg`;

export const products: Product[] = [
  { id: 1, slug: "ledger-oxford", name: "The Ledger oxford", category: "office-shoes", price: 28500, description: "A classic cap-toe brogue oxford in full-grain leather, hand-stitched with a leather sole.", sizes: SH, colours: [C.brown, C.black], featured: true, image: img("office-shoes") },
  { id: 2, slug: "derby-classic", name: "Derby classic", category: "office-shoes", price: 26000, description: "A rounded derby with open lacing, roomy and comfortable for long days.", sizes: SH, colours: [C.black, C.brown], featured: false, image: img("office-shoes") },
  { id: 3, slug: "monk-strap", name: "Monk strap", category: "office-shoes", price: 31000, description: "A single-buckle monk strap that dresses up without a tie.", sizes: SH, colours: [C.brown], featured: true, image: img("office-shoes") },
  { id: 4, slug: "canvas-low", name: "Canvas low", category: "canvas", price: 13500, description: "A clean low-top canvas sneaker on a cushioned sole. The everyday pair you reach for.", sizes: SH, colours: [C.white, C.navy, C.olive], featured: true, image: img("canvas") },
  { id: 5, slug: "canvas-high", name: "Canvas high", category: "canvas", price: 15000, description: "A high-top cut with more ankle support and attitude.", sizes: SH, colours: [C.black, C.rust], featured: false, image: img("canvas") },
  { id: 6, slug: "court-canvas", name: "Court canvas", category: "canvas", price: 14000, description: "A slim court-style sneaker with a minimal profile.", sizes: SH, colours: [C.white, C.grey], featured: false, image: img("canvas") },
  { id: 7, slug: "slide-sandal", name: "Slide sandal", category: "easy-footwears", price: 7500, description: "A padded leather slide that shapes to your foot. Made for warm days and quick trips.", sizes: SH, colours: [C.brown, C.black], featured: true, image: img("easy-footwears") },
  { id: 8, slug: "palm-slipper", name: "Palm slipper", category: "easy-footwears", price: 9000, description: "A woven-look leather slipper, light and breathable.", sizes: SH, colours: [C.tan, C.brown], featured: false, image: img("easy-footwears") },
  { id: 9, slug: "thong-sandal", name: "Thong sandal", category: "easy-footwears", price: 6500, description: "A simple leather thong sandal, hand-cut and soft from day one.", sizes: SH, colours: [C.black, C.rust], featured: false, image: img("easy-footwears") },
  { id: 10, slug: "day-tote", name: "The Day tote", category: "handbags", price: 24000, description: "A structured tote with a flat base that stands on its own. Fits a tablet, a book and the day.", sizes: HB, colours: [C.cream, C.brown, C.black], featured: true, image: img("handbags") },
  { id: 11, slug: "crossbody-satchel", name: "Crossbody satchel", category: "handbags", price: 19500, description: "A compact crossbody with an adjustable strap and a secure flap.", sizes: HB, colours: [C.rust, C.brown], featured: false, image: img("handbags") },
  { id: 12, slug: "evening-clutch", name: "Evening clutch", category: "handbags", price: 16000, description: "A slim clutch with a detachable chain, dressed up or down.", sizes: HB, colours: [C.black, C.navy], featured: false, image: img("handbags") },
  { id: 13, slug: "pro-laptop-bag", name: "Pro laptop bag", category: "laptop-bags", price: 27500, description: "A padded sleeve built into a slim carry bag, with a document pocket.", sizes: LB, colours: [C.black, C.brown], featured: true, image: img("laptop-bags") },
  { id: 14, slug: "folio-brief", name: "Folio brief", category: "laptop-bags", price: 30000, description: "A structured briefcase-style bag for the office, padded for a laptop.", sizes: LB, colours: [C.brown, C.navy], featured: false, image: img("laptop-bags") },
  { id: 15, slug: "sling-tech", name: "Sling tech", category: "laptop-bags", price: 18000, description: "A cross-body sling for a tablet and the essentials.", sizes: LB, colours: [C.black, C.grey], featured: false, image: img("laptop-bags") },
  { id: 16, slug: "day-pack", name: "Day pack", category: "school-bags", price: 21000, description: "A roomy canvas backpack with padded straps and a reinforced base, built for daily hauling.", sizes: SB, colours: [C.tan, C.black, C.olive], featured: true, image: img("school-bags") },
  { id: 17, slug: "scholar-pack", name: "Scholar pack", category: "school-bags", price: 18500, description: "A classic school backpack with a laptop pocket and side bottle holders.", sizes: SB, colours: [C.black, C.rust], featured: false, image: img("school-bags") },
  { id: 18, slug: "mini-pack", name: "Mini pack", category: "school-bags", price: 14500, description: "A smaller backpack for lighter days and younger students.", sizes: SB, colours: [C.tan, C.brown], featured: false, image: img("school-bags") }
];

export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);
export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);
export const productsByCategory = (slug: string) => products.filter((p) => p.category === slug);
export const featuredProducts = () => products.filter((p) => p.featured);
