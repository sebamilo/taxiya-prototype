
# TaxiYa — Prototipo Next.js (App Router)

**Qué incluye**
- Landing (/)
- Login mock (/login) con selección de rol (pasajero / taxista)
- Dashboards protegidos: /pasajero y /taxista
- API routes: /api/login y /api/logout (cookies httpOnly)
- TailwindCSS + lucide-react (iconos)
- `middleware.ts` para protección básica

## Requisitos
- Node 18+
- pnpm, npm o yarn

## Setup rápido
```bash
npm i
npm run dev
# abre http://localhost:3000
```

> Nota: Este es un login **de demostración**. Para producción integrá un proveedor real (Clerk, Auth.js, Supabase, Firebase) y almacenamiento seguro de sesiones.

## Deploy
- Vercel: Importá el repo y listo.
- Netlify: Build command `npm run build`, publish `./.next`.

_Generado: 2025-08-13T03:46:20.935758Z_


## Deploy en Vercel (paso a paso rápido)
1. Subí este proyecto a un repo en GitHub (crear repo vacío → arrastrar archivos).
2. Entra a vercel.com → **New Project** → **Import Git Repository** → elegí tu repo.
3. Framework detectado: **Next.js** (no toques nada). → Deploy.
4. Al terminar te da una URL tipo `https://taxiya-xxxxx.vercel.app`.
5. Para invitar colaboradores: Settings → Members → Invite by email.

> Tip: Podés renombrar el proyecto y dominio desde Project Settings.
