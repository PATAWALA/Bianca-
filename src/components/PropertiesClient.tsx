"use client";
import { useState, useMemo } from "react";
import { properties } from "@/data/properties";
import PropertyCard from "./PropertyCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const allStatuses = ["Tous", "Nouveau", "Prix en baisse", "À vendre"];
const allTypes = ["Tous", "Condo", "Résidentiel"];

export default function PropertiesClient() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("Tous");
  const [typeFilter, setTypeFilter] = useState("Tous");

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (search && !p.city.toLowerCase().includes(search.toLowerCase())) return false;
      if (statusFilter !== "Tous" && p.status !== statusFilter) return false;
      if (typeFilter !== "Tous" && p.type !== typeFilter) return false;
      return true;
    });
  }, [search, statusFilter, typeFilter]);

  return (
    <div className="py-16 md:py-24 bg-[#FBF7F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
            Propriétés à vendre
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Explorez nos offres exclusives et trouvez la propriété de vos rêves.
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center justify-center">
          {/* Recherche par ville */}
          <div className="relative w-full sm:w-64">
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Rechercher une ville..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-amber-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
            />
          </div>

          {/* Statut */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full sm:w-44 px-4 py-2.5 rounded-full border border-amber-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
          >
            {allStatuses.map((s) => (
              <option key={s} value={s}>
                {s === "Tous" ? "Tous les statuts" : s}
              </option>
            ))}
          </select>

          {/* Type de bien */}
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="w-full sm:w-44 px-4 py-2.5 rounded-full border border-amber-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
          >
            {allTypes.map((t) => (
              <option key={t} value={t}>
                {t === "Tous" ? "Tous les types" : t}
              </option>
            ))}
          </select>
        </div>

        {/* Résultats */}
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 py-12">
            Aucune propriété ne correspond à ces critères.
          </p>
        ) : (
          <>
            <p className="text-sm text-gray-500 mb-6 text-center">
              {filtered.length} bien{filtered.length > 1 ? "s" : ""} trouvé
              {filtered.length > 1 ? "s" : ""}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}