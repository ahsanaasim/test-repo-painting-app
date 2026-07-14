# ArtVault

Next.js (App Router) marketplace UI for original paintings in Bangladesh.

## Stack

- Next.js 15 + TypeScript
- Tailwind CSS v4
- shadcn/ui (New York style) + lucide-react
- Fira Sans / Fira Code
- Accent `#2563EB`, background `#F8FAFC`

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Demo status variants

Append `?state=` to preview UI states:

- `default` · `empty` · `loading` · `error` · `plan_limit` · `permission_denied`
- Painting detail also supports `unavailable`
- Checkout supports `invalid-address` and `step=1..5`
- Buyer dashboard supports `request-pending`, `approved`, `rejected`

## Routes

| Route | Screen |
|------|--------|
| `/` | Painting catalog |
| `/painting/[id]` | Painting detail |
| `/checkout` | Checkout wizard |
| `/checkout/confirmation` | Order confirmation |
| `/auth/login` | Login (centered card) |
| `/auth/register` | Register (centered card) |
| `/auth/verify-phone` | OTP verification |
| `/auth/guest-checkout` | Guest checkout |
| `/dashboard/buyer` | Buyer order history |
| `/dashboard/seller` | Seller orders & listings |
| `/dashboard/seller/paintings` | Painting management |
| `/settings` | Settings & preferences |
| `/notifications` | Notifications center |
| `/logo-recommendation` | Logo recommendation |
| `/access-denied` | Permission denied |
