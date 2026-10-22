import Link from "next/link";
import { LIFESTYLE_IMAGES, STATS } from "@/lib/config";
import { BoxIcon, HeartIcon, HomeIcon, LeafIcon, PawIcon, ReturnIcon, ShieldIcon, TruckIcon } from "./icons";
import Reviews from "./Reviews";

function Split({
  image,
  alt,
  reverse,
  children,
}: {
  image: string | null;
  alt: string;
  reverse?: boolean;
  children: React.ReactNode;
}) {
  if (!image) return <div style={{ maxWidth: 720, margin: "0 auto" }}>{children}</div>;
  return (
    <div className={`split${reverse ? " reverse" : ""}`}>
      <div className="split-media"><img src={image} alt={alt} loading="lazy" /></div>
      <div>{children}</div>
    </div>
  );
}

const TRUST = [
  { Icon: TruckIcon, title: "Livraison en 5–7 jours ouvrés", text: "Recevez votre commande sous 5–7 jours ouvrés." },
  { Icon: ShieldIcon, title: "Paiement 100 % sécurisé", text: "Paiement traité par Shopify : vos données sont chiffrées et protégées." },
  { Icon: BoxIcon, title: "Suivi de commande", text: "Recevez un lien de suivi dès l’expédition de votre commande." },
  { Icon: ReturnIcon, title: "Retours sous 14 jours", text: "Retournez votre commande sous 14 jours et obtenez un remboursement." },
];

export default function ProductSections() {
  return (
    <>
      <section className="section dark">
        <div className="container">
          <Split image={LIFESTYLE_IMAGES.quotidien} alt="Promenade avec un petit chien dans la poche du sweat">
            <h2 className="section-title">À vos côtés au quotidien</h2>
            <p className="section-lead">
              Glissez votre petit chien dans la poche avant douillette pour partager vos matinées tranquilles et vos
              promenades, bien près de vous.
            </p>
            <ul className="icon-list">
              <li><HeartIcon /> Gardez votre compagnon tout près.</li>
              <li><HomeIcon /> Partagez vos matinées tranquilles.</li>
              <li><PawIcon /> Emmenez votre petit chien en promenade.</li>
              <li><LeafIcon /> Profitez d’une coupe décontractée par temps frais.</li>
            </ul>
          </Split>
        </div>
      </section>

      <Reviews />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Split image={LIFESTYLE_IMAGES.moments} alt="Moment câlin avec un chien dans la poche du sweat" reverse>
            <h2 className="section-title">Des moments tout près</h2>
            <p className="section-lead">
              La poche avant douillette rapproche votre petit chien de vous, pour partager les instants tranquilles
              comme les promenades.
            </p>
            <ul className="icon-list">
              <li><HeartIcon /> Gardez votre petit chien tout près pendant vos moments ensemble.</li>
              <li><HomeIcon /> Partagez vos matinées tranquilles avec votre compagnon à portée de câlin.</li>
              <li><PawIcon /> Emmenez votre chien avec vous lors de vos promenades.</li>
              <li><LeafIcon /> Profitez d’une polaire douce quand les journées sont fraîches.</li>
            </ul>
          </Split>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container trust">
          {TRUST.map(({ Icon, title, text }) => (
            <div key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Split image={LIFESTYLE_IMAGES.proches} alt="Sweat CuddleCarry porté à la maison">
            <h2 className="section-title">Un sweat pour rester proches</h2>
            <p className="section-lead">
              Pensé pour garder votre petit chien près de vous, ce sweat associe une poche avant douillette à une
              polaire douce et une coupe décontractée.
            </p>
            <details className="accordion">
              <summary>Poche avant</summary>
              <p>Une poche avant douillette pour garder votre compagnon contre vous.</p>
            </details>
            <details className="accordion">
              <summary>Matière et coupe</summary>
              <p>Polaire douce, coupe décontractée et capuche ample pour les journées fraîches.</p>
            </details>
            <details className="accordion">
              <summary>Tailles et variantes</summary>
              <p>Disponible en S, M, L et XL, en beige, vert, rose, noir et édition Noël.</p>
            </details>
          </Split>
          <div className="stats" style={{ marginTop: 40 }}>
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <p className="stats-note">Résultats déclarés par nos clients.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="section-title center" style={{ marginBottom: 28 }}>Restez proches, partout</h2>
          <Split image={LIFESTYLE_IMAGES.sorties} alt="Sweat CuddleCarry beige avec un chihuahua dans la poche">
            <h3 className="section-title">Des sorties ensemble</h3>
            <p className="section-lead">
              Emmenez votre petit chien lors de vos promenades et gardez-le bien au chaud contre vous.
            </p>
            <Link className="btn" href="/produits/cuddlecarry-hoodie">Choisir le CuddleCarry</Link>
          </Split>
        </div>
      </section>
    </>
  );
}
