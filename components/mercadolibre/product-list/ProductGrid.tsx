// =============================================================
// RAMA: feature/product-list — DEV2: Juan Montezuma
// =============================================================

import { cars, filterCars } from "./cars-data"
import ProductCard from "./ProductCard"

interface ProductGridProps {
  searchTerm?: string
  filterUsado?: boolean
  filterDuenioDirecto?: boolean
}

export default function ProductGrid({
  searchTerm = "",
  filterUsado = false,
  filterDuenioDirecto = false,
}: ProductGridProps) {
  const filtered = filterCars(cars, searchTerm, filterUsado, filterDuenioDirecto)

  if (filtered.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-24 text-center">
        <p className="text-4xl mb-4">🔍</p>
        <p className="text-lg font-medium text-[#333] mb-1">Sin resultados</p>
        <p className="text-sm text-[#666]">
          Intenta con otro término de búsqueda o cambia los filtros
        </p>
      </div>
    )
  }

  return (
    <div className="flex-1">
      <div className="grid grid-cols-3 gap-4">
        {filtered.map((car) => (
          <ProductCard
            key={car.id}
            image={car.image}
            title={car.title}
            seller={car.seller}
            isVerified={car.isVerified}
            price={car.price}
            year={car.year}
            km={car.km}
            location={car.location}
          />
        ))}
      </div>
    </div>
  )
}