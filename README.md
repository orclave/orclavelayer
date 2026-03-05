<div align="center">

<img src="public/logo_transparent.png" alt="Orclave Layer" width="80" />

# Orclave Layer

**The programmable spending layer for autonomous AI agents.**

Set limits. Enforce rules. Safeguard assets — without sacrificing agent autonomy.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![Supabase](https://img.shields.io/badge/Auth-Supabase-3ECF8E?style=flat-square&logo=supabase)](https://supabase.com)

</div>

---

## What is Orclave Layer?

As AI agents begin executing real financial transactions autonomously, there is no infrastructure layer that enforces *your* rules. Orclave Layer sits **between your agent and the blockchain**, enforcing programmable spending policies on every on-chain or off-chain action.

**Your agents keep full autonomy. You keep full control.**

---

## Core Features

| Feature | Description |
|---|---|
| 🔐 **Non-Custodial Wallets** | Agents get on-chain capability without you handing over private keys — ever. |
| 💳 **Virtual Cards for AI** | Programmable Visa cards with per-card limits, merchant restrictions, and automatic expiry. |
| ⚙️ **Spending Rules Engine** | Per-transaction limits, daily caps, address whitelists, and time-based restrictions. |
| ✅ **Approval Gates** | Flag high-risk transactions for human review before they execute. |
| 📋 **Full Audit Trail** | 100% visibility into every action your agents take, with tamper-proof logs. |
| 🔗 **Native DeFi Integrations** | Works across EVM chains, Solana, and major DeFi protocols out of the box. |

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Run Locally

```bash
git clone https://github.com/orclave/orclave-layer.git
cd orclave-layer
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
npm start
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) — App Router |
| Auth | [Supabase](https://supabase.com/) — Google & GitHub OAuth |
| Styling | Vanilla CSS with custom design tokens |
| Fonts | Syne & DM Sans via Google Fonts |
| Deployment | [Vercel](https://vercel.com/) |

---

## Project Structure

```
orclave-layer/
├── app/
│   ├── layout.jsx        # Root layout (metadata, fonts)
│   ├── page.jsx          # Landing page + auth state
│   └── globals.css       # Global styles & CSS variables
├── components/
│   ├── Navbar.jsx        # Navigation bar
│   ├── Hero.jsx          # Hero section
│   ├── Features.jsx      # Feature cards grid
│   ├── HowItWorks.jsx    # Integration walkthrough
│   ├── Security.jsx      # Security architecture
│   ├── Developer.jsx     # Developer API section
│   ├── Pricing.jsx       # Pricing plans
│   ├── CTA.jsx           # Call to action
│   ├── Footer.jsx        # Footer
│   ├── Dashboard.jsx     # Authenticated dashboard view
│   ├── Modals.jsx        # Early Access & Sign In modals
│   ├── DemoModal.jsx     # Interactive product demo
│   └── DocsModal.jsx     # In-app documentation browser
├── lib/
│   └── supabase.js       # Supabase auth client
└── public/
    └── logo_transparent.png
```

---

## Authentication

Orclave Layer uses [Supabase Auth](https://supabase.com/auth) for real, production-grade authentication:

- **Google OAuth** — One-click sign in with any Google account
- **GitHub OAuth** — One-click sign in with GitHub
- Session state is managed automatically via `onAuthStateChange`

To configure your own auth, see `.env.example` (coming soon) and set up your own [Supabase project](https://supabase.com).

---

## Deployment

Deployed to **Vercel** on every push to `master`.

**Live:** [https://orclave.vercel.app](https://orclave.vercel.app)

---

## Contact

For partnerships, enterprise enquiries, or early access:
📧 [contact@orclave.com](mailto:contact@orclave.com)

---

<div align="center">
  <sub>Copyright © 2025 Orclave. All rights reserved.</sub>
</div>
