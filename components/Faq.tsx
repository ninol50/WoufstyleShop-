import Link from "next/link";
import { PRODUCT_FAQ, type FaqItem } from "@/lib/faq";

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <>
      {items.map((item) => (
        <details className="accordion" key={item.q} id={item.id}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </>
  );
}

export default function Faq({ items = PRODUCT_FAQ }: { items?: FaqItem[] }) {
  return (
    <section className="section" id="faq">
      <div className="container faq">
        <h2 className="section-title">Vos questions sur le sweat</h2>
        <p className="section-lead">
          Retrouvez les détails utiles sur la poche, les tailles, la livraison et la remise sur deux sweats.
        </p>
        <FaqList items={items} />
        <p style={{ marginTop: 20 }}>
          <Link href="/faq" className="text-link">Voir toutes les questions →</Link>
        </p>
      </div>
    </section>
  );
}
