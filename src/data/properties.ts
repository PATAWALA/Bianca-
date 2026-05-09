export interface Property {
  id: string;
  city: string;
  price: number;
  status: string;
  beds: number;
  baths: number;
  area: string | null;
  type: string;
  images: string[];
}

export const properties: Property[] = [
  {
    id: "1",
    city: "Terrebonne (Lachenaie)",
    price: 349900,
    status: "Prix en baisse",
    beds: 3,
    baths: 1,
    area: "79.7 m²",
    type: "Résidentiel",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "2",
    city: "Boisbriand",
    price: 349900,
    status: "Prix en baisse",
    beds: 1,
    baths: 1,
    area: "680 ft²",
    type: "Condo",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
     "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "3",
    city: "Laval (Sainte-Rose)",
    price: 389000,
    status: "À vendre",
    beds: 1,
    baths: 1,
    area: "949 ft²",
    type: "Condo",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "4",
    city: "Terrebonne (Lachenaie)",
    price: 399900,
    status: "À vendre",
    beds: 2,
    baths: 1,
    area: "82.7 m²",
    type: "Résidentiel",
    images: [
      "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "5",
    city: "Sainte-Thérèse",
    price: 399900,
    status: "Nouveau",
    beds: 3,
    baths: 1,
    area: null,
    type: "Résidentiel",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "6",
    city: "Terrebonne (Lachenaie)",
    price: 414900,
    status: "À vendre",
    beds: 2,
    baths: 1,
    area: "83.1 m²",
    type: "Résidentiel",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "7",
    city: "Boucherville",
    price: 429000,
    status: "Prix en baisse",
    beds: 3,
    baths: 1,
    area: "90.5 m²",
    type: "Résidentiel",
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "8",
    city: "Laval (Sainte-Rose)",
    price: 439000,
    status: "À vendre",
    beds: 3,
    baths: 1,
    area: null,
    type: "Résidentiel",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "13",
    city: "Blainville",
    price: 549999,
    status: "Prix en baisse",
    beds: 4,
    baths: 2,
    area: null,
    type: "Résidentiel",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "14",
    city: "Crabtree",
    price: 569900,
    status: "Prix en baisse",
    beds: 3,
    baths: 2,
    area: null,
    type: "Résidentiel",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop",
     "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "15",
    city: "Laval (Saint-François)",
    price: 569900,
    status: "Nouveau",
    beds: 4,
    baths: 2,
    area: null,
    type: "Résidentiel",
    images: [
      "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "17",
    city: "Montréal (Montréal-Nord)",
    price: 595000,
    status: "Prix en baisse",
    beds: 4,
    baths: 1,
    area: "118.4 m²",
    type: "Résidentiel",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "18",
    city: "Pointe-Calumet",
    price: 624900,
    status: "Prix en baisse",
    beds: 4,
    baths: 2,
    area: null,
    type: "Résidentiel",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "19",
    city: "Terrebonne (Lachenaie)",
    price: 624900,
    status: "Prix en baisse",
    beds: 3,
    baths: 1,
    area: null,
    type: "Résidentiel",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop",
     "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "21",
    city: "Pointe-Claire",
    price: 639000,
    status: "À vendre",
    beds: 4,
    baths: 3,
    area: "149.6 m²",
    type: "Résidentiel",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "22",
    city: "Saint-Lin/Laurentides",
    price: 699000,
    status: "À vendre",
    beds: 3,
    baths: 1,
    area: null,
    type: "Résidentiel",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
     "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "23",
    city: "Varennes",
    price: 699000,
    status: "À vendre",
    beds: 3,
    baths: 2,
    area: null,
    type: "Résidentiel",
    images: [
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop"
    ]
  },
  {
    id: "24",
    city: "Saint-Eustache",
    price: 939900,
    status: "Prix en baisse",
    beds: 3,
    baths: 2,
    area: null,
    type: "Résidentiel",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop"
    ]
  }
];