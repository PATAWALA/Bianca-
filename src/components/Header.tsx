
"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-amber-200/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-gray-900">
          Bianca <span className="text-amber-600">Despots</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-amber-600 transition-colors">Accueil</Link>
          <Link href="/a-propos" className="hover:text-amber-600 transition-colors">À propos</Link>
          <Link href="/proprietes" className="hover:text-amber-600 transition-colors">Propriétés</Link>
          <Link href="/temoignages" className="hover:text-amber-600 transition-colors">Témoignages</Link>
          <Link href="/articles" className="hover:text-amber-600 transition-colors">Articles</Link>
          <Link href="/contact" className="hover:text-amber-600 transition-colors">Contact</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:5143183519" className="flex items-center gap-2 text-gray-900 font-semibold">
            <FontAwesomeIcon icon={faPhone} className="text-amber-600" />
            514-318-3519
          </a>
          <Link href="/contact" className="px-5 py-2.5 bg-amber-600 text-white rounded-full font-semibold text-sm hover:bg-amber-700 transition-all shadow-md">
            Évaluation gratuite
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden text-2xl text-gray-800"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden bg-white border-t border-amber-100 transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-96" : "max-h-0"}`}>
        <div className="flex flex-col gap-3 py-4 px-4 text-sm font-medium text-gray-700">
          <Link href="/" onClick={() => setMobileOpen(false)}>Accueil</Link>
          <Link href="/a-propos" onClick={() => setMobileOpen(false)}>À propos</Link>
          <Link href="/proprietes" onClick={() => setMobileOpen(false)}>Propriétés</Link>
          <Link href="/temoignages" onClick={() => setMobileOpen(false)}>Témoignages</Link>
          <Link href="/articles" onClick={() => setMobileOpen(false)}>Articles</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
          <a href="tel:5143183519" className="flex items-center gap-2 font-semibold text-gray-900">
            <FontAwesomeIcon icon={faPhone} className="text-amber-600" /> 514-318-3519
          </a>
          <Link href="/contact" className="inline-block w-fit px-5 py-2.5 bg-amber-600 text-white rounded-full font-semibold text-sm hover:bg-amber-700 transition-all">
            Évaluation gratuite
          </Link>
        </div>
      </div>
    </header>
  );
}