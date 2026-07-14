# ArtVault — Original Paintings Marketplace

Next.js (App Router) preview of the Art App using the **Master-Detail Workspace** layout variation and the Sales Intelligence Dashboard design system.

## Stack

- Next.js 15 + React 19 + TypeScript
- Tailwind CSS 4 + shadcn/ui (New York) + lucide-react
- Fira Sans / Fira Code
- Accent `#2563EB`, background `#F8FAFC`

## Layout archetype

Persistent collapsible left sidebar, slim top bar (language / theme / account / notifications), and page content split into a **master list** (left) and **detail inspector** (right). On smaller viewports the inspector opens as a sheet/drawer.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Demo status variants

Append `?state=` to most routes:

`default` · `empty` · `loading` · `error` · `plan_limit` · `permission_denied` · `unavailable` · `invalid-address` · `request-pending` · `approved` · `rejected`

Examples:

- `/` — catalog master-detail
- `/painting/p1` — detail with persistent master list
- `/checkout?step=1` — delivery information
- `/dashboard/buyer` · `/dashboard/seller`
- `/auth/login` · `/auth/register` — centered authentication cards

## Routes

| Route | Screen |
|-------|--------|
| `/` | Painting catalog (master-detail) |
| `/painting/[id]` | Painting detail |
| `/checkout` | Checkout wizard (steps 1–5) |
| `/checkout/confirmation` | Order confirmation |
| `/auth/login` · `/register` · `/verify-phone` · `/guest-checkout` | Auth modals |
| `/dashboard/buyer` · `/dashboard/seller` | Order workspaces |
| `/dashboard/seller/paintings` | Listing management |
| `/settings` · `/notifications` | Preferences & inbox |
| `/logo-recommendation` | Logo recommendation |
| `/access-denied` | Permission denied |

Closes Ops4 AI Build issue #4 preview variation.
