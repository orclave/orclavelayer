<div align="center">

<img src="public/logo_transparent.png" alt="Orclave Layer" width="80" />

# Orclave Layer

**The programmable spending layer for autonomous AI agents.**

Set limits. Enforce rules. Safeguard assets — without sacrificing agent autonomy.

</div>

---


## Overview

As AI agents begin executing real financial transactions autonomously, there is no infrastructure layer that enforces *your* rules. Orclave Layer sits **between your agent and the blockchain**, enforcing programmable spending policies on every on-chain or off-chain action.

**Your agents keep full autonomy. You keep full control.**

---

## How It Works

Orclave Layer acts as a middleware between your AI agents and any financial endpoint — wallets, virtual cards, or DeFi protocols. Every transaction request from an agent passes through the Orclave Rules Engine before it is signed or broadcast.

```
Your AI Agent → Orclave Layer (Rules Engine) → Blockchain / Payment Network
```

1. **You define the rules** — Set per-transaction limits, daily spend caps, address whitelists, merchant restrictions, and time-based gates from the dashboard.
2. **Your agent requests a transaction** — It sends the action to Orclave's API just like any standard wallet or payment call.
3. **Orclave validates the request** — The Rules Engine checks the action against your active policies in real time.
4. **The transaction is approved or blocked** — Compliant actions execute immediately. Flagged actions are queued for human approval or rejected outright.
5. **Everything is logged** — Every decision, approval, and rejection is written to an immutable audit trail.

---

## Core Capabilities

### 🔐 Non-Custodial Wallets
AI agents can hold and transact on-chain without you handing over your private keys. Orclave issues scoped, policy-bound wallets that expire or revoke automatically.

### 💳 Virtual Cards for Agents
Issue Visa-compatible virtual cards directly to your AI agents. Each card carries its own spending limit, merchant category restrictions, and automatic expiry — purpose-built for autonomous workflows.

### ⚙️ Spending Rules Engine
Define fine-grained policies that enforce themselves:
- Per-transaction and daily spend caps
- Address whitelists and blacklists
- Merchant category restrictions
- Time-based windows (e.g. business hours only)
- Chain-specific restrictions

### ✅ Approval Gates
Flag high-value or unusual transactions before they execute. Your team receives a real-time request to approve or reject — giving you a human checkpoint without blocking your agent's workflow.

### 📋 Full Audit Trail
Every action your agent takes is logged immutably. See the full history of approvals, rejections, amounts, timestamps, and addresses — all in one dashboard.

### 🔗 Native DeFi Integrations
Orclave Layer works across EVM-compatible chains, and major DeFi protocols out of the box. No custom adapters required.

---

## Quick Start Guide

Connect your first AI agent to Orclave Layer in under 5 minutes.

### Step 1 — Install the SDK
Install the Orclave Layer SDK using npm or yarn:
```bash
npm install @orclave/layer-sdk
```

### Step 2 — Initialize the Client
Create a new client with your API key from the dashboard:
```javascript
import { OrclavLayer } from '@orclave/layer-sdk'

const client = new OrclavLayer({
  apiKey: 'YOUR_API_KEY',
  network: 'mainnet', // or 'testnet'
})
```

### Step 3 — Create an Agent Wallet
Create a non-custodial wallet for your AI agent:
```javascript
const wallet = await client.wallets.create({
  name: 'my-trading-agent',
  network: 'ethereum',
})

console.log(wallet.address) // 0x1234...
```

### Step 4 — Set Basic Rules
Define spending limits before your agent starts operating:
```javascript
await client.rules.set(wallet.id, {
  maxPerTx: '0.1',   // max 0.1 ETH per transaction
  dailyCap: '1.0',   // max 1 ETH per day
  requireApproval: { above: '0.5' } // human approval above 0.5 ETH
})
```

> **Note**: Your agent is now connected and protected. Keys never leave your environment — Orclave Layer only enforces rules on signed transactions.

---

## FAQ

**Q: Does my agent need to be rewritten to use Orclave?**  
No. Orclave acts as a drop-in RPC provider or API middleware. Your agent simply routes its existing Web3 transactions or API calls through Orclave instead of directly to the network.

**Q: Do you hold my crypto or fiat?**  
No. For Web3, Orclave uses non-custodial smart accounts where you retain full ownership. For fiat, we partner with licensed banking providers who hold funds while Orclave manages the logic layer.

**Q: What happens if an agent goes rogue?**  
Your predefined rules act as an immutable fail-safe. Even if the agent's LLM hallucinates and attempts to drain the wallet, the Orclave Rules Engine will block the transaction because it violates the maximum transaction limit you configured.

---

## Contact

For partnerships, enterprise enquiries, or early access:
📧 [contact@orclave.com](mailto:contact@orclave.com)

---

<div align="center">
  <sub>Copyright © 2025 Orclave. All rights reserved.</sub>
</div>
