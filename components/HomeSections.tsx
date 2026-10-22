import Link from "next/link";
import { COLORS, bundlePrices, formatPrice } from "@/lib/config";
import { HeartIcon, LeafIcon, PawIcon, ShieldIcon, TruckIcon, ReturnIcon, BoxIcon } from "./icons";

const STEPS = [
  { n: "1", title: "Choisissez votre coloris", text: "Beige, vert, rose, noir ou édition Noël, du S au XL." },
  { n: "2", title: "Glissez votre chien dans la poche", text: "La poche avant douillette le garde blotti contre vous." },
  { n: "3", title: "Sortez ensemble", text: "Balades, café en terrasse ou soirée canapé : il reste près de vous." },
];

const BENEFITS = [
  { Icon: HeartIcon, title: "Toujours tout près", text: "Votre chien reste contre vous, rassuré et au chaud." },
  { Icon: LeafIcon, title: "Polaire douce", text: "Une matière moelleuse pour les journées fraîches." },
  { Icon: PawIcon, title: "Pensé pour les petits chiens", text: "Chihuahua, yorkshire, spitz nain, bichon…" },
];

const DOGS = ["Chihuahua", "Yorkshire", "Spitz nain", "Bichon", "Caniche toy"];

export function HowItWorks() {
  return (
    <section className="section" style={{ background: "var(--surface)" }}>
      <div className="container">
        <h2 className="section-title center">Comment ça marche</h2>
        <div className="steps">
          {STEPS.map((s) => (
            <div className="step" key={s.n}>
              <span className="step-n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Benefits() {
  return (
    <section className="section dark">
      <div className="container">
        <h2 className="section-title center">Pourquoi le CuddleCarry</h2>
        <div className="steps">
          {BENEFITS.map(({ Icon, title, text }) => (
            <div className="step" key={title}>
              <span className="step-icon"><Icon size={26} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <div className="dogs">
          <p>Idéal pour les petits chiens :</p>
          <ul>{DOGS.map((d) => <li key={d}>{d}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

export function BundleBanner() {
  const { total, full, saving } = bundlePrices();
  const [a, b] = COLORS;
  return (
    <section className="section">
      <div className="container bundle-banner">
        <div className="bundle-visual">
          {a.image && <img src={a.image} alt={`CuddleCarry ${a.label}`} loading="lazy" />}
          {b.image && <img src={b.image} alt={`CuddleCarry ${b.label}`} loading="lazy" />}
        </div>
        <div>
          <span className="eyebrow">Offre duo</span>
          <h2 className="section-title">Un pour vous, un à offrir</h2>
          <p className="section-lead">
            2 sweats pour {formatPrice(total)} au lieu de <s>{formatPrice(full)}</s>, soit {formatPrice(saving)} d’économie.
            La remise de 10 % s’applique automatiquement au paiement.
          </p>
          <Link className="btn btn-inline" href="/produits/cuddlecarry-hoodie">Composer mon duo</Link>
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  const items = [
    { Icon: TruckIcon, label: "Livraison 5–7 jours ouvrés" },
    { Icon: BoxIcon, label: "Suivi de commande" },
    { Icon: ReturnIcon, label: "Retours sous 14 jours" },
    { Icon: ShieldIcon, label: "Paiement sécurisé Shopify" },
  ];
  return (
    <section className="trustbar">
      <div className="container trustbar-inner">
        {items.map(({ Icon, label }) => (
          <span key={label}><Icon size={22} /> {label}</span>
        ))}
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="section center">
      <div className="container" style={{ maxWidth: 640 }}>
        <h2 className="section-title">Prêt à garder votre chien tout près ?</h2>
        <p className="section-lead">Choisissez votre coloris et votre taille, nous nous occupons du reste.</p>
        <Link className="btn btn-inline" href="/produits/cuddlecarry-hoodie">Choisir mon CuddleCarry</Link>
      </div>
    </section>
  );
}
