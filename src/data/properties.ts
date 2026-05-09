export interface Property {
  id: string;
  city: string;
  price: number;
  status: string;
  beds: number;
  baths: number;
  area: string | null;
  type: string;
}

export const properties: Property[] = [
  { id: "1", city: "Terrebonne (Lachenaie)", price: 349900, status: "Prix en baisse", beds: 3, baths: 1, area: "79.7 m²", type: "Résidentiel" },
  { id: "2", city: "Boisbriand", price: 349900, status: "Prix en baisse", beds: 1, baths: 1, area: "680 ft²", type: "Condo" },
  { id: "3", city: "Laval (Sainte-Rose)", price: 389000, status: "À vendre", beds: 1, baths: 1, area: "949 ft²", type: "Condo" },
  { id: "4", city: "Terrebonne (Lachenaie)", price: 399900, status: "À vendre", beds: 2, baths: 1, area: "82.7 m²", type: "Résidentiel" },
  { id: "5", city: "Sainte-Thérèse", price: 399900, status: "Nouveau", beds: 3, baths: 1, area: null, type: "Résidentiel" },
  { id: "6", city: "Terrebonne (Lachenaie)", price: 414900, status: "À vendre", beds: 2, baths: 1, area: "83.1 m²", type: "Résidentiel" },
  { id: "7", city: "Boucherville", price: 429000, status: "Prix en baisse", beds: 3, baths: 1, area: "90.5 m²", type: "Résidentiel" },
  { id: "8", city: "Laval (Sainte-Rose)", price: 439000, status: "À vendre", beds: 3, baths: 1, area: null, type: "Résidentiel" },
  { id: "9", city: "Saint-Lin/Laurentides", price: 454700, status: "À vendre", beds: 3, baths: 1, area: null, type: "Résidentiel" },
  { id: "10", city: "Deux-Montagnes", price: 489500, status: "Prix en baisse", beds: 2, baths: 1, area: "95.1 m²", type: "Résidentiel" },
  { id: "11", city: "Deux-Montagnes", price: 519500, status: "À vendre", beds: 2, baths: 1, area: "1034 ft²", type: "Résidentiel" },
  { id: "12", city: "Terrebonne (Lachenaie)", price: 524900, status: "Nouveau", beds: 5, baths: 2, area: null, type: "Résidentiel" },
  { id: "13", city: "Blainville", price: 549999, status: "Prix en baisse", beds: 4, baths: 2, area: null, type: "Résidentiel" },
  { id: "14", city: "Crabtree", price: 569900, status: "Prix en baisse", beds: 3, baths: 2, area: null, type: "Résidentiel" },
  { id: "15", city: "Laval (Saint-François)", price: 569900, status: "Nouveau", beds: 4, baths: 2, area: null, type: "Résidentiel" },
  { id: "16", city: "Bois-Des-Filion", price: 573900, status: "Prix en baisse", beds: 3, baths: 2, area: null, type: "Résidentiel" },
  { id: "17", city: "Montréal (Montréal-Nord)", price: 595000, status: "Prix en baisse", beds: 4, baths: 1, area: "118.4 m²", type: "Résidentiel" },
  { id: "18", city: "Pointe-Calumet", price: 624900, status: "Prix en baisse", beds: 4, baths: 2, area: null, type: "Résidentiel" },
  { id: "19", city: "Terrebonne (Lachenaie)", price: 624900, status: "Prix en baisse", beds: 3, baths: 1, area: null, type: "Résidentiel" },
  { id: "20", city: "Pointe-Calumet", price: 625000, status: "Prix en baisse", beds: 3, baths: 2, area: null, type: "Résidentiel" },
  { id: "21", city: "Pointe-Claire", price: 639000, status: "À vendre", beds: 4, baths: 3, area: "149.6 m²", type: "Résidentiel" },
  { id: "22", city: "Saint-Lin/Laurentides", price: 699000, status: "À vendre", beds: 3, baths: 1, area: null, type: "Résidentiel" },
  { id: "23", city: "Varennes", price: 699000, status: "À vendre", beds: 3, baths: 2, area: null, type: "Résidentiel" },
  { id: "24", city: "Saint-Eustache", price: 939900, status: "Prix en baisse", beds: 3, baths: 2, area: null, type: "Résidentiel" },
];