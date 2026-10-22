"use client";

import Link from "next/link";
import { useState } from "react";
import { shopUrl } from "@/lib/config";
import { BagIcon, MenuIcon, UserIcon } from "./icons";

const NAV = [
  { href: "/", label: "Boutique" },
  { href: "/produits/cuddlecarry-hoodie", label: "CuddleCarry Hoodie" },
  { href: "/produits/cuddlecarry-hoodie#faq", label: "Questions fréquentes" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="announce">10 % de remise dès 2 sweats</div>
      <header className="header">
        <div className="container header-inner">
          <div className="header-left">
            <button className="icon-btn" aria-label="Ouvrir le menu" onClick={() => setOpen(true)}>
              <MenuIcon />
            </button>
          </div>
          <Link href="/" className="logo">WOUFSTYLE</Link>
          <div className="header-right">
            <a className="icon-btn" href={shopUrl("/account")} aria-label="Mon compte"><UserIcon /></a>
            <a className="icon-btn" href={shopUrl("/cart")} aria-label="Panier"><BagIcon /></a>
          </div>
        </div>
      </header>
      <div className={`drawer${open ? " open" : ""}`} aria-hidden={!open}>
        <div className="drawer-backdrop" onClick={() => setOpen(false)} />
        <nav className="drawer-panel" aria-label="Menu principal">
          {NAV.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
