import { properties } from "@/data/properties";
import Image from "next/image";

export default function PropertiesPage() {
  return (
    <div className="py-16 md:py-24 bg-[#FBF7F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">Propriétés à vendre</h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Découvrez une sélection de biens soigneusement choisis pour leur potentiel. Contactez-moi pour une visite privée.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 bg-gray-200">
                <Image
                  src={`https://images.unsplash.com/photo-1583608205776-bf35f270fe4f?w=600&auto=format&fit=crop&sig=${p.id}`}
                  alt={p.city}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className={`absolute top-3 left-3 text-white text-xs font-semibold px-3 py-1 rounded-full ${p.status === "Nouveau" ? "bg-green-600" : p.status.includes("baisse") ? "bg-red-500" : "bg-amber-600"}`}>
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
                <button className="mt-4 w-full py-2.5 border border-amber-600 text-amber-600 rounded-full font-semibold text-sm hover:bg-amber-600 hover:text-white transition-colors">
                  Détails
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}