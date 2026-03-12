// =============================================================
// RAMA: feature/servicios — DEV2: Juan Montezuma
// Componente: Breadcrumb de navegación por categorías
// =============================================================

import { ChevronRight } from "lucide-react"

export default function Breadcrumb() {
  return (
    <nav className="flex items-center gap-1 text-sm text-[#1a0dab] mb-4">
      <a href="#" className="hover:underline">Carros, Motos y Otros</a>
      <ChevronRight className="w-4 h-4 text-[#666]" />
      <a href="#" className="hover:underline">Carros y Camionetas</a>
      <ChevronRight className="w-4 h-4 text-[#666]" />
      <a href="#" className="hover:underline">Coupé</a>
    </nav>
  )
}
