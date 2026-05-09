import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function NewsletterSection() {
  return (
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
  );
}