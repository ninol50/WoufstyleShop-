export default function PageHero({ title, lead }: { title: string; lead?: string }) {
  return (
    <section className="page-hero">
      <div className="container">
        <h1>{title}</h1>
        {lead && <p className="section-lead">{lead}</p>}
      </div>
    </section>
  );
}
