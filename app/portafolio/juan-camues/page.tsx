// =============================================================
// RAMA: feature/dev-portfolio-3 — DEV3: Juan Camues
// Paleta: verde esmeralda / teal
// =============================================================

import Image from "next/image"
import { ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"

const services = [
  { title: "Diseño de Componentes", desc: "Componentes reutilizables y bien estructurados para aplicaciones web." },
  { title: "Animaciones CSS", desc: "Transiciones y animaciones fluidas que mejoran la experiencia visual." },
  { title: "Implementación Figma", desc: "Conversión fiel de diseños Figma a código HTML/CSS funcional." },
]

const technologies = ["JavaScript", "CSS3", "Figma", "Vue.js", "HTML5", "Git"]

export default function PortafolioCamues() {
  return (
    <div className="min-h-screen bg-[#f0fdf9]">

      {/* ── Hero ── */}
      <div className="bg-gradient-to-br from-[#f0fdf9] via-[#ccfbf1] to-[#99f6e4] py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[#14b8a6] text-sm mb-10 hover:text-[#0f766e] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <div className="w-28 h-28 rounded-2xl overflow-hidden ring-4 ring-white shadow-lg flex-shrink-0">
              <Image
                src="/images/sebastian.jpg"
                alt="Juan Camues"
                width={112}
                height={112}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-[#14b8a6] text-xs font-bold uppercase tracking-widest mb-1">Portafolio</p>
              <h1 className="text-3xl font-bold text-[#0f766e] mb-1">Juan Camues</h1>
              <p className="text-[#14b8a6] text-base mb-2">UI/UX & Frontend Dev</p>
              <p className="text-[#888] text-sm">Pasto, Nariño — Colombia</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">

        {/* ── Descripción ── */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-[#99f6e4]">
          <h2 className="text-[#14b8a6] text-xs font-bold uppercase tracking-widest mb-3">Sobre mí</h2>
          <p className="text-[#555] text-sm leading-relaxed">
            Soy estudiante de ingeniería en sistemas de Pasto, Nariño, con pasión por el diseño visual
            y el desarrollo frontend. Me especializo en crear interfaces atractivas con animaciones CSS
            y en convertir prototipos de Figma en productos web reales y funcionales.
          </p>
        </section>

        {/* ── Servicios ── */}
        <section>
          <h2 className="text-[#14b8a6] text-xs font-bold uppercase tracking-widest mb-4">Servicios ofrecidos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-5 shadow-sm border border-[#99f6e4]">
                <div className="w-8 h-8 bg-[#ccfbf1] rounded-lg mb-3" />
                <h3 className="text-[#0f766e] font-semibold text-sm mb-1">{s.title}</h3>
                <p className="text-[#888] text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Tecnologías ── */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-[#99f6e4]">
          <h2 className="text-[#14b8a6] text-xs font-bold uppercase tracking-widest mb-4">Tecnologías</h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map((t) => (
              <span
                key={t}
                className="bg-[#ccfbf1] text-[#0f766e] text-xs font-medium px-3 py-1.5 rounded-full border border-[#99f6e4]"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* ── GitHub ── */}
        <section className="bg-[#14b8a6] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white/70 text-xs mb-1">Encuéntrame en GitHub</p>
            <p className="text-white font-semibold text-sm">github.com/JuanSCC8</p>
          </div>
          <a
            href="https://github.com/JuanSCC8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#14b8a6] text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-[#f0fdf9] transition-colors flex-shrink-0"
          >
            <ExternalLink className="w-4 h-4" />
            Ver perfil
          </a>
        </section>

      </div>
    </div>
  )
}
