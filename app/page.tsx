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
import { SlidersHorizontal, X } from "lucide-react"
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
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  // Conteo dinámico para el sidebar
  const resultCount = filterCars(cars, searchTerm, filterUsado, filterDuenioDirecto).length

  return (
    <div className="min-h-screen bg-[#ebebeb]">
      {/* feature/navbar + feature/product-search — DEV1: Juan Gallardo */}
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <main className="max-w-[1200px] mx-auto px-3 md:px-4 py-4 md:py-6">
        {/* feature/servicios — DEV2: Juan Montezuma */}
        <Breadcrumb />

        {/* Botón filtros — solo móvil */}
        <div className="flex items-center justify-between mb-3 md:hidden">
          <p className="text-sm text-[#666]">{resultCount} resultados</p>
          <button
            onClick={() => setMobileSidebarOpen(true)}
            className="flex items-center gap-2 text-sm font-medium text-[#3483fa] border border-[#3483fa] px-3 py-1.5 rounded-full"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filtros
          </button>
        </div>

        {/* Drawer de filtros — móvil */}
        {mobileSidebarOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setMobileSidebarOpen(false)}
            />
            {/* Panel lateral */}
            <div className="absolute left-0 top-0 bottom-0 w-[280px] bg-white overflow-y-auto">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#ddd] bg-[#ffe600]">
                <span className="font-semibold text-[#333]">Filtros</span>
                <button onClick={() => setMobileSidebarOpen(false)}>
                  <X className="w-5 h-5 text-[#333]" />
                </button>
              </div>
              <div className="p-4">
                <Sidebar
                  filterUsado={filterUsado}
                  onFilterUsado={(v) => { setFilterUsado(v) }}
                  filterDuenioDirecto={filterDuenioDirecto}
                  onFilterDuenioDirecto={(v) => { setFilterDuenioDirecto(v) }}
                  resultCount={resultCount}
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-6">
          {/* Sidebar — solo desktop */}
          <div className="hidden md:block">
            <Sidebar
              filterUsado={filterUsado}
              onFilterUsado={setFilterUsado}
              filterDuenioDirecto={filterDuenioDirecto}
              onFilterDuenioDirecto={setFilterDuenioDirecto}
              resultCount={resultCount}
            />
          </div>

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
