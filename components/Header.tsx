"use client";

import Link from "next/link";
import { useState } from "react";
import { shopUrl } from "@/lib/config";
import { BagIcon, MenuIcon, UserIcon } from "./icons";
import Logo from "./Logo";

const NAV: { href: string; label: string; short?: string }[] = [
  { href: "/", label: "Boutique" },
  { href: "/produits/cuddlecarry-hoodie", label: "CuddleCarry Hoodie", short: "Le sweat" },
  { href: "/guide-des-tailles", label: "Guide des tailles" },
  { href: "/livraison-retours", label: "Livraison et retours" },
  { href: "/faq", label: "FAQ" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

const DESKTOP_NAV = ["/produits/cuddlecarry-hoodie", "/guide-des-tailles", "/faq", "/contact"];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="announce">10 % de remise dès 2 sweats</div>
      <header className="header">
        <div className="container header-inner">
          <div className="header-left">
            <button className="icon-btn menu-btn" aria-label="Ouvrir le menu" onClick={() => setOpen(true)}>
              <MenuIcon />
            </button>
            <nav className="nav-desktop" aria-label="Navigation">
              {NAV.filter((i) => DESKTOP_NAV.includes(i.href)).map((item) => (
                <Link key={item.href} href={item.href}>{item.short ?? item.label}</Link>
              ))}
            </nav>
          </div>
          <Link href="/" className="logo" aria-label="Woufstyle, accueil"><Logo /></Link>
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
