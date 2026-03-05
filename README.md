# Orclave Layer

> **Security infrastructure for AI Agents** — Non-custodial wallet controls, virtual card issuance, and a programmable spending rules engine.

![Orclave Layer](https://raw.githubusercontent.com/orclave/orclave-layer/main/preview.png)

## What is Orclave Layer?

Orclave Layer sits **between your AI agent and the blockchain**, enforcing your rules on every action. Your agent retains full autonomy, while you retain full control.

- 🔐 **Non-Custodial Wallets** — Agents get on-chain capability without you ever giving up your private keys.
- 💳 **Virtual Cards for AI** — Issue programmable Visa cards with per-card spending limits, merchant restrictions, and automatic expiry.
- ⚙️ **Rules Engine** — Set per-transaction limits, daily caps, address whitelists, and approval gates from a single dashboard.
- ✅ **Approval Gates** — Flag high-risk transactions for manual review before they execute.
- 📋 **Full Audit Trail** — 100% visibility into every action your agents take.

---

## Quick Start

### Prerequisites

- **Node.js** v18+
- **npm** v9+

### Run Locally

```bash
# Clone the repository
git clone https://github.com/orclave/orclave-layer.git
cd orclave-layer

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder, ready to deploy on Vercel, Netlify, or any static host.

---

## Tech Stack

| Layer | Technology |
|--|--|
| Framework | [React](https://react.dev/) + [Vite](https://vitejs.dev/) |
| Styling | Vanilla CSS with CSS Variables |
| Icons | [Lucide React](https://lucide.dev/) |
| Fonts | Syne & DM Sans via Google Fonts |
| Deployment | [Vercel](https://vercel.com/) |

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Top navigation bar
│   ├── Hero.jsx          # Hero / landing section
│   ├── Features.jsx      # Core feature cards
│   ├── HowItWorks.jsx    # Integration steps
│   ├── Security.jsx      # Security architecture section
│   ├── Developer.jsx     # Developer / API section
│   ├── Pricing.jsx       # Pricing plans
│   ├── CTA.jsx           # Call to action
│   ├── Footer.jsx        # Footer
│   ├── Modals.jsx        # Early Access & Sign In modals
│   ├── DemoModal.jsx     # Interactive demo
│   └── DocsModal.jsx     # In-app documentation browser
├── App.jsx               # Main application component
├── main.jsx              # Entry point
└── index.css             # Global styles & CSS variables
```

---

## Deployment

This project is deployed on **Vercel**. Any push to the `main` branch automatically triggers a new deployment.

Live URL: [https://orclave-layer.vercel.app](https://orclave-layer.vercel.app)

---

## Contributing

This is a private project by the Orclave team. For partnerships or enterprise enquiries, please reach out at [contact@orclave.com](mailto:contact@orclave.com).

---

## License

Copyright © 2025 Orclave. All rights reserved.
