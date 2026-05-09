import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faTree,
  faRecycle,
  faAward,
  faGraduationCap,
  faCalendarAlt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

// Données structurées des formations par année
const formationsByYear: Record<string, string[]> = {
  "2024": [
    "Déclaration du vendeur et obligations du courtier",
    "Présence de pyrrhotite et transactions immobilières",
    "Fiscalité municipale et l'évaluation foncière : courtage commercial",
    "Évolutions législatives ayant un impact sur la pratique des courtiers",
    "Conformité contractuelle : rédigez des clauses robustes",
  ],
  "2023": ["Les exclusions de garantie(s) légale(s) du vendeur"],
  "2022": [
    "Formation ÉcoCourtier",
    "La sécurité des données et la protection des renseignements personnels",
  ],
  "2021": [
    "Effervescence immobilière résidentielle",
    "10 éléments essentiels des installations septiques",
  ],
  "2020": [
    "L'assurance titres résidentielle",
    "La décoration intérieure",
    "L'évaluation d'une propriété",
    "La qualification de l'acheteur",
    "La qualification d'un client vendeur",
    "Problèmes environnementaux",
    "Enjeux de la copropriété divise résidentielle",
    "Publicité, représentation et médias sociaux",
  ],
  "2019": [
    "Réseaux sociaux pour courtiers – Création de contenu",
    "Réseaux sociaux pour courtiers – LinkedIn, Instagram, Facebook",
    "Image de marque personnelle",
    "Courtage d'achat résidentiel et hypothécaire",
    "Éthique et déontologie",
    "Modifications à la Loi sur le courtage immobilier",
  ],
  "2018": [
    "Prospection et développement des affaires",
    "Organiser son succès",
    "Modèle d'affaires pour se vendre !",
    "Code d'honneur pour acheteurs",
    "Marketing ciblé – Mon secteur ferme",
    "Inscrire pour être vu et vendu!",
  ],
  "2017": [
    "Analyse et rédaction de clauses aux contrats de courtage",
    "Identification et vérification d'identité",
  ],
  "2016": [
    "Formation en décontamination de moisissure et d'amiante",
    "Les principaux tests reliés à l'immobilier",
  ],
};

export default function AboutPage() {
  // Conversion de l'objet en tableau trié par année décroissante
  const years = Object.keys(formationsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="bg-white">
      {/* ---------- HERO ---------- */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1573497620c9-7b6c0c1b6f9f?w=1920&auto=format&fit=crop"
            alt="Bianca Despots"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white space-y-4">
            <span className="text-amber-400 font-semibold uppercase tracking-[0.2em] text-sm">
              Bienveillance • Compétence • Cohérence
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              L’immobilier <span className="italic text-amber-300">autrement</span>
            </h1>
            <p className="text-lg text-gray-200 font-light">
              Une courtière qui allie cœur, stratégie et résultats.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- BIO RÉÉCRITE ---------- */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-80 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop"
              alt="Bianca en consultation"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-8">
            <div>
              <span className="text-amber-600 font-semibold uppercase tracking-wide text-sm">
                Ma philosophie
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mt-2">
                Votre succès, ma mission
              </h2>
            </div>

            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                <strong>Il y a 10 ans, j’ai tout quitté pour l’immobilier.</strong> Non pas pour
                vendre des murs, mais pour transformer des vies. Chaque client que je rencontre
                porte un projet unique : premier achat, agrandissement, séparation, retraite…
                Derrière chaque signature, il y a une histoire.
              </p>
              <p>
                Mon approche ? <span className="font-semibold text-amber-800">Écouter vraiment</span>,
                analyser avec rigueur, conseiller sans pression. Je ne vous vendrai jamais un bien
                qui ne correspond pas à votre réalité. Je vous aide à prendre la meilleure décision,
                même si cela signifie attendre.
              </p>
              <p>
                Grâce à une expertise pointue en
                <span className="font-semibold"> négociation, fiscalité, contrats et environnement</span>,
                je sécurise chaque transaction. Mes clients disent que je rends simple ce qui paraît
                compliqué. C’est le plus beau des compliments.
              </p>
              <p>
                Aujourd’hui, je mets mon expérience au service des familles, des couples et des
                investisseurs, pour qu’ils gagnent du temps, de l’argent et de la sérénité.
              </p>
            </div>

            {/* Engagement écoresponsable */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faLeaf} className="text-green-700 text-xl" />
                <span className="text-sm font-medium text-gray-800">Zéro papier</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faTree} className="text-green-700 text-xl" />
                <span className="text-sm font-medium text-gray-800">Carbone boréal</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faRecycle} className="text-green-700 text-xl" />
                <span className="text-sm font-medium text-gray-800">Rénovation durable</span>
              </div>
            </div>

            {/* Diplômes et prix */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <FontAwesomeIcon icon={faGraduationCap} className="text-amber-600 text-2xl mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Diplômes</p>
                  <p className="text-sm text-gray-600">
                    Courtage résidentiel (2016)<br />
                    Courtage commercial (2021)<br />
                    Accréditation ÉcoCourtier (2022)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-200">
                <FontAwesomeIcon icon={faStar} className="text-amber-600 text-2xl mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Prix</p>
                  <p className="text-sm text-gray-600">
                    <span className="font-bold text-amber-700">Recrue de l’année 2016</span><br />
                    Performance exceptionnelle dès la première année
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TIMELINE DES FORMATIONS ---------- */}
      <section className="py-20 bg-gradient-to-b from-[#FBF7F0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-4xl text-amber-500 mb-4" />
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">
              Formation continue
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Parce que l’excellence s’entretient, voici un aperçu de mon parcours de
              perfectionnement depuis mes débuts.
            </p>
          </div>

          {/* Timeline verticale */}
          <div className="relative">
            {/* Ligne centrale */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-amber-200" />

            <div className="space-y-12">
              {years.map((year, yearIndex) => (
                <div
                  key={year}
                  className={`relative flex flex-col md:flex-row ${
                    yearIndex % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center`}
                >
                  {/* Point sur la ligne (version desktop) */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow z-10" />

                  {/* Contenu */}
                  <div
                    className={`w-full md:w-5/12 ${
                      yearIndex % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100 hover:shadow-md transition-all">
                      <span className="inline-block bg-amber-600 text-white text-sm font-bold px-3 py-1 rounded-full mb-3">
                        {year}
                      </span>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        {formationsByYear[year].map((formation, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-amber-500 mt-1">•</span>
                            {formation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Pour mobile : point sur la gauche */}
                  <div className="md:hidden absolute left-4 top-6 w-3 h-3 bg-amber-500 rounded-full border-2 border-white shadow" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CALL-TO-ACTION ---------- */}
      <section className="py-20 bg-amber-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            Prêt à concrétiser votre projet ?
          </h2>
          <p className="text-amber-100 text-lg mb-8">
            Discutons ensemble de vos besoins. Première consultation sans frais.
          </p>
          <a
            href="tel:5143183519"
            className="inline-flex items-center gap-2 bg-white text-amber-800 px-8 py-3.5 rounded-full font-bold text-lg hover:bg-amber-50 transition-all shadow-lg transform hover:-translate-y-0.5"
          >
            <FontAwesomeIcon icon={faAward} />
            Appeler maintenant : 514-318-3519
          </a>
        </div>
      </section>
    </div>
  );
}