# IAmantum — Landing Page

Proyecto Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Primeros pasos

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Antes de publicar, reemplaza estos placeholders

1. **WhatsApp y email de contacto**
   - `src/components/Cta.tsx` → link de WhatsApp (`wa.me/000000000000`) y el mailto.
   - `src/components/Footer.tsx` → email y número de WhatsApp en el pie de página.
2. **Dominio real** una vez lo compres (ej. iamantum.com), actualízalo en `src/app/layout.tsx` (metadata) si agregas Open Graph/canonical más adelante.
3. **Logo**: el ícono en `public/logo-icon.png` fue recortado automáticamente de tu brandboard. Si tienes el archivo original en SVG o PNG transparente de alta resolución, reemplázalo ahí para mejor nitidez.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS — colores de marca en `tailwind.config.ts` (`brand.blue #007BFF`, `brand.cyan #00BFFF`, `brand.slate #36454F`)
- Tipografía: Space Grotesk (títulos) + Inter (texto), vía Google Fonts

## Publicar (Vercel)

1. Sube este proyecto a un repo de GitHub.
2. En vercel.com, "New Project" → importa el repo → Deploy.
3. Conecta tu dominio propio en Vercel → Settings → Domains.

## Seguir iterando con Claude Code

Desde la carpeta del proyecto, corre `claude` y pídele cambios en lenguaje natural, por ejemplo:
"Agrega una sección de testimonios cuando tenga clientes" o "Cambia el hero para que tenga un video de fondo".
