import { formatPrice, bundlePrices } from "@/lib/config";

const { total, full } = bundlePrices();

const QUESTIONS = [
  {
    q: "À quoi sert la poche avant du sweat ?",
    a: "Elle permet de garder votre petit chien blotti contre vous, à la maison comme en promenade, tout en lui offrant un espace chaud et douillet.",
  },
  {
    id: "faq-tailles",
    q: "Quelles tailles puis-je choisir pour ce sweat ?",
    a: "Le CuddleCarry existe en S, M, L et XL, avec une coupe décontractée. Entre deux tailles, prenez la plus grande pour plus d’aisance.",
  },
  {
    q: "Quels coloris sont proposés pour le CuddleCarry ?",
    a: "Beige, vert, rose, noir et une édition Noël.",
  },
  {
    q: "Le sweat convient-il aux journées fraîches ?",
    a: "Oui, sa polaire douce est pensée pour les matinées et les promenades par temps frais.",
  },
  {
    q: "Quelle remise s’applique si j’achète deux sweats ?",
    a: `10 % de remise dès 2 sweats, appliquée automatiquement au paiement : ${formatPrice(total)} les deux au lieu de ${formatPrice(full)}.`,
  },
];

export default function Faq() {
  return (
    <section className="section" id="faq">
      <div className="container faq">
        <h2 className="section-title">Vos questions sur le sweat</h2>
        <p className="section-lead">
          Retrouvez les détails utiles sur la poche, les tailles et la remise proposée sur deux sweats.
        </p>
        {QUESTIONS.map((item) => (
          <details className="accordion" key={item.q} id={item.id}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
