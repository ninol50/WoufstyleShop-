import type { Metadata } from "next";
import ProductView from "@/components/ProductView";
import ProductSections from "@/components/ProductSections";
import Faq from "@/components/Faq";
import { PRODUCT } from "@/lib/config";

export const metadata: Metadata = {
  title: PRODUCT.title,
  description: PRODUCT.description,
  openGraph: { images: ["https://cdn.shopify.com/s/files/1/0988/9890/3364/files/cuddlecarry-beige.jpg"] },
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
