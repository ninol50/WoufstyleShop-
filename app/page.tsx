import Link from "next/link";
import ShopGrid from "@/components/ShopGrid";
import Reviews from "@/components/Reviews";
import { PRODUCT, bundlePrices, formatPrice } from "@/lib/config";

export default function Home() {
  const { total } = bundlePrices();
  return (
    <>
      <section className="container hero">
        <div>
          <div className="rating" style={{ marginBottom: 12 }}>
            <span className="stars" aria-hidden>★★★★★</span>
            <span>{PRODUCT.rating.toLocaleString("fr-FR")} sur 5 · {PRODUCT.reviewCount.toLocaleString("fr-FR")} avis</span>
          </div>
          <h1>Gardez votre petit chien tout près de vous</h1>
          <p className="section-lead">{PRODUCT.description}</p>
          <div style={{ display: "grid", gap: 10, maxWidth: 420 }}>
            <Link className="btn" href="/produits/cuddlecarry-hoodie">Découvrir le CuddleCarry</Link>
            <span style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
              Lot de 2 : {formatPrice(total)} · 10 % de remise appliquée automatiquement
            </span>
          </div>
        </div>
        <div className="hero-media">
          <img src="/images/cuddlecarry-beige.jpg" alt="Sweat CuddleCarry beige avec un chihuahua dans la poche avant" />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="boutique">
        <div className="container">
          <h2 className="section-title">La collection CuddleCarry</h2>
          <p className="section-lead">Choisissez votre coloris et votre taille, le paiement se fait en toute sécurité sur Shopify.</p>
          <ShopGrid />
        </div>
      </section>

      <Reviews />
    </>
  );
}
