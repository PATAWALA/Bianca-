export interface Article {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
}

export const articles: Article[] = [
  {
    slug: "reglement-copropriete-2025",
    title: "Nouveau règlement sur la copropriété divise au Québec à compter du 14 août 2025!",
    date: "16 août 2025",
    category: "Lois & règlements",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop"
  },
  {
    slug: "maison-multigenérationnelle",
    title: "Vivre ensemble autrement : La maison multigénérationnelle",
    date: "07 avr. 2025",
    category: "Achat",
    image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=600&auto=format&fit=crop"
  },
  {
    slug: "acheter-hiver-opportunites",
    title: "Acheter une maison en hiver : les opportunités à saisir",
    date: "10 fév. 2025",
    category: "Achat",
    image: "https://images.unsplash.com/photo-1489516408517-c32e3a0e5c16?w=600&auto=format&fit=crop"
  }
];