import Image from "next/image";
import Link from "next/link";
import { properties } from "@/data/properties";
import { testimonials } from "@/data/testimonials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faQuoteLeft, faEnvelope, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&auto=format&fit=crop"
            alt="Maison luxueuse"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/70 to-gray-900/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-200/20 backdrop-blur-sm border border-amber-300/30 rounded-full px-4 py-1.5 text-sm text-amber-200">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              Disponible pour vous accompagner
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight">
              Boostez vos <span className="text-amber-400 italic">profits</span>,<br />optimisez vos <span className="text-amber-400 italic">investissements</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Ensemble, trouvons des solutions stratégiques pour maximiser votre vente et faire de votre achat immobilier une opportunité rentable.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/proprietes" className="px-7 py-3.5 bg-amber-600 text-white rounded-full font-bold hover:bg-amber-500 transition-all shadow-lg">
                Voir les propriétés
              </Link>
              <Link href="/contact" className="px-7 py-3.5 border-2 border-white/50 text-white rounded-full font-semibold hover:bg-white/10 transition-all">
                Parler à Bianca
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Catégories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {['Condo', 'Propriété résidentielle', 'Immeuble locatif', 'Immeuble commercial'].map((cat) => (
            <div key={cat} className="p-6 border border-amber-100 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer">
              <FontAwesomeIcon icon={faLocationDot} className="text-3xl text-amber-600 mb-3" />
              <h3 className="font-semibold text-gray-800">{cat}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Propriétés en vedette */}
      <section className="py-20 bg-[#FBF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">Propriétés en vedette</h2>
              <p className="mt-2 text-gray-600">Quelques coups de cœur du moment</p>
            </div>
            <Link href="/proprietes" className="hidden sm:inline-flex items-center gap-1 text-amber-600 font-semibold hover:text-amber-800 transition-colors">
              Voir tout <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.slice(0, 6).map((p) => (
              <Link key={p.id} href={`/proprietes`} className="block bg-white rounded-2xl shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={`https://images.unsplash.com/photo-1583608205776-bf35f270fe4f?w=600&auto=format&fit=crop&sig=${p.id}`}
                    alt={p.city}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute top-3 left-3 bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {p.status}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-500 mb-1">{p.city}</p>
                  <p className="text-2xl font-bold text-gray-900">{p.price.toLocaleString('fr-CA')} $</p>
                  <div className="flex gap-4 mt-3 text-sm text-gray-600">
                    <span>{p.beds} ch</span>
                    <span>{p.baths} sdb</span>
                    {p.area && <span>{p.area}</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10 sm:hidden">
            <Link href="/proprietes" className="inline-block px-6 py-3 border-2 border-amber-600 text-amber-600 rounded-full font-semibold hover:bg-amber-600 hover:text-white transition-all">
              Voir toutes les propriétés
            </Link>
          </div>
        </div>
      </section>

      {/* Extrait À propos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1573497620c9-7b6c0c1b6f9f?w=800&auto=format&fit=crop"
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

      {/* Témoignages extrait */}
      <section className="py-20 bg-[#FBF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">Ce que mes clients disent</h2>
            <Link href="/temoignages" className="mt-2 inline-flex items-center gap-1 text-amber-600 font-semibold hover:text-amber-800 transition-colors">
              Voir tous les témoignages <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t) => (
              <div key={t.id} className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100">
                <FontAwesomeIcon icon={faQuoteLeft} className="text-amber-300 text-2xl mb-3" />
                <p className="text-gray-700 italic leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-4 font-semibold text-gray-900">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-amber-700 to-amber-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FontAwesomeIcon icon={faEnvelope} className="text-4xl text-amber-200 mb-4" />
          <h2 className="text-3xl sm:text-4xl font-serif font-bold">Restez à l&apos;affût</h2>
          <p className="mt-3 text-amber-100 max-w-xl mx-auto">Soyez au courant des dernières opportunités dès leur publication !</p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-5 py-3.5 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
              required
            />
            <button type="submit" className="px-8 py-3.5 bg-white text-amber-800 rounded-full font-bold hover:bg-amber-50 transition-all shadow-lg">
              Je m&apos;abonne
            </button>
          </form>
        </div>
      </section>
    </>
  );
}