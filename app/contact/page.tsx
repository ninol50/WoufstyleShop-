import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { shopUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Une question sur votre sweat ou votre commande ? Écrivez à l’équipe Woufstyle.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact" lead="Une question sur votre sweat ou votre commande ? Écrivez-nous, nous vous répondons au plus vite." />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container contact-grid">
          <form className="form" action={shopUrl("/contact#contact_form")} method="post">
            <input type="hidden" name="form_type" value="contact" />
            <input type="hidden" name="utf8" value="✓" />
            <label>
              Nom
              <input name="contact[name]" autoComplete="name" required />
            </label>
            <label>
              E-mail
              <input type="email" name="contact[email]" autoComplete="email" required />
            </label>
            <label>
              Numéro de commande (facultatif)
              <input name="contact[order]" />
            </label>
            <label>
              Message
              <textarea name="contact[body]" rows={6} required />
            </label>
            <button className="btn" type="submit">Envoyer</button>
          </form>
          <aside className="prose">
            <h2>Avant d’écrire</h2>
            <p>Beaucoup de réponses se trouvent déjà ici :</p>
            <ul>
              <li><Link href="/faq">Questions fréquentes</Link></li>
              <li><Link href="/livraison-retours">Livraison et retours</Link></li>
              <li><Link href="/guide-des-tailles">Guide des tailles</Link></li>
              <li><a href={shopUrl("/account")}>Suivre ma commande</a></li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
