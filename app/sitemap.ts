import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://woufstyle-shop.vercel.app";
const paths = ["", "/produits/cuddlecarry-hoodie", "/faq", "/guide-des-tailles", "/livraison-retours", "/contact", "/a-propos"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({ url: `${base}${p}`, changeFrequency: "weekly", priority: p === "" ? 1 : 0.7 }));
}
