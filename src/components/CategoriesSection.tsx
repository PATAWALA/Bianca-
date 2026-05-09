import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function CategoriesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {["Condo", "Propriété résidentielle", "Immeuble locatif", "Immeuble commercial"].map((cat) => (
          <div key={cat} className="p-6 border border-amber-100 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer">
            <FontAwesomeIcon icon={faLocationDot} className="text-3xl text-amber-600 mb-3" />
            <h3 className="font-semibold text-gray-800">{cat}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}