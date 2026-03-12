# Clonación MercadoLibre Colombia

Proyecto académico desarrollado para la asignatura **Electiva II** de Ingeniería en Sistemas — Universidad de Pasto, Nariño.

Landing page funcional inspirada en [MercadoLibre Colombia](https://www.mercadolibre.com.co/), construida con **Next.js 16**, **React 19** y **Tailwind CSS**, utilizando **GitFlow** como metodología de trabajo colaborativo.

---

## Equipo de Desarrollo

| Dev | Nombre | Rol | GitHub |
|---|---|---|---|
| DEV1 | Juan Gallardo | Frontend Developer | [@juangallardo19](https://github.com/juangallardo19) |
| DEV2 | Juan Montezuma | Full Stack Developer | [@JuanMR2006](https://github.com/JuanMR2006) |
| DEV3 | Juan Camues | UI/UX & Frontend Dev | [@JuanSCC8](https://github.com/JuanSCC8) |

---

## Funcionalidades

- **Navbar** — Barra de navegación fiel al estilo MercadoLibre con logo, buscador y menú de categorías
- **Buscador de productos** — Búsqueda en tiempo real que filtra la lista de productos dinámicamente
- **Lista de productos** — Grid de tarjetas de carros y camionetas coupé con imagen, precio, año y kilometraje
- **Sidebar de filtros** — Filtros interactivos por condición (usado/nuevo), dueño directo y ubicación por departamento
- **Portafolios del equipo** — Cards con animación hover que redirigen al portafolio individual de cada desarrollador
- **Footer** — Información legal, links y sección del equipo de desarrollo

### Páginas de portafolio individuales

| URL | Desarrollador |
|---|---|
| `/portafolio/juan-gallardo` | Juan Gallardo |
| `/portafolio/juan-montezuma` | Juan Montezuma |
| `/portafolio/juan-camues` | Juan Camues |

---

## Tecnologías utilizadas

- [Next.js 16](https://nextjs.org/) — Framework React con App Router
- [React 19](https://react.dev/) — Biblioteca de interfaces de usuario
- [TypeScript](https://www.typescriptlang.org/) — Tipado estático
- [Tailwind CSS 4](https://tailwindcss.com/) — Utilidades CSS
- [shadcn/ui](https://ui.shadcn.com/) — Componentes de interfaz accesibles
- [Lucide React](https://lucide.dev/) — Íconos
- [Vercel Analytics](https://vercel.com/analytics) — Analíticas de producción

---

## Estructura del proyecto

```
├── app/
│   ├── layout.tsx               # Layout global
│   ├── page.tsx                 # Página principal
│   ├── globals.css
│   └── portafolio/
│       ├── juan-gallardo/       # Portafolio DEV1
│       ├── juan-montezuma/      # Portafolio DEV2
│       └── juan-camues/         # Portafolio DEV3
│
├── components/
│   ├── mercadolibre/
│   │   ├── navbar/
│   │   │   └── Header.tsx       # Navbar + buscador
│   │   ├── product-list/
│   │   │   ├── ProductCard.tsx  # Tarjeta de producto
│   │   │   ├── ProductGrid.tsx  # Grid de productos
│   │   │   └── cars-data.ts     # Datos de productos
│   │   ├── servicios/
│   │   │   ├── Breadcrumb.tsx   # Navegación breadcrumb
│   │   │   └── Sidebar.tsx      # Filtros laterales
│   │   └── footer/
│   │       └── Footer.tsx       # Footer + portafolios
│   └── ui/                      # Componentes shadcn/ui
│
├── public/images/               # Imágenes estáticas
├── styles/globals.css
└── package.json
```

---

## Estructura de ramas (GitFlow)

```
main
└── develop
    ├── feature/navbar                 → DEV1: Juan Gallardo
    ├── feature/product-search         → DEV1: Juan Gallardo
    ├── feature/product-list           → DEV2: Juan Montezuma
    ├── feature/servicios              → DEV2: Juan Montezuma
    ├── feature/dev-portfolio-1        → DEV1: Juan Gallardo
    ├── feature/dev-portfolio-2        → DEV2: Juan Montezuma
    ├── feature/dev-portfolio-3        → DEV3: Juan Camues
    ├── feature/ui-styles              → DEV3: Juan Camues
    ├── feature/js-interactions        → DEV3: Juan Camues
    └── release/v1.0.0
```

Cada funcionalidad se desarrolló en su propia rama y fue integrada a `develop` mediante **Pull Requests** con revisión del equipo.

---

## Instalación y ejecución local

**Requisitos:** Node.js 18+ y pnpm

```bash
# 1. Clonar el repositorio
git clone https://github.com/<usuario>/ClonacionDeMercadoLibre.git
cd ClonacionDeMercadoLibre

# 2. Instalar dependencias
pnpm install

# 3. Ejecutar en modo desarrollo
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

```bash
# Construir para producción
pnpm build

# Ejecutar build de producción
pnpm start
```

---

## Flujo de trabajo GitFlow aplicado

1. `main` — rama principal estable, solo recibe merges de `release`
2. `develop` — rama de integración continua
3. `feature/*` — cada desarrollador trabaja en su rama independiente
4. **Pull Request** — todo cambio entra por PR con revisión del equipo
5. `release/v1.0.0` — rama de preparación para producción
6. **Merge a main** + etiqueta `v1.0.0`

### Convención de commits

```
feat: agrega nueva funcionalidad
style: cambios de estilos CSS
fix: corrección de errores
chore: configuración y tareas de mantenimiento
```

---

## Despliegue

El proyecto está configurado para desplegarse en **Vercel** o **GitHub Pages**.

Para Vercel, conecta el repositorio y el despliegue es automático desde `main`.

---

## Licencia

Proyecto académico — Universidad de Pasto, Nariño · 2026
