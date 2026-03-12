// =============================================================
// RAMA: feature/product-list — DEV2: Juan Montezuma
// Datos de carros: fuente única compartida entre ProductGrid y page.tsx
// isUsed: true = carro de segunda   |   isDuenioDirecto: true = sin concesionario
// =============================================================

export interface Car {
  id: number
  image: string
  title: string
  seller?: string
  isVerified?: boolean
  price: string
  year: number
  km: string
  location: string
  isUsed: boolean
  isDuenioDirecto: boolean
}

export const cars: Car[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop",
    title: "Dodge Charger 2.5 At 4x2",
    price: "110.000.000",
    year: 1971,
    km: "1",
    location: "Envigado - Antioquia",
    isUsed: true,
    isDuenioDirecto: true,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop",
    title: "Ford Mustang Gt Mustang Gt",
    seller: "Autoland",
    isVerified: true,
    price: "279.990.000",
    year: 2025,
    km: "0",
    location: "Medellín - Antioquia",
    isUsed: false,
    isDuenioDirecto: false,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop",
    title: "Bmw M240i Coupe 3.0",
    seller: "RR AUTOS_",
    isVerified: true,
    price: "132.900.000",
    year: 2018,
    km: "57.470",
    location: "Medellín - Antioquia",
    isUsed: true,
    isDuenioDirecto: false,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=600&h=400&fit=crop",
    title: "Bmw Serie 4 2.0 430i F32 Coupe",
    price: "186.900.000",
    year: 2023,
    km: "18.500",
    location: "Medellín - Antioquia",
    isUsed: true,
    isDuenioDirecto: true,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
    title: "Porsche Boxster 3.4 Spyder",
    price: "278.000.000",
    year: 2011,
    km: "45.000",
    location: "Medellín - Antioquia",
    isUsed: true,
    isDuenioDirecto: false,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    title: "Mazda Miata 2.0 Mx5 Grand Touring",
    seller: "Rafautos",
    isVerified: true,
    price: "114.900.000",
    year: 2020,
    km: "65.000",
    location: "Medellín - Antioquia",
    isUsed: true,
    isDuenioDirecto: false,
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&h=400&fit=crop",
    title: "Audi A5 Sportback 2.0 TFSI Quattro",
    price: "165.000.000",
    year: 2021,
    km: "28.000",
    location: "Bogotá D.C.",
    isUsed: true,
    isDuenioDirecto: true,
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&h=400&fit=crop",
    title: "Mercedes-Benz C300 Coupe 2.0 AMG Line",
    price: "215.000.000",
    year: 2022,
    km: "15.000",
    location: "Bogotá D.C.",
    isUsed: true,
    isDuenioDirecto: false,
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop",
    title: "Chevrolet Camaro SS 6.2 V8 At",
    price: "190.000.000",
    year: 2020,
    km: "42.000",
    location: "Cali - Valle Del Cauca",
    isUsed: true,
    isDuenioDirecto: true,
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&h=400&fit=crop",
    title: "Toyota GR86 2.4 At Coupe",
    price: "145.000.000",
    year: 2023,
    km: "5.200",
    location: "Bogotá D.C.",
    isUsed: true,
    isDuenioDirecto: false,
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1541348263662-e068662d82af?w=600&h=400&fit=crop",
    title: "Hyundai Veloster N 2.0 Turbo At",
    price: "98.500.000",
    year: 2019,
    km: "55.000",
    location: "Medellín - Antioquia",
    isUsed: true,
    isDuenioDirecto: true,
  },
]

export function filterCars(
  data: Car[],
  searchTerm: string,
  filterUsado: boolean,
  filterDuenioDirecto: boolean
): Car[] {
  return data.filter((car) => {
    if (searchTerm && !car.title.toLowerCase().includes(searchTerm.toLowerCase())) return false
    if (filterUsado && !car.isUsed) return false
    if (filterDuenioDirecto && !car.isDuenioDirecto) return false
    return true
  })
}