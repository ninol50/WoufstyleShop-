import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ textAlign: "center", paddingBottom: 80 }}>
      <div className="container">
        <h1>Page introuvable</h1>
        <p className="section-lead">Cette page n’existe pas ou a été déplacée.</p>
        <Link className="btn btn-inline" href="/">Retour à la boutique</Link>
      </div>
    </section>
  );
}
