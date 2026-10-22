import type { Metadata } from "next";
import ProductView from "@/components/ProductView";
import ProductSections from "@/components/ProductSections";
import Faq from "@/components/Faq";
import { PRODUCT } from "@/lib/config";

export const metadata: Metadata = {
  title: PRODUCT.title,
  description: PRODUCT.description,
  openGraph: { images: ["/images/cuddlecarry-beige.jpg"] },
};

export default function ProductPage() {
  return (
    <>
      <ProductView />
      <ProductSections />
      <Faq />
    </>
  );
}
