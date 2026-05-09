import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faRulerCombined,
  faMapMarkerAlt,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import type { Property } from "@/data/properties";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      href={`/proprietes/${property.id}`}
      className="group block bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={property.images[0]}
          alt={property.city}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow ${
              property.status === "Nouveau"
                ? "bg-emerald-500"
                : property.status.includes("baisse")
                ? "bg-rose-500"
                : "bg-amber-500"
            }`}
          >
            {property.status}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
          <span className="text-xl font-bold text-gray-900">
            {property.price.toLocaleString("fr-CA")} $
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start gap-2 text-gray-500 mb-3">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-amber-500 mt-1" />
          <span className="text-sm font-medium">{property.city}</span>
        </div>
        <div className="flex items-center gap-5 text-gray-700 text-sm mb-4">
          <span className="flex items-center gap-1.5">
            <FontAwesomeIcon icon={faBed} className="text-gray-400" />
            {property.beds} ch.
          </span>
          <span className="flex items-center gap-1.5">
            <FontAwesomeIcon icon={faBath} className="text-gray-400" />
            {property.baths} sdb
          </span>
          {property.area && (
            <span className="flex items-center gap-1.5">
              <FontAwesomeIcon icon={faRulerCombined} className="text-gray-400" />
              {property.area}
            </span>
          )}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">{property.type}</span>
          <span className="inline-flex items-center gap-1 text-amber-600 font-semibold text-sm group-hover:gap-2 transition-all">
            Voir détails <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
          </span>
        </div>
      </div>
    </Link>
  );
}