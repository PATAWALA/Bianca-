import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function AboutTeaserSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Photo de Bianca (ou image inspirante) */}
        <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/images/logo.jpg"
            alt="Bianca Despots"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Texte unique, pas une copie */}
        <div className="space-y-5">
          <span className="text-amber-600 font-semibold uppercase tracking-wider text-sm">
            Bienveillance • Compétence • Cohérence
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
            L’immobilier, une passion devenue mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Avec plus de 10 ans d’expérience, j’ai accompagné des centaines de familles et d’investisseurs.
            Mon plaisir ? Transformer chaque transaction en une expérience humaine et sans stress.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Choisir Bianca Despots, c’est opter pour une approche sur‑mesure, où chaque détail compte
            et où vos objectifs deviennent les miens.
          </p>
          <Link
            href="/a-propos"
            className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-800 transition-colors"
          >
            Découvrir mon parcours <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
}