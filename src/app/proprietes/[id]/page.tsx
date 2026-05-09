import { notFound } from "next/navigation";
import Link from "next/link";
import { properties } from "@/data/properties";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faRulerCombined,
  faHome,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import PropertyGallery from "@/components/PropertyGallery";

export const dynamicParams = false;

export async function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }));
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = properties.find((p) => p.id === id);
  if (!property) notFound();

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 🔙 Retour */}
        <Link
          href="/proprietes"
          className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-800 font-medium text-sm mb-4 transition-colors"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
          Retour aux propriétés
        </Link>

        {/* En-tête : ville et prix */}
        <div className="mb-8">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white ${
              property.status === "Nouveau"
                ? "bg-emerald-500"
                : property.status.includes("baisse")
                ? "bg-rose-500"
                : "bg-amber-500"
            }`}
          >
            {property.status}
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold mt-3">{property.city}</h1>
          <p className="text-4xl font-bold text-gray-900 mt-1">
            {property.price.toLocaleString("fr-CA")} $
          </p>
        </div>

        {/* 🏡 Galerie interactive */}
        <PropertyGallery images={property.images} alt={property.city} />

        {/* Détails du bien */}
        <h2 className="text-2xl font-serif font-bold text-gray-900 mt-10 mb-4">
          Intérieurs et autres détails
        </h2>

        <div className="flex flex-wrap gap-6 text-gray-700">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faBed} className="text-amber-600" />
            <span className="font-semibold">{property.beds} chambres</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faBath} className="text-amber-600" />
            <span className="font-semibold">{property.baths} salle(s) de bain</span>
          </div>
          {property.area && (
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faRulerCombined} className="text-amber-600" />
              <span className="font-semibold">{property.area}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faHome} className="text-amber-600" />
            <span className="font-semibold">{property.type}</span>
          </div>
        </div>

        {/* Description + Formulaire */}
        <div className="grid lg:grid-cols-3 gap-12 mt-12">
          <div className="lg:col-span-2">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Description</h2>
              <p className="text-gray-700 leading-relaxed">
                Idéalement situé à <strong>{property.city}</strong>, ce bien offre un cadre de vie exceptionnel. 
                Chaque pièce a été pensée pour allier confort et élégance. Contactez Bianca via le formulaire 
                ci‑contre pour une visite privée et laissez‑vous séduire par cette opportunité unique.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Intéressé(e) ?</h2>
            <p className="text-sm text-gray-600 mb-6">Laissez vos coordonnées, Bianca vous rappelle sous 48h.</p>
            <form className="space-y-4">
              <input type="text" placeholder="Votre nom" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500" required />
              <input type="email" placeholder="Votre courriel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500" required />
              <textarea placeholder="Message (optionnel)" rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500" />
              <button type="submit" className="w-full py-3 bg-amber-600 text-white rounded-full font-semibold hover:bg-amber-700 transition-all shadow-md">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}