// =============================================================
// RAMA: feature/dev-portfolio-1 — DEV1: Juan Gallardo
// Paleta: blanco, morado pastel, azul pastel
// =============================================================

import Image from "next/image"
import { ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"

const services = [
  { title: "Desarrollo Web", desc: "Construcción de aplicaciones web modernas con React y Next.js." },
  { title: "Diseño UI/UX", desc: "Interfaces intuitivas y responsivas adaptadas a cualquier dispositivo." },
  { title: "Maquetación CSS", desc: "Estilos precisos con Tailwind CSS y animaciones fluidas." },
]

const technologies = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Git", "Figma"]

export default function PortafolioGallardo() {
  return (
    <div className="min-h-screen bg-[#f5f3ff]">

      {/* ── Hero ── */}
      <div className="bg-gradient-to-br from-[#ede9f6] via-[#e0d9f7] to-[#dbeafe] py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[#8b7fd4] text-sm mb-10 hover:text-[#5b4fcf] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <div className="w-28 h-28 rounded-2xl overflow-hidden ring-4 ring-white shadow-lg flex-shrink-0">
              <Image
                src="/images/juan-pablo.jpg"
                alt="Juan Gallardo"
                width={112}
                height={112}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-[#8b7fd4] text-xs font-bold uppercase tracking-widest mb-1">Portafolio</p>
              <h1 className="text-3xl font-bold text-[#3d3490] mb-1">Juan Gallardo</h1>
              <p className="text-[#7c6fcd] text-base mb-2">Frontend Developer</p>
              <p className="text-[#888] text-sm">Pasto, Nariño — Colombia</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">

        {/* ── Descripción ── */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8e4f3]">
          <h2 className="text-[#5b4fcf] text-xs font-bold uppercase tracking-widest mb-3">Sobre mí</h2>
          <p className="text-[#555] text-sm leading-relaxed">
            Soy estudiante de ingeniería en sistemas de Pasto, Nariño, apasionado por el desarrollo frontend.
            Me enfoco en construir interfaces modernas, limpias y accesibles usando React y Next.js.
            Disfruto transformar diseños en código funcional y siempre busco mejorar la experiencia del usuario.
          </p>
        </section>

        {/* ── Servicios ── */}
        <section>
          <h2 className="text-[#5b4fcf] text-xs font-bold uppercase tracking-widest mb-4">Servicios ofrecidos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-5 shadow-sm border border-[#e8e4f3]">
                <div className="w-8 h-8 bg-[#ede9f6] rounded-lg mb-3" />
                <h3 className="text-[#3d3490] font-semibold text-sm mb-1">{s.title}</h3>
                <p className="text-[#888] text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Tecnologías ── */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8e4f3]">
          <h2 className="text-[#5b4fcf] text-xs font-bold uppercase tracking-widest mb-4">Tecnologías</h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map((t) => (
              <span
                key={t}
                className="bg-[#ede9f6] text-[#5b4fcf] text-xs font-medium px-3 py-1.5 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* ── GitHub ── */}
        <section className="bg-[#5b4fcf] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white/70 text-xs mb-1">Encuéntrame en GitHub</p>
            <p className="text-white font-semibold text-sm">github.com/juangallardo19</p>
          </div>
          <a
            href="https://github.com/juangallardo19"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#5b4fcf] text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-[#f5f3ff] transition-colors flex-shrink-0"
          >
            <ExternalLink className="w-4 h-4" />
            Ver perfil
          </a>
        </section>

      </div>
    </div>
  )
}
