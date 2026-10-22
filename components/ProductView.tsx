"use client";

import { useEffect, useRef, useState } from "react";
import {
  COLORS,
  PRODUCT,
  SIZES,
  UNIT_PRICE,
  bundlePrices,
  checkoutUrl,
  formatPrice,
  type Size,
} from "@/lib/config";
import ProductImage from "./ProductImage";
import { ArrowLeft, ArrowRight } from "./icons";

type Item = { color: string; size: Size };

const colorById = (id: string) => COLORS.find((c) => c.id === id) ?? COLORS[0];
const PAY = ["VISA", "Mastercard", "AMEX", "PayPal", "Apple Pay", "Google Pay"];

export default function ProductView() {
  const [colorIndex, setColorIndex] = useState(0);
  const [size, setSize] = useState<Size>("M");
  const [offer, setOffer] = useState<"single" | "bundle">("bundle");
  const [bundle, setBundle] = useState<Item[]>([
    { color: COLORS[0].id, size: "M" },
    { color: COLORS[1].id, size: "M" },
  ]);
  const [stickyVisible, setStickyVisible] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const color = COLORS[colorIndex];
  const prices = bundlePrices();

  const items: Item[] = offer === "single" ? [{ color: color.id, size }] : bundle;
  const url = checkoutUrl(items, offer === "bundle");

  useEffect(() => {
    const el = ctaRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setStickyVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const thumb = thumbsRef.current?.children[colorIndex] as HTMLElement | undefined;
    thumb?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
  }, [colorIndex]);

  const go = (delta: number) => setColorIndex((i) => (i + delta + COLORS.length) % COLORS.length);

  const updateBundle = (index: number, patch: Partial<Item>) =>
    setBundle((prev) => prev.map((item, i) => (i === index ? { ...item, ...patch } : item)));

  const selectColor = (index: number) => {
    setColorIndex(index);
    if (offer === "bundle") updateBundle(0, { color: COLORS[index].id });
  };

  const ctaLabel = url ? "Commander maintenant" : "Bientôt disponible";
  const stickyImage = colorById(items[0].color);

  return (
    <>
      <section className="container product">
        <div className="gallery">
          <div className="gallery-main">
            <ProductImage color={color} eager />
            <button className="gallery-arrow prev" aria-label="Photo précédente" onClick={() => go(-1)}>
              <ArrowLeft />
            </button>
            <button className="gallery-arrow next" aria-label="Photo suivante" onClick={() => go(1)}>
              <ArrowRight />
            </button>
          </div>
          <div className="thumbs" ref={thumbsRef}>
            {COLORS.map((c, i) => (
              <button
                key={c.id}
                className="thumb"
                aria-label={`Voir le coloris ${c.label}`}
                aria-current={i === colorIndex}
                onClick={() => selectColor(i)}
              >
                <ProductImage color={c} />
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="rating">
            <span className="stars" aria-hidden>★★★★★</span>
            <span>
              {PRODUCT.rating.toLocaleString("fr-FR")} sur 5 · {PRODUCT.reviewCount.toLocaleString("fr-FR")} avis
            </span>
          </div>
          <h1 className="product-title">{PRODUCT.title}</h1>
          <p className="product-desc">{PRODUCT.description}</p>
          <ul className="bullets">
            {PRODUCT.bullets.map((b) => (
              <li key={b}><span className="check" aria-hidden>✓</span>{b}</li>
            ))}
          </ul>

          <fieldset className="offers" style={{ border: 0, padding: 0, margin: "0 0 18px" }}>
            <legend className="visually-hidden">Choisissez votre offre</legend>

            <label className={`offer${offer === "single" ? " selected" : ""}`}>
              <input type="radio" name="offer" checked={offer === "single"} onChange={() => setOffer("single")} />
              <div className="offer-row">
                <span>1 sweat</span>
                <span>{formatPrice(UNIT_PRICE)}</span>
              </div>
              {offer === "single" && (
                <div style={{ marginTop: 14 }}>
                  <p className="field-label">Coloris <span>{color.label}</span></p>
                  <div className="swatches">
                    {COLORS.map((c, i) => (
                      <button
                        key={c.id}
                        type="button"
                        className="swatch"
                        style={{ background: c.swatch }}
                        aria-label={c.label}
                        aria-pressed={i === colorIndex}
                        onClick={() => selectColor(i)}
                      />
                    ))}
                  </div>
                  <p className="field-label">Taille <a href="#faq-tailles">Guide des tailles</a></p>
                  <div className="sizes">
                    {SIZES.map((s) => (
                      <button key={s} type="button" className="size" aria-pressed={s === size} onClick={() => setSize(s)}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </label>

            <label className={`offer${offer === "bundle" ? " selected" : ""}`}>
              <input type="radio" name="offer" checked={offer === "bundle"} onChange={() => setOffer("bundle")} />
              <span className="badge">Le plus populaire</span>
              <div className="offer-row">
                <span>Lot de 2 sweats</span>
                <span>{formatPrice(prices.total)}</span>
              </div>
              <div className="offer-sub">
                <span>Vous économisez {formatPrice(prices.saving)}</span>
                <s>{formatPrice(prices.full)}</s>
              </div>
              {offer === "bundle" && (
                <div className="bundle-items">
                  {bundle.map((item, i) => (
                    <div className="bundle-item" key={i}>
                      <span>Article {i + 1}</span>
                      <select
                        aria-label={`Coloris article ${i + 1}`}
                        value={item.color}
                        onChange={(e) => updateBundle(i, { color: e.target.value })}
                      >
                        {COLORS.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
                      </select>
                      <select
                        aria-label={`Taille article ${i + 1}`}
                        value={item.size}
                        onChange={(e) => updateBundle(i, { size: e.target.value as Size })}
                      >
                        {SIZES.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  ))}
                </div>
              )}
            </label>
          </fieldset>

          <div ref={ctaRef}>
            <a className="btn" href={url ?? undefined} aria-disabled={!url}>
              {ctaLabel}
            </a>
          </div>

          <div className="buy-meta">
            <span>🚚 Livraison en 5–7 jours ouvrés · Paiement sécurisé Shopify</span>
            <div className="pay-icons" aria-label="Moyens de paiement acceptés">
              {PAY.map((p) => <span key={p}>{p}</span>)}
            </div>
          </div>

          <div className="social">
            <div className="avatars" aria-hidden>
              {PRODUCT.recentBuyers.initials.map((l) => <span key={l}>{l}</span>)}
            </div>
            <span>
              {PRODUCT.recentBuyers.name} et {PRODUCT.recentBuyers.count} autres personnes ont acheté
            </span>
          </div>

          <details className="accordion">
            <summary>Poche avant</summary>
            <p>Une poche avant douillette pour garder votre petit chien blotti contre vous, et deux poches latérales pour vos mains.</p>
          </details>
          <details className="accordion">
            <summary>Moments à partager</summary>
            <p>Balades, matinées sur le canapé, soirées fraîches : votre compagnon reste blotti contre vous.</p>
          </details>
          <details className="accordion">
            <summary>Livraison et retours</summary>
            <p>Livraison en 5–7 jours ouvrés, avec un lien de suivi envoyé dès l’expédition. Retours acceptés sous 14 jours.</p>
          </details>
        </div>
      </section>

      <div className={`sticky-bar${stickyVisible ? " visible" : ""}`} aria-hidden={!stickyVisible}>
        <div className="container sticky-inner">
          <div className="sticky-thumb"><ProductImage color={stickyImage} /></div>
          <div className="sticky-info">
            <strong>{PRODUCT.shortTitle}</strong>
            {offer === "bundle" ? (
              <span><s>{formatPrice(prices.full)}</s>{formatPrice(prices.total)}</span>
            ) : (
              <span>{formatPrice(UNIT_PRICE)}</span>
            )}
          </div>
          <a className="btn btn-inline" href={url ?? undefined} aria-disabled={!url} tabIndex={stickyVisible ? 0 : -1}>
            {url ? "Commander" : "Bientôt"}
          </a>
        </div>
      </div>
    </>
  );
}
