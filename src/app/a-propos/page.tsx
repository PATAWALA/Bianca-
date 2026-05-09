import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faTree, faRecycle } from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-96 lg:h-full min-h-[500px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1573497620c9-7b6c0c1b6f9f?w=800&auto=format&fit=crop"
            alt="Bianca Despots"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="space-y-6">
          <span className="text-amber-600 font-semibold uppercase tracking-wider text-sm">Bienveillance • Compétence • Cohérence</span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">À propos de Bianca</h1>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Il y a 10 ans, j’ai fait un choix qui a complètement changé ma vie : laisser derrière moi le monde de l’administration et de la gestion pour suivre une passion qui me faisait vibrer depuis toujours — l’immobilier.
            </p>
            <p>
              Dès le départ, je savais que je voulais le faire autrement! Je ne voulais pas simplement vendre des maisons. Je voulais accompagner des gens dans leurs transitions de vie, les aider à faire des choix éclairés et surtout, rendre ce processus plus humain, plus simple et beaucoup moins stressant.
            </p>
            <p>
              Parce qu’au fond, une transaction immobilière, ce n’est pas qu’une question de chiffres ou de signatures! C’est souvent un grand tournant : un premier achat, une séparation, une famille qui s’agrandit, un départ vers autre chose… Et chaque fois, il y a une histoire, une émotion, un contexte unique.
            </p>
            <p>
              C’est pour ça que je prends le temps de connaître mes clients — vraiment. De comprendre ce qu’ils vivent, ce qu’ils veulent et ce qu’ils redoutent aussi. Mon approche est structurée, bienveillante et sans pression. On jase, on planifie, on ajuste et surtout, on avance ensemble à un rythme qui leur ressemble!
            </p>
            <p>
              Au fil des années, j’ai eu la chance d’accompagner une grande variété de clients — que ce soit en copropriétés, maisons unifamiliales, immeubles locatifs ou reprises de finance. Cette diversité m’a permis d’affiner mon instinct, de développer une solide expertise en analyse, stratégie et négociation et de bâtir une approche où le cœur et la tête travaillent main dans la main.
            </p>
            <p>
              Mes clients me disent souvent que je rends les choses simples, même quand tout semble compliqué. Que je sais trouver les bons mots, amener de la légèreté tout en défendant leurs intérêts avec rigueur et détermination. Et ça, pour moi, c’est le plus beau compliment qu’on puisse me faire!
            </p>
          </div>

          <div className="border-l-4 border-amber-500 pl-4 space-y-2 text-gray-700">
            <p className="font-semibold">Engagement écoresponsable :</p>
            <div className="flex items-center gap-2"><FontAwesomeIcon icon={faLeaf} className="text-green-600" /> Papier réduit au minimum</div>
            <div className="flex items-center gap-2"><FontAwesomeIcon icon={faTree} className="text-green-600" /> Plantation d’arbres (Carbone boréal) à chaque transaction</div>
            <div className="flex items-center gap-2"><FontAwesomeIcon icon={faRecycle} className="text-green-600" /> Conseils en rénovations durables</div>
          </div>

          <p className="text-xl font-serif font-semibold text-gray-900 italic">
            « Je ne vends pas simplement des propriétés — j’accompagne des gens à créer le prochain chapitre de leur vie, dans un espace qui leur ressemble. »
          </p>
          <p className="text-gray-600">— Bianca Despots-Bonnier ✧ Courtier Immobilier</p>
        </div>
      </div>
    </div>
  );
}