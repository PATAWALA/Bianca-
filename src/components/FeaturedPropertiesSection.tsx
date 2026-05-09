import Link from "next/link";
import { properties } from "@/data/properties";
import PropertyCard from "./PropertyCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import type { Property } from "@/data/properties";

export default function FeaturedPropertiesSection() {
  // Protection absolue : si l'import échoue, on utilise un tableau vide
  const allProperties: Property[] = Array.isArray(properties) ? properties : [];

  // Filtrage strict pour éliminer tout élément invalide
  const safeProperties = allProperties.filter(
    (p): p is Property =>
      p !== null &&
      p !== undefined &&
      typeof p === "object" &&
      typeof p.id === "string" &&
      p.images &&
      Array.isArray(p.images) &&
      p.images.length > 0
  );

  // Optionnel : log côté serveur (visible dans le terminal) pour vérifier
  if (allProperties.length > 0 && safeProperties.length === 0) {
    console.warn("❌ Aucune propriété valide après filtrage !");
  }

  return (
    <section className="py-20 bg-[#FBF7F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              Propriétés en vedette
            </h2>
            <p className="mt-2 text-gray-600">Quelques coups de cœur du moment</p>
          </div>
          <Link
            href="/proprietes"
            className="hidden sm:inline-flex items-center gap-1 text-amber-600 font-semibold hover:text-amber-800 transition-colors"
          >
            Voir tout <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safeProperties.length === 0 ? (
            <p className="text-gray-500 col-span-3 text-center py-12">
              Aucune propriété à afficher pour le moment.
            </p>
          ) : (
            safeProperties.slice(0, 6).map((p) => <PropertyCard key={p.id} property={p} />)
          )}
        </div>

        <div className="text-center mt-10 sm:hidden">
          <Link
            href="/proprietes"
            className="inline-block px-6 py-3 border-2 border-amber-600 text-amber-600 rounded-full font-semibold hover:bg-amber-600 hover:text-white transition-all"
          >
            Voir toutes les propriétés
          </Link>
        </div>
      </div>
    </section>
  );
}