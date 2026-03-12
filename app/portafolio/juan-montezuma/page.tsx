// =============================================================
// RAMA: feature/dev-portfolio-2 — DEV2: Juan Montezuma
// Paleta: naranja y tonos cálidos
// =============================================================

import Image from "next/image"
import { ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"

const services = [
  { title: "Backend Development", desc: "APIs robustas y escalables con Node.js y Express." },
  { title: "Bases de Datos", desc: "Diseño e implementación de bases de datos relacionales y no relacionales." },
  { title: "Full Stack", desc: "Aplicaciones completas integrando frontend React con backend Node.js." },
]

const technologies = ["Node.js", "React", "PostgreSQL", "Python", "Express", "Git"]

export default function PortafolioMontezuma() {
  return (
    <div className="min-h-screen bg-[#fff7ed]">

      {/* ── Hero ── */}
      <div className="bg-gradient-to-br from-[#fff7ed] via-[#ffedd5] to-[#fed7aa] py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[#ea580c] text-sm mb-10 hover:text-[#c2410c] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <div className="w-28 h-28 rounded-2xl overflow-hidden ring-4 ring-white shadow-lg flex-shrink-0">
              <Image
                src="/images/juan-jose.jpg"
                alt="Juan Montezuma"
                width={112}
                height={112}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-[#ea580c] text-xs font-bold uppercase tracking-widest mb-1">Portafolio</p>
              <h1 className="text-3xl font-bold text-[#9a3412] mb-1">Juan Montezuma</h1>
              <p className="text-[#ea580c] text-base mb-2">Full Stack Developer</p>
              <p className="text-[#888] text-sm">Pasto, Nariño — Colombia</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">

        {/* ── Descripción ── */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-[#fed7aa]">
          <h2 className="text-[#ea580c] text-xs font-bold uppercase tracking-widest mb-3">Sobre mí</h2>
          <p className="text-[#555] text-sm leading-relaxed">
            Soy estudiante de ingeniería en sistemas de Pasto, Nariño, con enfoque en el desarrollo fullstack.
            Me apasiona construir aplicaciones completas, desde el diseño de la base de datos hasta la
            interfaz final. Busco siempre soluciones eficientes y código limpio y mantenible.
          </p>
        </section>

        {/* ── Servicios ── */}
        <section>
          <h2 className="text-[#ea580c] text-xs font-bold uppercase tracking-widest mb-4">Servicios ofrecidos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-5 shadow-sm border border-[#fed7aa]">
                <div className="w-8 h-8 bg-[#ffedd5] rounded-lg mb-3" />
                <h3 className="text-[#9a3412] font-semibold text-sm mb-1">{s.title}</h3>
                <p className="text-[#888] text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Tecnologías ── */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-[#fed7aa]">
          <h2 className="text-[#ea580c] text-xs font-bold uppercase tracking-widest mb-4">Tecnologías</h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map((t) => (
              <span
                key={t}
                className="bg-[#ffedd5] text-[#c2410c] text-xs font-medium px-3 py-1.5 rounded-full border border-[#fed7aa]"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* ── GitHub ── */}
        <section className="bg-[#f97316] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white/70 text-xs mb-1">Encuéntrame en GitHub</p>
            <p className="text-white font-semibold text-sm">github.com/JuanMR2006</p>
          </div>
          <a
            href="https://github.com/JuanMR2006"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#f97316] text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-[#fff7ed] transition-colors flex-shrink-0"
          >
            <ExternalLink className="w-4 h-4" />
            Ver perfil
          </a>
        </section>

      </div>
    </div>
  )
}
