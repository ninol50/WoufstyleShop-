import { bundlePrices, formatPrice } from "./config";

const { total, full } = bundlePrices();

export type FaqItem = { id?: string; q: string; a: string };
export type FaqGroup = { title: string; items: FaqItem[] };

export const FAQ: FaqGroup[] = [
  {
    title: "Le sweat",
    items: [
      {
        q: "À quoi sert la poche avant du sweat ?",
        a: "Elle permet de garder votre petit chien blotti contre vous, à la maison comme en promenade, tout en lui offrant un espace chaud et douillet.",
      },
      {
        q: "Pour quels chiens la poche est-elle adaptée ?",
        a: "La poche est pensée pour les petits chiens, du type chihuahua, yorkshire, spitz nain ou bichon. Pour un chien plus lourd, gardez une main sous la poche pour le soutenir.",
      },
      {
        q: "Quels coloris sont proposés pour le CuddleCarry ?",
        a: "Une édition Noël à motifs flocons et sapins, puis beige, vert, rose et noir.",
      },
      {
        q: "Le sweat convient-il aux journées fraîches ?",
        a: "Oui, sa polaire douce est pensée pour les matinées et les promenades par temps frais.",
      },
      {
        q: "Puis-je porter le sweat sans mon chien ?",
        a: "Bien sûr : la poche avant se porte à plat et le sweat reste un sweat polaire confortable au quotidien.",
      },
    ],
  },
  {
    title: "Tailles",
    items: [
      {
        id: "faq-tailles",
        q: "Quelles tailles puis-je choisir pour ce sweat ?",
        a: "Le CuddleCarry existe en S, M, L et XL, avec une coupe décontractée. Entre deux tailles, prenez la plus grande pour plus d’aisance, surtout si votre chien est dans la poche.",
      },
      {
        q: "Le sweat est-il mixte ?",
        a: "Oui, la coupe ample convient aux femmes comme aux hommes. Consultez le guide des tailles pour choisir.",
      },
      {
        q: "Et si la taille ne convient pas ?",
        a: "Vous disposez de 14 jours après réception pour nous retourner l’article. Contactez-nous et nous vous indiquerons la marche à suivre.",
      },
    ],
  },
  {
    title: "Commande et paiement",
    items: [
      {
        q: "Quelle remise s’applique si j’achète deux sweats ?",
        a: `10 % de remise dès 2 sweats, appliquée automatiquement au paiement : ${formatPrice(total)} les deux au lieu de ${formatPrice(full)}. Aucun code n’est nécessaire.`,
      },
      {
        q: "Le paiement est-il sécurisé ?",
        a: "Oui. Le paiement est entièrement géré par Shopify, avec une connexion chiffrée. Nous n’avons jamais accès à vos données bancaires.",
      },
      {
        q: "Quels moyens de paiement acceptez-vous ?",
        a: "Les moyens de paiement disponibles s’affichent à l’étape du paiement : cartes bancaires et, selon votre appareil, des portefeuilles comme Apple Pay ou Google Pay.",
      },
      {
        q: "Puis-je modifier ou annuler ma commande ?",
        a: "Contactez-nous au plus vite après votre commande : tant qu’elle n’est pas expédiée, nous pouvons la modifier ou l’annuler.",
      },
    ],
  },
  {
    title: "Livraison et retours",
    items: [
      {
        q: "Quels sont les délais de livraison ?",
        a: "Comptez 5 à 7 jours ouvrés. Un lien de suivi vous est envoyé par e-mail dès l’expédition de votre commande.",
      },
      {
        q: "Comment suivre ma commande ?",
        a: "Utilisez le lien de suivi reçu par e-mail, ou connectez-vous à votre compte client pour retrouver vos commandes.",
      },
      {
        q: "Comment retourner un article ?",
        a: "Vous avez 14 jours après réception pour exercer votre droit de rétractation. Contactez-nous avec votre numéro de commande et nous vous envoyons les instructions de retour.",
      },
    ],
  },
  {
    title: "Entretien et sécurité",
    items: [
      {
        q: "Comment entretenir le sweat ?",
        a: "Suivez les indications de l’étiquette. Nous recommandons un lavage délicat à 30 °C, sur l’envers, et un séchage à l’air libre pour garder la polaire douce.",
      },
      {
        q: "Puis-je laisser mon chien dans la poche longtemps ?",
        a: "La poche est faite pour des moments de câlin et des balades. Gardez toujours un œil sur votre chien, soutenez-le avec la main en marchant et laissez-le sortir dès qu’il le souhaite.",
      },
    ],
  },
];

export const PRODUCT_FAQ: FaqItem[] = [
  FAQ[0].items[0],
  FAQ[0].items[1],
  FAQ[1].items[0],
  FAQ[2].items[0],
  FAQ[3].items[0],
  FAQ[3].items[2],
  FAQ[4].items[0],
];
