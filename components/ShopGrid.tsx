"use client";

import Link from "next/link";
import { useState } from "react";
import { COLORS, SIZES, UNIT_PRICE, checkoutUrl, formatPrice, type Size } from "@/lib/config";
import ProductImage from "./ProductImage";

const PRODUCT_PATH = "/produits/cuddlecarry-hoodie";

export default function ShopGrid() {
  const [sizes, setSizes] = useState<Record<string, Size>>({});

  return (
    <div className="grid">
      {COLORS.map((color) => {
        const size = sizes[color.id] ?? "M";
        const url = checkoutUrl([{ color: color.id, size }]);
        return (
          <article className="card" key={color.id}>
            <Link className="card-media" href={PRODUCT_PATH} aria-label={`Voir le CuddleCarry ${color.label}`}>
              <ProductImage color={color} />
            </Link>
            <div className="card-body">
              <h3><Link className="card-title" href={PRODUCT_PATH}>CuddleCarry · {color.label}</Link></h3>
              <span className="card-price">{formatPrice(UNIT_PRICE)}</span>
              <div className="card-buy">
                <select
                  aria-label={`Taille ${color.label}`}
                  value={size}
                  onChange={(e) => setSizes((s) => ({ ...s, [color.id]: e.target.value as Size }))}
                >
                  {SIZES.map((s) => <option key={s} value={s}>Taille {s}</option>)}
                </select>
                <a className="btn" href={url ?? undefined} aria-disabled={!url}>
                  {url ? "Acheter" : "Bientôt"}
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
