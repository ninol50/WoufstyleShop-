import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { shopUrl } from "@/lib/config";
import { BoxIcon, ReturnIcon, TruckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Livraison et retours",
  description: "Délais de livraison, suivi de commande et retours sous 14 jours pour le sweat CuddleCarry.",
};

export default function ShippingPage() {
  return (
    <>
      <PageHero title="Livraison et retours" lead="Des délais clairs, un suivi à chaque étape et 14 jours pour changer d’avis." />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container prose">
          <div className="trust" style={{ marginBottom: 40 }}>
            <div><TruckIcon /><h3>5–7 jours ouvrés</h3><p>Délai de livraison indicatif.</p></div>
            <div><BoxIcon /><h3>Suivi inclus</h3><p>Lien de suivi envoyé par e-mail.</p></div>
            <div><ReturnIcon /><h3>14 jours</h3><p>Pour retourner votre article.</p></div>
          </div>

          <h2>Livraison</h2>
          <p>
            Votre commande est préparée puis expédiée avec un numéro de suivi. Comptez 5 à 7 jours ouvrés pour la
            recevoir. Dès l’expédition, vous recevez un e-mail avec le lien pour suivre votre colis.
          </p>
          <p>
            Les frais et options de livraison disponibles pour votre adresse s’affichent à l’étape du paiement, avant
            toute validation.
          </p>

          <h2>Retours et rétractation</h2>
          <p>
            Vous disposez de 14 jours à compter de la réception de votre commande pour exercer votre droit de
            rétractation, sans avoir à vous justifier.
          </p>
          <ol>
            <li><Link href="/contact">Contactez-nous</Link> en indiquant votre numéro de commande.</li>
            <li>Nous vous envoyons l’adresse et les instructions de retour.</li>
            <li>Renvoyez l’article non porté, dans son état d’origine.</li>
            <li>Le remboursement est effectué sur votre moyen de paiement initial, au plus tard 14 jours après la réception du retour.</li>
          </ol>
          <p>
            Les conditions détaillées (frais de retour, articles exclus) sont précisées dans notre{" "}
            <a href={shopUrl("/policies/refund-policy")}>politique de remboursement</a>.
          </p>

          <h2>Article abîmé ou erreur de commande</h2>
          <p>
            Si votre article arrive endommagé ou ne correspond pas à votre commande, écrivez-nous avec une photo : nous
            vous proposons un échange ou un remboursement.
          </p>
        </div>
      </section>
    </>
  );
}
