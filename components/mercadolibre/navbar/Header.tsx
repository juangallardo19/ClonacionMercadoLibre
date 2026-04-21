"use client"

// =============================================================
// RAMA: feature/navbar — DEV1: Juan Gallardo
// RAMA: feature/product-search — DEV1: Juan Gallardo
// =============================================================

import { useState } from "react"
import { Search, ChevronDown, MapPin, Bell, ShoppingCart, Menu, X } from "lucide-react"
import Image from "next/image"

interface HeaderProps {
  searchTerm?: string
  onSearchChange?: (term: string) => void
}

export default function Header({ searchTerm = "", onSearchChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-[#ffe600] w-full">
      <div className="max-w-[1200px] mx-auto px-3 md:px-4">

        {/* ── TOP ROW: Logo | Buscador | Account Links ── */}
        <div className="flex items-center gap-2 md:gap-6 pt-3 pb-3">

          {/* Hamburger — solo móvil */}
          <button
            className="md:hidden flex-shrink-0 p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen
              ? <X className="w-6 h-6 text-[#333]" />
              : <Menu className="w-6 h-6 text-[#333]" />
            }
          </button>

          {/* Logo */}
          <a href="#" className="hover:opacity-80 transition-opacity flex-shrink-0">
            <Image
              src="/images/mercadolibre-logo.png"
              alt="Mercado Libre Logo"
              width={134}
              height={34}
              className="w-[100px] h-auto md:w-[134px]"
              style={{ objectFit: "contain" }}
              priority
            />
          </a>

          {/* ── SEARCH BAR ── */}
          <div className="flex-1">
            <div className="flex shadow-sm">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange?.(e.target.value)}
                placeholder="Buscar productos, marcas y más..."
                className="flex-1 px-3 md:px-4 py-2 md:py-2.5 rounded-l-sm text-sm bg-white border-none outline-none min-w-0"
              />
              {/* Selector categoría — solo desktop */}
              <div className="hidden md:flex items-center px-3 bg-white border-l border-[#e0e0e0]">
                <span className="text-sm text-[#666] whitespace-nowrap">en todo Mercado Libre</span>
                <ChevronDown className="w-4 h-4 ml-1 text-[#666]" />
              </div>
              <button className="bg-white px-3 md:px-4 rounded-r-sm border-l border-[#e0e0e0] hover:bg-[#f5f5f5]">
                <Search className="w-5 h-5 text-[#666]" />
              </button>
            </div>
          </div>

          {/* Links de cuenta — desktop */}
          <div className="hidden md:flex items-center gap-4 text-sm flex-shrink-0">
            <a href="#" className="text-[#333] hover:text-[#2d3277] whitespace-nowrap">Crea tu cuenta</a>
            <a href="#" className="text-[#333] hover:text-[#2d3277]">Ingresa</a>
            <a href="#" className="text-[#333] hover:text-[#2d3277] whitespace-nowrap">Mis compras</a>
            <div className="relative cursor-pointer">
              <Bell className="w-5 h-5 text-[#333]" />
              <span className="absolute -top-1 -right-1 bg-[#e74c3c] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
            </div>
            <div className="relative cursor-pointer">
              <ShoppingCart className="w-5 h-5 text-[#333]" />
              <span className="absolute -top-1 -right-1 text-[10px] font-bold text-[#333]">+9</span>
            </div>
          </div>

          {/* Íconos cuenta — solo móvil */}
          <div className="flex md:hidden items-center gap-3 flex-shrink-0">
            <div className="relative cursor-pointer">
              <Bell className="w-5 h-5 text-[#333]" />
              <span className="absolute -top-1 -right-1 bg-[#e74c3c] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
            </div>
            <div className="relative cursor-pointer">
              <ShoppingCart className="w-5 h-5 text-[#333]" />
              <span className="absolute -top-1 -right-1 text-[10px] font-bold text-[#333]">+9</span>
            </div>
          </div>
        </div>

        {/* ── NAV ROW — solo desktop ── */}
        <div className="hidden md:flex items-center justify-between pb-3 border-t border-[#f0d000] pt-2 text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1 text-[#333] cursor-pointer hover:underline">
              <MapPin className="w-3.5 h-3.5 text-[#555]" />
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] text-[#555]">Ingresa tu</span>
                <span className="text-[11px] font-semibold">ubicación</span>
              </div>
            </div>

            <nav className="flex items-center gap-5">
              <button className="flex items-center gap-1 text-[#333] hover:text-[#2d3277] font-medium">
                Categorías <ChevronDown className="w-4 h-4" />
              </button>
              <a href="#" className="text-[#333] hover:text-[#2d3277]">Ofertas</a>
              <a href="#" className="text-[#333] hover:text-[#2d3277]">Cupones</a>
              <a href="#" className="text-[#333] hover:text-[#2d3277] flex items-center gap-1">
                Supermercado
                <span className="bg-[#00a650] text-white text-[10px] px-1.5 py-0.5 rounded font-bold">NUEVO</span>
              </a>
              <a href="#" className="text-[#333] hover:text-[#2d3277]">Moda</a>
              <a href="#" className="text-[#333] hover:text-[#2d3277]">Vender</a>
              <a href="#" className="text-[#333] hover:text-[#2d3277]">Ayuda / PQR</a>
            </nav>
          </div>
        </div>

        {/* ── MENÚ MÓVIL desplegable ── */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#f0d000] py-3">
            {/* Ubicación */}
            <div className="flex items-center gap-2 text-[#333] py-2 px-1 cursor-pointer hover:bg-[#f0d000]/50 rounded">
              <MapPin className="w-4 h-4 text-[#555]" />
              <span className="text-sm">Ingresa tu ubicación</span>
            </div>

            <nav className="flex flex-col mt-1">
              <button className="flex items-center justify-between text-sm text-[#333] hover:text-[#2d3277] py-2.5 px-1 border-b border-[#f0d000]/60 font-medium">
                Categorías <ChevronDown className="w-4 h-4" />
              </button>
              <a href="#" className="text-sm text-[#333] hover:text-[#2d3277] py-2.5 px-1 border-b border-[#f0d000]/60">Ofertas</a>
              <a href="#" className="text-sm text-[#333] hover:text-[#2d3277] py-2.5 px-1 border-b border-[#f0d000]/60">Cupones</a>
              <a href="#" className="text-sm text-[#333] hover:text-[#2d3277] py-2.5 px-1 border-b border-[#f0d000]/60 flex items-center gap-2">
                Supermercado
                <span className="bg-[#00a650] text-white text-[10px] px-1.5 py-0.5 rounded font-bold">NUEVO</span>
              </a>
              <a href="#" className="text-sm text-[#333] hover:text-[#2d3277] py-2.5 px-1 border-b border-[#f0d000]/60">Moda</a>
              <a href="#" className="text-sm text-[#333] hover:text-[#2d3277] py-2.5 px-1 border-b border-[#f0d000]/60">Vender</a>
              <a href="#" className="text-sm text-[#333] hover:text-[#2d3277] py-2.5 px-1 border-b border-[#f0d000]/60">Ayuda / PQR</a>
              <a href="#" className="text-sm text-[#333] hover:text-[#2d3277] py-2.5 px-1 border-b border-[#f0d000]/60">Crea tu cuenta</a>
              <a href="#" className="text-sm text-[#333] hover:text-[#2d3277] py-2.5 px-1">Ingresa</a>
            </nav>
          </div>
        )}

      </div>
    </header>
  )
}
