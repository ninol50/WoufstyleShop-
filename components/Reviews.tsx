"use client";

import { useRef } from "react";
import { REVIEWS } from "@/lib/config";
import { ArrowLeft, ArrowRight } from "./icons";

export default function Reviews() {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="section" aria-label="Avis clients">
      <div className="container">
        <div className="reviews" ref={track}>
          {REVIEWS.map((r) => (
            <figure className="review center" key={r.author + r.date} style={{ margin: 0 }}>
              <div className="stars" aria-label="5 étoiles sur 5">★★★★★</div>
              <figcaption className="review-meta">{r.author} · {r.date}</figcaption>
              <blockquote>{r.text}</blockquote>
            </figure>
          ))}
        </div>
        {REVIEWS.length > 1 && (
          <div className="carousel-nav">
            <button aria-label="Avis précédent" onClick={() => scroll(-1)}><ArrowLeft size={18} /></button>
            <button aria-label="Avis suivant" onClick={() => scroll(1)}><ArrowRight size={18} /></button>
          </div>
        )}
      </div>
    </section>
  );
}
