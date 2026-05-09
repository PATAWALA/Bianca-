import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-serif font-bold text-white">Bianca Despots</h3>
          <p className="mt-2 text-amber-400 text-sm">Courtier immobilier • Bienveillance - Compétence - Cohérence</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Navigation</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-amber-400 transition-colors">Accueil</Link></li>
            <li><Link href="/a-propos" className="hover:text-amber-400 transition-colors">À propos</Link></li>
            <li><Link href="/proprietes" className="hover:text-amber-400 transition-colors">Propriétés</Link></li>
            <li><Link href="/articles" className="hover:text-amber-400 transition-colors">Articles</Link></li>
            <li><Link href="/contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Contact</h4>
          <p>514-318-3519</p>
          <p>bianca@despotsimmobilier.ca</p>
        </div>
      </div>
      <div className="mt-10 pt-8 border-t border-gray-700 text-center text-sm">
        <p>© {new Date().getFullYear()} Bianca Despots. Tous droits réservés.</p>
      </div>
    </footer>
  );
}