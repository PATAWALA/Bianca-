"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Détection du scroll pour un effet premium
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b-2 border-amber-300/30"
          : "bg-white/90 backdrop-blur-md shadow-sm border-b border-amber-200/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        {/* ========== LOGO ICONE ========== */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          title="Bianca Despots - Courtier immobilier"
        >
          <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
            <FontAwesomeIcon icon={faBuildingColumns} className="text-xl" />
            <div className="absolute inset-0 rounded-full border-2 border-amber-300/40 group-hover:border-amber-300/70 transition-colors" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-2xl sm:text-2xl font-serif font-bold text-gray-900 group-hover:text-amber-800 transition-colors duration-300">
              Bianca Despots
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-amber-600 font-medium mt-0.5">
              Courtier immobilier
            </span>
          </div>
        </Link>

        {/* ========== DESKTOP NAV ========== */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-gray-600">
          {[
            { href: "/", label: "Accueil" },
            { href: "/a-propos", label: "À propos" },
            { href: "/proprietes", label: "Propriétés" },
            { href: "/temoignages", label: "Témoignages" },
            { href: "/articles", label: "Articles" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-3 py-2 transition-colors duration-200 hover:text-amber-700 group/link"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-amber-500 transition-all duration-300 group-hover/link:w-full group-hover/link:left-0 rounded-full" />
            </Link>
          ))}
        </nav>

        {/* ========== ACTIONS (tél + CTA) ========== */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:5143183519"
            className="flex items-center gap-2 text-gray-800 font-semibold group"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500" />
            </span>
            <FontAwesomeIcon icon={faPhone} className="text-amber-600" />
            <span className="bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent font-bold group-hover:to-amber-800 transition-all duration-300">
              514-318-3519
            </span>
          </a>

          <Link
            href="/contact"
            className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-semibold text-sm hover:from-amber-600 hover:to-amber-700 transition-all shadow-md hover:shadow-xl hover:scale-105 transform active:scale-95"
          >
            Évaluation gratuite
          </Link>
        </div>

        {/* ========== MOBILE BURGER ========== */}
        <button
          className="lg:hidden text-3xl text-gray-800 hover:text-amber-600 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* ========== MOBILE MENU ========== */}
      <div
        className={`lg:hidden bg-white/95 backdrop-blur-md border-t border-amber-100 transition-all duration-500 overflow-hidden ${
          mobileOpen ? "max-h-[500px] shadow-2xl" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 py-4 px-6 text-base font-medium text-gray-700">
          {[
            { href: "/", label: "Accueil" },
            { href: "/a-propos", label: "À propos" },
            { href: "/proprietes", label: "Propriétés" },
            { href: "/temoignages", label: "Témoignages" },
            { href: "/articles", label: "Articles" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-3 px-4 rounded-xl hover:bg-amber-50 hover:text-amber-800 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}

          <hr className="my-2 border-amber-100" />

          <a
            href="tel:5143183519"
            className="flex items-center gap-3 py-3 px-4 rounded-xl bg-amber-50 text-gray-900 font-semibold"
          >
            <FontAwesomeIcon icon={faPhone} className="text-amber-600 text-xl" />
            514-318-3519
          </a>

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-semibold text-center hover:from-amber-600 hover:to-amber-700 transition-all shadow-md"
          >
            Évaluation gratuite
          </Link>
        </div>
      </div>
    </header>
  );
}