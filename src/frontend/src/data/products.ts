export type ProductCategory =
  | "damas-elegantes"
  | "damas-casuales"
  | "damas-deportivos"
  | "caballeros"
  | "ninos"
  | "ninas";

export interface Product {
  id: number;
  name: string;
  ref: string;
  category: ProductCategory;
  priceUSD: number;
  sizes: string[];
  imageUrl: string;
  description: string;
  available: boolean;
}

export const PRODUCTS: Product[] = [
  // Damas Elegantes (1-7)
  {
    id: 1,
    name: "Tacón Clásico Violeta",
    ref: "DAE-001",
    category: "damas-elegantes",
    priceUSD: 35,
    sizes: ["35", "36", "37", "38", "39", "40"],
    imageUrl:
      "/assets/uploads/img-20260326-wa0191-019d3173-cb2c-73be-8e6d-d1ee69a2f4f8-1.jpg",
    description: "Tacón stiletto de 10 cm, ideal para ocasiones especiales.",
    available: true,
  },
  {
    id: 2,
    name: "Sandalia Strass Dorada",
    ref: "DAE-002",
    category: "damas-elegantes",
    priceUSD: 38,
    sizes: ["35", "36", "37", "38", "39", "40"],
    imageUrl:
      "/assets/uploads/img-20260326-wa0189-019d3173-cb52-76c8-add2-5020a3188613-2.jpg",
    description: "Sandalia con aplicaciones de cristal, perfecta para fiestas.",
    available: true,
  },
  {
    id: 3,
    name: "Pump Satinado Nude",
    ref: "DAE-003",
    category: "damas-elegantes",
    priceUSD: 32,
    sizes: ["35", "36", "37", "38", "39", "40"],
    imageUrl:
      "/assets/uploads/img-20260326-wa0165-019d3173-cd3e-761d-b06f-e92e461674ee-3.jpg",
    description: "Pump de satén suave, combinable con cualquier outfit.",
    available: true,
  },
  {
    id: 4,
    name: "Botín Chelsea Elegante",
    ref: "DAE-004",
    category: "damas-elegantes",
    priceUSD: 42,
    sizes: ["35", "36", "37", "38", "39", "40"],
    imageUrl:
      "/assets/uploads/img-20260326-wa0179_1-019d3173-cd6e-7558-9eec-5b2076274cd4-4.jpg",
    description: "Botín estilo Chelsea con tacón cuadrado de 7 cm.",
    available: true,
  },
  {
    id: 5,
    name: "Stiletto Punta Fina",
    ref: "DAE-005",
    category: "damas-elegantes",
    priceUSD: 36,
    sizes: ["35", "36", "37", "38", "39", "40"],
    imageUrl:
      "/assets/uploads/img-20260326-wa0196-019d3173-ccf6-76fb-afe9-a4fd63b58af3-5.jpg",
    description: "Stiletto con punta fino y tacón aguja de 12 cm.",
    available: true,
  },
  {
    id: 6,
    name: "Sandalia Tira Fina Plateada",
    ref: "DAE-006",
    category: "damas-elegantes",
    priceUSD: 30,
    sizes: ["35", "36", "37", "38", "39", "40"],
    imageUrl:
      "/assets/uploads/img-20260326-wa0179-019d3173-cd6f-73d7-ad77-886007e88e8b-6.jpg",
    description: "Sandalia minimalista de tira fina con hebilla plateada.",
    available: true,
  },
  {
    id: 7,
    name: "Peeptoe Floral",
    ref: "DAE-007",
    category: "damas-elegantes",
    priceUSD: 34,
    sizes: ["35", "36", "37", "38", "39", "40"],
    imageUrl:
      "/assets/uploads/img-20260326-wa0180-019d3173-cdaf-700d-9d17-7c18f2baa641-7.jpg",
    description: "Peeptoe con detalle floral bordado, muy femenino.",
    available: true,
  },
  // Damas Casuales (8-10)
  {
    id: 8,
    name: "Slip-On Cuero Suave",
    ref: "DAC-001",
    category: "damas-casuales",
    priceUSD: 28,
    sizes: ["35", "36", "37", "38", "39", "40"],
    imageUrl:
      "/assets/uploads/img-20260326-wa0174-019d3173-ce90-750b-99ce-8d2074f33d20-8.jpg",
    description: "Mocasín slip-on de cuero suave, cómodo todo el día.",
    available: true,
  },
  {
    id: 9,
    name: "Sneaker Lona Blanca",
    ref: "DAC-002",
    category: "damas-casuales",
    priceUSD: 25,
    sizes: ["35", "36", "37", "38", "39", "40"],
    imageUrl:
      "/assets/uploads/img-20260326-wa0168-019d3173-cebf-71ca-a4fb-3c7a80b85aca-9.jpg",
    description: "Sneaker casual de lona blanca con suela de goma.",
    available: true,
  },
  {
    id: 10,
    name: "Bota Tobillera Casual",
    ref: "DAC-003",
    category: "damas-casuales",
    priceUSD: 33,
    sizes: ["35", "36", "37", "38", "39", "40"],
    imageUrl:
      "/assets/uploads/img-20260326-wa0188-019d3173-ce9c-767f-9017-399bf830312e-10.jpg",
    description: "Botín tobillero con cierre lateral, ideal para el día a día.",
    available: true,
  },
  // Damas Deportivos (11-12)
  {
    id: 11,
    name: "Running Pro Dama",
    ref: "DAD-001",
    category: "damas-deportivos",
    priceUSD: 30,
    sizes: ["35", "36", "37", "38", "39", "40"],
    imageUrl:
      "/assets/uploads/img-20260326-wa0172-019d3173-cf60-7183-8d51-f7e5f3939c31-11.jpg",
    description: "Zapatilla deportiva de alto rendimiento para running.",
    available: true,
  },
  {
    id: 12,
    name: "Training Flex",
    ref: "DAD-002",
    category: "damas-deportivos",
    priceUSD: 27,
    sizes: ["35", "36", "37", "38", "39", "40"],
    imageUrl:
      "/assets/uploads/img-20260326-wa0167-019d3173-cf32-7549-94bf-fd58f0811e47-12.jpg",
    description: "Zapatilla de entrenamiento con suela flexible.",
    available: true,
  },
  // Caballeros (13-15)
  {
    id: 13,
    name: "Oxford Clásico Negro",
    ref: "CAB-001",
    category: "caballeros",
    priceUSD: 40,
    sizes: ["40", "41", "42", "43", "44", "45"],
    imageUrl:
      "/assets/uploads/img-20260326-wa0178-019d3173-cf8c-747b-844d-56fceffc08e0-13.jpg",
    description: "Oxford de cuero genuino, elegante y duradero.",
    available: true,
  },
  {
    id: 14,
    name: "Mocasín Ejecutivo",
    ref: "CAB-002",
    category: "caballeros",
    priceUSD: 38,
    sizes: ["40", "41", "42", "43", "44", "45"],
    imageUrl:
      "/assets/uploads/img-20260326-wa0171-019d3173-cf61-7441-8099-38116b654148-14.jpg",
    description: "Mocasín de cuero para el ambiente ejecutivo y formal.",
    available: true,
  },
  {
    id: 15,
    name: "Sneaker Urban Caballero",
    ref: "CAB-003",
    category: "caballeros",
    priceUSD: 32,
    sizes: ["40", "41", "42", "43", "44", "45"],
    imageUrl:
      "/assets/uploads/img-20260326-wa0195-019d3173-cf2e-7013-9715-ace93af6f62c-15.jpg",
    description: "Sneaker urbano moderno, perfecto para el casual diario.",
    available: true,
  },
  // Niños (16-18)
  {
    id: 16,
    name: "Zapatilla Escolar Niño",
    ref: "NIN-001",
    category: "ninos",
    priceUSD: 18,
    sizes: ["28", "29", "30", "31", "32", "33", "34"],
    imageUrl:
      "/assets/uploads/img-20260326-wa0166-019d3173-cfe3-771f-8047-b27b9edb5eb4-16.jpg",
    description: "Zapatilla resistente para uso escolar y cotidiano.",
    available: true,
  },
  {
    id: 17,
    name: "Deportivo Junior",
    ref: "NIN-002",
    category: "ninos",
    priceUSD: 20,
    sizes: ["28", "29", "30", "31", "32", "33", "34"],
    imageUrl:
      "/assets/uploads/img-20260326-wa0193-019d3173-cfc2-77ce-acfc-832b12217304-17.jpg",
    description: "Zapatilla deportiva para niños activos, cómoda y colorida.",
    available: true,
  },
  {
    id: 18,
    name: "Sandalia Playera Niño",
    ref: "NIN-003",
    category: "ninos",
    priceUSD: 15,
    sizes: ["28", "29", "30", "31", "32", "33", "34"],
    imageUrl:
      "/assets/uploads/img-20260326-wa0192-019d3173-cfe9-73cd-b55f-55d92b91ba6e-18.jpg",
    description: "Sandalia casual de verano para niños, fácil de poner.",
    available: true,
  },
  // Niñas (19-20)
  {
    id: 19,
    name: "Bailarina Princesa",
    ref: "NNA-001",
    category: "ninas",
    priceUSD: 18,
    sizes: ["28", "29", "30", "31", "32", "33", "34"],
    imageUrl:
      "/assets/uploads/img-20260326-wa0175-019d3173-cfd3-756d-b127-b5498766b430-19.jpg",
    description:
      "Bailarina con lazo y brillitos, ideal para ocasiones especiales.",
    available: true,
  },
  {
    id: 20,
    name: "Bota Botita Niña",
    ref: "NNA-002",
    category: "ninas",
    priceUSD: 22,
    sizes: ["28", "29", "30", "31", "32", "33", "34"],
    imageUrl:
      "/assets/uploads/img-20260326-wa0183-019d3173-cfee-76fd-9925-4a4b8a224341-20.jpg",
    description: "Botita casual con detalle de estrella, adorable y cómoda.",
    available: true,
  },
];
