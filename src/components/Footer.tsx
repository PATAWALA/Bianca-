import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapPin,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grille principale */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Colonne 1 – Identité & valeurs */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 group mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-lg">
                <FontAwesomeIcon icon={faLeaf} className="text-xl" />
              </div>
              <span className="text-2xl font-serif font-bold text-white">
                Bianca Despots
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mt-3">
              Bienveillance • Compétence • Cohérence
            </p>
            <p className="text-sm text-gray-500 mt-4 max-w-xs">
              Courtier immobilier résidentiel et commercial. 10 ans d’expérience
              au service de vos projets de vie.
            </p>
            {/* Écoresponsable */}
            <div className="flex items-center gap-2 mt-4 text-green-500 text-xs font-medium">
              <FontAwesomeIcon icon={faLeaf} />
              <span>Engagement écoresponsable</span>
            </div>
          </div>

          {/* Colonne 2 – Navigation */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/" className="hover:text-amber-400 transition-colors text-sm">Accueil</Link></li>
              <li><Link href="/a-propos" className="hover:text-amber-400 transition-colors text-sm">À propos</Link></li>
              <li><Link href="/proprietes" className="hover:text-amber-400 transition-colors text-sm">Nos Inscriptions</Link></li>
              <li><Link href="/temoignages" className="hover:text-amber-400 transition-colors text-sm">Témoignages</Link></li>
              <li><Link href="/articles" className="hover:text-amber-400 transition-colors text-sm">Articles</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400 transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Colonne 3 – Services */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>Achat / Vente</li>
              <li>Condo & Résidentiel</li>
              <li>Immeuble locatif</li>
              <li>Commercial</li>
              <li>Évaluation gratuite</li>
            </ul>
          </div>

          {/* Colonne 4 – Contact & Réseaux */}
          <div className="md:col-span-4">
            <h4 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:5143183519"
                className="flex items-center gap-3 hover:text-amber-400 transition-colors"
              >
                <FontAwesomeIcon icon={faPhone} className="text-amber-500 w-4" />
                514-318-3519
              </a>
              <a
                href="mailto:bianca@despotsimmobilier.ca"
                className="flex items-center gap-3 hover:text-amber-400 transition-colors"
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-amber-500 w-4" />
                bianca@despotsimmobilier.ca
              </a>
              <div className="flex items-start gap-3">
                <FontAwesomeIcon icon={faMapPin} className="text-amber-500 w-4 mt-1" />
                <span>Québec, Canada</span>
              </div>
            </div>
            {/* Réseaux sociaux */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-amber-600 hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-sm" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-amber-600 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-sm" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-amber-600 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="text-sm" />
              </a>
            </div>
          </div>
        </div>

        {/* Séparateur + Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} Bianca Despots — Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Conditions d’utilisation
            </a>
            <span className="flex items-center gap-1">
              Fait avec ❤️ au Québec
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}