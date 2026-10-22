import type { Metadata } from "next";
import ProductView from "@/components/ProductView";
import ProductSections from "@/components/ProductSections";
import Faq from "@/components/Faq";
import { COLORS, CURRENCY, PRODUCT, UNIT_PRICE } from "@/lib/config";

export const metadata: Metadata = {
  title: PRODUCT.title,
  description: PRODUCT.description,
  openGraph: { images: COLORS[0].image ? [COLORS[0].image] : [] },
};

// Données structurées produit (sans note agrégée : Google exige des avis vérifiables).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: PRODUCT.title,
  description: PRODUCT.description,
  brand: { "@type": "Brand", name: "Woufstyle" },
  image: COLORS.flatMap((c) => (c.image ? [c.image] : [])),
  offers: {
    "@type": "Offer",
    price: UNIT_PRICE.toFixed(2),
    priceCurrency: CURRENCY,
    availability: "https://schema.org/InStock",
  },
};

export default function ProductPage() {
  return (
    <>
      <ProductView />
      <ProductSections />
      <Faq />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
