import Link from "next/link";
import { shopUrl } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div>
          <h2>WOUFSTYLE</h2>
          <p>Des sweats pensés pour garder votre petit chien tout près.</p>
        </div>
        <div>
          <h2>Liens utiles</h2>
          <ul>
            <li><Link href="/">Boutique</Link></li>
            <li><Link href="/produits/cuddlecarry-hoodie#faq">Questions fréquentes</Link></li>
            <li><a href={shopUrl("/account")}>Mon compte</a></li>
          </ul>
        </div>
        <div>
          <h2>Informations</h2>
          <ul>
            <li><a href={shopUrl("/policies/shipping-policy")}>Livraison</a></li>
            <li><a href={shopUrl("/policies/refund-policy")}>Retours et remboursements</a></li>
            <li><a href={shopUrl("/policies/terms-of-service")}>Conditions générales de vente</a></li>
            <li><a href={shopUrl("/policies/privacy-policy")}>Confidentialité</a></li>
            <li><a href={shopUrl("/policies/legal-notice")}>Mentions légales</a></li>
          </ul>
        </div>
        <div>
          <h2>Une question ?</h2>
          <p>
            Une question sur votre sweat ou votre commande ?{" "}
            <a href={shopUrl("/pages/contact")} style={{ textDecoration: "underline" }}>Contactez notre équipe.</a>
          </p>
          <h2 style={{ marginTop: 24 }}>Des nouvelles de WOUFSTYLE</h2>
          <form className="newsletter" action={shopUrl("/contact#newsletter")} method="post">
            <input type="hidden" name="form_type" value="customer" />
            <input type="hidden" name="contact[tags]" value="newsletter" />
            <label htmlFor="nl-email" className="visually-hidden">E-mail</label>
            <input id="nl-email" type="email" name="contact[email]" placeholder="E-mail" required />
            <button type="submit">S’inscrire</button>
          </form>
        </div>
      </div>
      <div className="container footer-bottom">© {new Date().getFullYear()} Woufstyle · Paiement sécurisé par Shopify</div>
    </footer>
  );
}
