// Toute la configuration boutique est ici : domaine Shopify, prix, variantes, visuels.
// Pour brancher le paiement, renseigner NEXT_PUBLIC_SHOPIFY_DOMAIN et les IDs de variantes
// (Admin Shopify > Produits > variante > l'ID est le nombre à la fin de l'URL).

export const SHOPIFY_DOMAIN =
  process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || "woufstyleshop.myshopify.com";

// Code de réduction optionnel ajouté au lien du lot de 2.
// Vide par défaut : la remise « 10 % dès 2 sweats » est une réduction automatique Shopify.
export const BUNDLE_DISCOUNT_CODE = process.env.NEXT_PUBLIC_BUNDLE_DISCOUNT_CODE ?? "";

export const CURRENCY = "EUR";
export const UNIT_PRICE = 47.95;
export const BUNDLE_DISCOUNT_RATE = 0.1;

export const SIZES = ["S", "M", "L", "XL"] as const;
export type Size = (typeof SIZES)[number];

export type Color = {
  id: string;
  label: string;
  swatch: string;
  // null = photo pas encore fournie : un visuel neutre « Photo à venir » s'affiche.
  image: string | null;
};

export const COLORS: Color[] = [
  { id: "beige", label: "Beige", swatch: "#a39a6a", image: "/images/cuddlecarry-beige.jpg" },
  { id: "vert", label: "Vert", swatch: "#6fbf95", image: "/images/cuddlecarry-vert.jpg" },
  { id: "rose", label: "Rose", swatch: "#d9788f", image: "/images/cuddlecarry-rose.jpg" },
  { id: "noir", label: "Noir", swatch: "#1f1f1f", image: "/images/cuddlecarry-noir.jpg" },
  // Photo rouge/vert retirée : à remplacer par le nouveau visuel.
  { id: "noel", label: "Noël", swatch: "#8e1b2c", image: null },
];

// IDs numériques des variantes Shopify, par couleur puis taille.
// Format : VARIANT_IDS.beige.S = "60903596360014"
export const VARIANT_IDS: Record<string, Partial<Record<Size, string>>> = {
  beige: {},
  vert: {},
  rose: {},
  noir: {},
  noel: {},
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

// Visuels lifestyle des sections (les photos rouge/vert ont été retirées).
// null = la section s'affiche en texte seul, sans trou visuel, jusqu'à ce que la photo soit fournie.
export const LIFESTYLE_IMAGES: Record<"quotidien" | "moments" | "proches" | "sorties", string | null> = {
  quotidien: null,
  moments: null,
  proches: null,
  sorties: "/images/cuddlecarry-beige.jpg",
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
