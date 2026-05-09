import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function AboutTeaserSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/images/logo.jpg"
            alt="Bianca Despots"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="space-y-5">
          <span className="text-amber-600 font-semibold uppercase tracking-wider text-sm">Bienveillance • Compétence • Cohérence</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">L&apos;humain au cœur de chaque décision</h2>
          <p className="text-gray-700 leading-relaxed">
            Depuis 10 ans, j’accompagne des familles, des couples et des investisseurs dans l’achat et la vente de leur propriété. Chaque transaction me rappelle pourquoi j’ai choisi ce métier : mettre l’humain au cœur de chaque décision.
          </p>
          <Link href="/a-propos" className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-800 transition-colors">
            Découvrir mon histoire <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
}