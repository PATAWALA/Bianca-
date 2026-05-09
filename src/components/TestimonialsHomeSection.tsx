import Link from "next/link";
import { testimonials } from "@/data/testimonials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function TestimonialsHomeSection() {
  return (
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
  );
}