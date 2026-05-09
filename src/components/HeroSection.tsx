import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Fond avec zoom lent intégré */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&auto=format&fit=crop"
          alt="Résidence de luxe"
          fill
          className="object-cover scale-105 animate-subtle-zoom"
          priority
          sizes="100vw"
        />
        {/* Overlay plus doux, mais qui assure la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-900/50 to-gray-900/30 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-amber-200/20 backdrop-blur-sm border border-amber-300/30 rounded-full px-4 py-1.5 text-sm text-amber-200">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            Disponible pour vous accompagner
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight">
            Boostez vos <span className="text-amber-400 italic">profits</span>,<br />optimisez vos{" "}
            <span className="text-amber-400 italic">investissements</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Ensemble, trouvons des solutions stratégiques pour maximiser votre vente et faire
            de votre achat immobilier une opportunité rentable.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/proprietes"
              className="px-7 py-3.5 bg-amber-600 text-white rounded-full font-bold hover:bg-amber-500 transition-all shadow-lg hover:scale-105"
            >
              Voir les propriétés
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3.5 border-2 border-white/50 text-white rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Parler à Bianca
            </Link>
          </div>
        </div>
      </div>

      {/* Animation zoom lent pour l'image de fond */}
      <style jsx>{`
        @keyframes subtle-zoom {
          0% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1.15);
          }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 20s infinite alternate ease-in-out;
        }
      `}</style>
    </section>
  );
}