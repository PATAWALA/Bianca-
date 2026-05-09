import { testimonials } from "@/data/testimonials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function TestimonialsPage() {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">Témoignages</h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">La confiance de mes clients est ma plus grande fierté.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-[#FBF7F0] p-6 rounded-2xl shadow-sm border border-amber-100 hover:border-amber-300 transition-all">
              <FontAwesomeIcon icon={faQuoteLeft} className="text-amber-300 text-2xl mb-3" />
              <p className="text-gray-700 italic leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              <p className="mt-4 font-semibold text-gray-900">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}