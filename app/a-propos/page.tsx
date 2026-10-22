import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { COLORS } from "@/lib/config";

export const metadata: Metadata = {
  title: "À propos",
  description: "Woufstyle crée des sweats pensés pour garder votre petit chien tout près de vous.",
};

export default function AboutPage() {
  const main = COLORS[0];
  return (
    <>
      <PageHero title="À propos de Woufstyle" lead="Des sweats pensés pour celles et ceux qui ne sortent jamais sans leur petit compagnon." />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <div className="split-media">{main.image && <img src={main.image} alt={`Sweat CuddleCarry ${main.label}`} />}</div>
          <div className="prose">
            <h2>Notre idée</h2>
            <p>
              Les petits chiens adorent être portés, et leurs maîtres adorent les garder contre eux. Le CuddleCarry
              réunit les deux : un sweat polaire doux, une coupe décontractée et une poche avant douillette où votre
              compagnon se blottit.
            </p>
            <h2>Ce qui compte pour nous</h2>
            <ul>
              <li><strong>Le confort</strong> : une polaire douce pour vous comme pour votre chien.</li>
              <li><strong>La simplicité</strong> : un prix clair, une remise automatique dès 2 sweats.</li>
              <li><strong>La transparence</strong> : délais réalistes, suivi de commande et retours sous 14 jours.</li>
            </ul>
            <Link className="btn btn-inline" href="/produits/cuddlecarry-hoodie">Découvrir le CuddleCarry</Link>
          </div>
        </div>
      </section>
    </>
  );
}
