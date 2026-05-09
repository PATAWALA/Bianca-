import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faClock } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24 bg-[#FBF7F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
        <div>
          <span className="text-amber-600 font-semibold uppercase tracking-wider text-sm">Contact</span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mt-2">Évaluation sans frais en 48h</h1>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Que vous cherchiez à vendre, acheter ou investir, discutons de votre projet. Je m&apos;engage à vous répondre personnellement sous 48 heures.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-gray-800">
              <FontAwesomeIcon icon={faPhone} className="text-amber-600 text-xl" />
              <a href="tel:5143183519" className="hover:text-amber-600 transition-colors font-semibold">514-318-3519</a>
            </div>
            <div className="flex items-center gap-3 text-gray-800">
              <FontAwesomeIcon icon={faEnvelope} className="text-amber-600 text-xl" />
              <a href="mailto:bianca@despotsimmobilier.ca" className="hover:text-amber-600 transition-colors">bianca@despotsimmobilier.ca</a>
            </div>
            <div className="flex items-center gap-3 text-gray-800">
              <FontAwesomeIcon icon={faClock} className="text-amber-600 text-xl" />
              <span>Lun – Ven : 9h00 – 18h00</span>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <a href="#" className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center hover:bg-amber-700 transition-colors" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center hover:bg-amber-700 transition-colors" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center hover:bg-amber-700 transition-colors" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>

          <div className="mt-10 p-6 bg-white rounded-2xl shadow-sm border border-amber-100">
            <p className="font-semibold text-gray-900 mb-2">Pourquoi me choisir ?</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>10 ans d’expérience terrain</li>
              <li>Approche humaine et sans pression</li>
              <li>Expertise en analyse et négociation</li>
              <li>Engagement écoresponsable</li>
            </ul>
          </div>
        </div>

        {/* Formulaire */}
        <div className="bg-white p-8 rounded-2xl shadow-sm h-fit">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Envoyez-moi un message</h3>
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
              <input type="text" id="name" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Courriel</label>
              <input type="email" id="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500" required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
              <input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Votre message</label>
              <textarea id="message" rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
            </div>
            <button type="submit" className="w-full py-3.5 bg-amber-600 text-white rounded-full font-bold hover:bg-amber-700 transition-all shadow-md">
              Envoyer ma demande
            </button>
            <p className="text-xs text-gray-500 text-center mt-2">Réponse personnalisée sous 48h ouvrés</p>
          </form>
        </div>
      </div>
    </div>
  );
}