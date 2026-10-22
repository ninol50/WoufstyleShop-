# Woufstyle — boutique Next.js (Vercel) + paiement Shopify

- `/` : boutique (tous les coloris, achat direct)
- `/produits/cuddlecarry-hoodie` : page produit (1 sweat ou lot de 2)

Le paiement passe par les liens de panier Shopify (`https://<boutique>.myshopify.com/cart/<variante>:<qté>`),
qui ouvrent directement le checkout Shopify. La remise « 10 % dès 2 sweats » est une réduction automatique Shopify.

## Configuration

Tout est dans `lib/config.ts` :
- `SHOPIFY_DOMAIN` (ou variable `NEXT_PUBLIC_SHOPIFY_DOMAIN`)
- `VARIANT_IDS` : IDs des variantes Shopify par coloris et taille
- `COLORS[].image` / `LIFESTYLE_IMAGES` : visuels (`null` = photo à venir)

Pour remplacer une photo : l’ajouter au produit dans Shopify (ou dans `public/images/`) et mettre son URL dans `lib/config.ts`.

## Dev

```bash
npm install
npm run dev
```
