"use client"

// =============================================================
// ESTRUCTURA DE RAMAS (según documento del profe)
// main → develop
//   ├── feature/navbar           → DEV1: Juan Gallardo
//   ├── feature/product-search   → DEV1: Juan Gallardo
//   ├── feature/product-list     → DEV2: Juan Montezuma
//   ├── feature/servicios        → DEV2: Juan Montezuma
//   ├── feature/dev-portfolio
//   │    ├── feature/dev-portfolio-1  → DEV1: Juan Gallardo
//   │    ├── feature/dev-portfolio-2  → DEV2: Juan Montezuma
//   │    └── feature/dev-portfolio-3  → DEV3: Sebastian Camues
//   ├── feature/ui-styles        → DEV3: Sebastian Camues
//   └── feature/js-interactions  → DEV3: Sebastian Camues
// =============================================================

import { useState } from "react"
import Header from "@/components/mercadolibre/navbar/Header"
import Breadcrumb from "@/components/mercadolibre/servicios/Breadcrumb"
import Sidebar from "@/components/mercadolibre/servicios/Sidebar"
import ProductGrid from "@/components/mercadolibre/product-list/ProductGrid"
import Footer from "@/components/mercadolibre/footer/Footer"
import { cars, filterCars } from "@/components/mercadolibre/product-list/cars-data"

export default function Home() {
  // ── Estado compartido de búsqueda y filtros ──────────────────
  const [searchTerm, setSearchTerm] = useState("")
  const [filterUsado, setFilterUsado] = useState(false)
  const [filterDuenioDirecto, setFilterDuenioDirecto] = useState(false)

  // Conteo dinámico para el sidebar
  const resultCount = filterCars(cars, searchTerm, filterUsado, filterDuenioDirecto).length

  return (
    <div className="min-h-screen bg-[#ebebeb]">
      {/* feature/navbar + feature/product-search — DEV1: Juan Gallardo */}
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <main className="max-w-[1200px] mx-auto px-4 py-6">
        {/* feature/servicios — DEV2: Juan Montezuma */}
        <Breadcrumb />

        <div className="flex gap-6">
          {/* feature/servicios + feature/js-interactions */}
          <Sidebar
            filterUsado={filterUsado}
            onFilterUsado={setFilterUsado}
            filterDuenioDirecto={filterDuenioDirecto}
            onFilterDuenioDirecto={setFilterDuenioDirecto}
            resultCount={resultCount}
          />

          {/* feature/product-list — DEV2: Juan Montezuma */}
          <ProductGrid
            searchTerm={searchTerm}
            filterUsado={filterUsado}
            filterDuenioDirecto={filterDuenioDirecto}
          />
        </div>
      </main>

      {/* feature/dev-portfolio + feature/js-interactions */}
      <Footer />
    </div>
  )
}