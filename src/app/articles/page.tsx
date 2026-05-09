import { articles } from "@/data/articles";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function ArticlesPage() {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">Articles & Conseils</h1>
          <p className="mt-3 text-gray-600">Restez informé sur le marché immobilier québécois.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.slug} className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5 bg-white border border-t-0 border-gray-100">
                <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">{article.category}</span>
                <h2 className="mt-2 text-lg font-semibold text-gray-900">{article.title}</h2>
                <p className="text-sm text-gray-500 mt-2">{article.date}</p>
                <Link
                  href={`/articles/${article.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-amber-600 font-medium text-sm hover:gap-2 transition-all"
                >
                  Lire l&apos;article <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}