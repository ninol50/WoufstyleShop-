import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { FaqList } from "@/components/Faq";
import { FAQ } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Questions fréquentes",
  description: "Tailles, livraison, retours, paiement et entretien du sweat CuddleCarry : toutes les réponses.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.flatMap((g) => g.items).map((i) => ({
    "@type": "Question",
    name: i.q,
    acceptedAnswer: { "@type": "Answer", text: i.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <PageHero title="Questions fréquentes" lead="Tout ce qu’il faut savoir avant et après votre commande." />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container faq">
          <nav className="chips" aria-label="Catégories">
            {FAQ.map((g, i) => <a key={g.title} href={`#cat-${i}`}>{g.title}</a>)}
          </nav>
          {FAQ.map((g, i) => (
            <div key={g.title} id={`cat-${i}`} className="faq-group">
              <h2>{g.title}</h2>
              <FaqList items={g.items} />
            </div>
          ))}
          <div className="callout">
            <p>Vous ne trouvez pas votre réponse ?</p>
            <Link className="btn btn-inline" href="/contact">Nous contacter</Link>
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
