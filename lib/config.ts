// Toute la configuration boutique est ici : domaine Shopify, prix, variantes, visuels.
// Pour brancher le paiement, renseigner NEXT_PUBLIC_SHOPIFY_DOMAIN et les IDs de variantes
// (Admin Shopify > Produits > variante > l'ID est le nombre à la fin de l'URL).

export const SHOPIFY_DOMAIN =
  process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || "woufstyleshop.myshopify.com";

// Code de réduction optionnel ajouté au lien du lot de 2.
// Vide par défaut : la remise « 10 % dès 2 sweats » est une réduction automatique Shopify.
export const BUNDLE_DISCOUNT_CODE = process.env.NEXT_PUBLIC_BUNDLE_DISCOUNT_CODE ?? "";

export const CURRENCY = "EUR";
export const UNIT_PRICE = 47.95;
export const BUNDLE_DISCOUNT_RATE = 0.1;

export const SIZES = ["S", "M", "L", "XL"] as const;
export type Size = (typeof SIZES)[number];

// Photos servies par le site (public/images).
// Le CDN Shopify n'est pas utilisé : il ne sert pas les fichiers tant que la boutique est protégée.
const IMG = "/images/";

export type Color = {
  id: string;
  label: string;
  swatch: string;
  // null = photo pas encore fournie : un visuel neutre « Photo à venir » s'affiche.
  image: string | null;
};

// L'ordre compte : le premier coloris est la photo principale partout (galerie, boutique, accueil).
export const COLORS: Color[] = [
  { id: "noel", label: "Noël", swatch: "linear-gradient(135deg, #b3122a 50%, #f3e7dc 50%)", image: `${IMG}cuddlecarry-noel.webp` },
  { id: "beige", label: "Beige", swatch: "#a39a6a", image: `${IMG}cuddlecarry-beige.webp` },
  { id: "vert", label: "Vert", swatch: "#6fbf95", image: `${IMG}cuddlecarry-vert.webp` },
  { id: "rose", label: "Rose", swatch: "#d9788f", image: `${IMG}cuddlecarry-rose.webp` },
  { id: "noir", label: "Noir", swatch: "#1f1f1f", image: `${IMG}cuddlecarry-noir.webp` },
];

// IDs numériques des variantes Shopify, par couleur puis taille.
// Format : VARIANT_IDS.beige.S = "60903596360014"
export const VARIANT_IDS: Record<string, Partial<Record<Size, string>>> = {
  beige: { S: "57560333975876", M: "57560334008644", L: "57560334041412", XL: "57560334074180" },
  vert: { S: "57560334106948", M: "57560334139716", L: "57560334172484", XL: "57560334205252" },
  rose: { S: "57560334238020", M: "57560334270788", L: "57560334303556", XL: "57560334336324" },
  noir: { S: "57560334369092", M: "57560334401860", L: "57560334434628", XL: "57560334467396" },
  noel: { S: "57560334500164", M: "57560334532932", L: "57560334565700", XL: "57560334598468" },
};

export const PRODUCT = {
  handle: "cuddlecarry-hoodie",
  title: "Sweat Woufstyle™ CuddleCarry Hoodie",
  shortTitle: "CuddleCarry Hoodie",
  description:
    "Un sweat en polaire douce, à coupe décontractée et avec une poche avant douillette pour garder votre petit chien près de vous.",
  bullets: [
    "Gardez votre petit chien près de vous.",
    "Emmenez-le lors de vos promenades.",
    "Une polaire douce pour les journées fraîches.",
  ],
  rating: 4.8,
  reviewCount: 2684,
  recentBuyers: { name: "Inès", count: 384, initials: ["C", "N", "L"] },
};

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: CURRENCY }).format(value);

export const bundlePrices = () => {
  const full = Math.round(UNIT_PRICE * 2 * 100) / 100;
  const saving = Math.round(full * BUNDLE_DISCOUNT_RATE * 100) / 100;
  return { full, saving, total: Math.round((full - saving) * 100) / 100 };
};

export const variantId = (color: string, size: Size) => VARIANT_IDS[color]?.[size];

// Lien de paiement Shopify (cart permalink) : crée le panier et ouvre directement le checkout.
export const checkoutUrl = (items: { color: string; size: Size }[], bundle = false) => {
  const counts = new Map<string, number>();
  for (const item of items) {
    const id = variantId(item.color, item.size);
    if (!id) return null;
    counts.set(id, (counts.get(id) || 0) + 1);
  }
  const lines = [...counts].map(([id, qty]) => `${id}:${qty}`).join(",");
  const url = new URL(`https://${SHOPIFY_DOMAIN}/cart/${lines}`);
  if (bundle && BUNDLE_DISCOUNT_CODE) url.searchParams.set("discount", BUNDLE_DISCOUNT_CODE);
  return url.toString();
};

export const shopUrl = (path: string) => `https://${SHOPIFY_DOMAIN}${path}`;

// Visuels des sections de contenu.
// null = la section s'affiche en texte seul, sans trou visuel.
export const LIFESTYLE_IMAGES: Record<"quotidien" | "moments" | "proches" | "sorties", string | null> = {
  quotidien: `${IMG}cuddlecarry-noel.webp`,
  moments: `${IMG}cuddlecarry-vert.webp`,
  proches: `${IMG}cuddlecarry-rose.webp`,
  sorties: `${IMG}cuddlecarry-beige.webp`,
};

export const REVIEWS = [
  {
    author: "Mehdi D.",
    date: "il y a 1 mois",
    text: "J’aime pouvoir emmener mon petit compagnon avec moi et le garder blotti dans la poche avant du sweat.",
  },
];

export const STATS = [
  { value: "94 %", label: "ont apprécié garder leur chien près d’eux" },
  { value: "91 %", label: "ont aimé emmener leur compagnon en promenade" },
  { value: "89 %", label: "ont trouvé la polaire douce et agréable" },
];

// Tableau des mesures (cm) du fournisseur. Vide = la page guide affiche les conseils sans tableau.
// Exemple : { size: "S", chest: "112", length: "70" }
export const SIZE_CHART: { size: Size; chest: string; length: string }[] = [];
