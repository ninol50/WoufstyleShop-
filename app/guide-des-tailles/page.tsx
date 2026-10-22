import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { SIZE_CHART } from "@/lib/config";

export const metadata: Metadata = {
  title: "Guide des tailles",
  description: "Choisissez la bonne taille de sweat CuddleCarry : conseils et mesures.",
};

export default function SizeGuidePage() {
  return (
    <>
      <PageHero title="Guide des tailles" lead="Une coupe ample et décontractée, disponible du S au XL." />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container prose">
          {SIZE_CHART.length > 0 && (
            <div className="table-wrap">
              <table>
                <thead>
                  <tr><th>Taille</th><th>Tour de poitrine (cm)</th><th>Longueur (cm)</th></tr>
                </thead>
                <tbody>
                  {SIZE_CHART.map((row) => (
                    <tr key={row.size}><td>{row.size}</td><td>{row.chest}</td><td>{row.length}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <h2>Comment choisir</h2>
          <ul>
            <li>Prenez votre taille habituelle de sweat pour un tombé décontracté.</li>
            <li>Entre deux tailles, choisissez la plus grande : la poche reste plus confortable avec votre chien dedans.</li>
            <li>Pour un effet très oversize, prenez une taille au-dessus.</li>
          </ul>

          <h2>Comment mesurer</h2>
          <ul>
            <li><strong>Tour de poitrine :</strong> mesurez à plat un sweat qui vous va bien, d’une aisselle à l’autre, puis multipliez par deux.</li>
            <li><strong>Longueur :</strong> du haut de l’épaule jusqu’au bas du sweat.</li>
          </ul>

          <div className="callout">
            <p>Un doute sur la taille ? Envoyez-nous votre taille et votre poids, nous vous conseillons.</p>
            <Link className="btn btn-inline" href="/contact">Demander conseil</Link>
          </div>
        </div>
      </section>
    </>
  );
}
