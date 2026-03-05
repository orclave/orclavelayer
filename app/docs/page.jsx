'use client'

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './Docs.css';

const docContents = {
    quickstart: {
        title: "Quick Start Guide",
        readingTime: "5 min read",
        desc: "Connect your first AI agent to Orclave Layer in under 5 minutes.",
        content: (
            <>
                <div className="doc-h">Step 1 — Install the SDK</div>
                <div className="doc-p">Install the Orclave Layer SDK using npm or yarn:</div>
                <div className="doc-code">npm install @orclave/layer-sdk</div>
                <div className="doc-h">Step 2 — Initialize the Client</div>
                <div className="doc-p">Create a new client with your API key from the dashboard:</div>
                <div className="doc-code">{`import { OrclavLayer } from '@orclave/layer-sdk'

const client = new OrclavLayer({
  apiKey: 'YOUR_API_KEY',
  network: 'mainnet', // or 'testnet'
})`}</div>
                <div className="doc-h">Step 3 — Create an Agent Wallet</div>
                <div className="doc-p">Create a non-custodial wallet for your AI agent:</div>
                <div className="doc-code">{`const wallet = await client.wallets.create({
  name: 'my-trading-agent',
  network: 'ethereum',
})

console.log(wallet.address) // 0x1234...`}</div>
                <div className="doc-h">Step 4 — Set Basic Rules</div>
                <div className="doc-p">Define spending limits before your agent starts operating:</div>
                <div className="doc-code">{`await client.rules.set(wallet.id, {
  maxPerTx: '0.1',   // max 0.1 ETH per transaction
  dailyCap: '1.0',   // max 1 ETH per day
  requireApproval: { above: '0.5' } // human approval above 0.5 ETH
})`}</div>
                <div className="doc-note">✅ Your agent is now connected and protected. Keys never leave your environment — Orclave Layer only enforces rules on signed transactions.</div>
            </>
        )
    },
    sdk: {
        title: "SDK Reference",
        readingTime: "10 min read",
        desc: "Full reference for the Orclave Layer JavaScript/TypeScript SDK.",
        content: (
            <>
                <div className="doc-h">client.wallets</div>
                <div className="doc-code">{`// Create wallet
client.wallets.create({ name, network })

// List wallets
client.wallets.list()

// Get wallet details
client.wallets.get(walletId)

// Get balance
client.wallets.balance(walletId)`}</div>
                <div className="doc-h">client.rules</div>
                <div className="doc-code">{`// Set rules
client.rules.set(walletId, {
  maxPerTx: '1.0',       // ETH
  dailyCap: '5.0',       // ETH
  whitelist: ['0x...'],  // allowed addresses
  blockWeekends: true,   // time-based restriction
  requireApproval: { above: '0.5' }
})

// Get current rules
client.rules.get(walletId)

// Clear all rules
client.rules.clear(walletId)`}</div>
                <div className="doc-h">client.cards</div>
                <div className="doc-code">{`// Issue virtual card
client.cards.issue({
  walletId,
  limit: 100,           // USD
  merchant: 'any',      // or specific MCC
  expiresIn: '30d',
})

// List cards
client.cards.list(walletId)

// Freeze/unfreeze
client.cards.freeze(cardId)
client.cards.unfreeze(cardId)`}</div>
                <div className="doc-h">client.approvals</div>
                <div className="doc-code">{`// List pending approvals
client.approvals.pending()

// Approve transaction
client.approvals.approve(approvalId)

// Reject transaction
client.approvals.reject(approvalId, { reason })`}</div>
                <div className="doc-note">💡 All SDK methods return Promises. Use async/await or .then() chaining.</div>
            </>
        )
    },
    secmodel: {
        title: "Security Model",
        readingTime: "8 min read",
        desc: "How MPC and zero-trust architecture works",
        content: (
            <>
                <div className="doc-p">Orclave Layer is built on a zero-trust, non-custodial architecture. Here's exactly how it works.</div>
                <div className="doc-h">Non-Custodial Design</div>
                <div className="doc-p">Your private keys are generated locally and never transmitted to Orclave Layer servers. We use Multi-Party Computation (MPC) to split key material so no single party — including us — can reconstruct the full key.</div>
                <div className="doc-h">How MPC Works</div>
                <div className="doc-p">When a transaction is initiated by your AI agent:</div>
                <div className="doc-step-row"><div className="doc-step-num">1</div><div className="doc-step-text">Agent creates unsigned transaction and submits to Orclave Layer enforcement layer</div></div>
                <div className="doc-step-row"><div className="doc-step-num">2</div><div className="doc-step-text">Enforcement layer checks all active rules (spending limits, whitelist, time window)</div></div>
                <div className="doc-step-row"><div className="doc-step-num">3</div><div className="doc-step-text">If rules pass, your local key shard co-signs with the distributed MPC protocol</div></div>
                <div className="doc-step-row"><div className="doc-step-num">4</div><div className="doc-step-text">Signed transaction is broadcast to the blockchain</div></div>
                <div className="doc-h">Zero-Trust Principles</div>
                <div className="doc-p">Every request — even from authenticated agents — is verified independently. No session tokens are trusted implicitly. Each transaction must satisfy all active policy rules before execution.</div>
                <div className="doc-note">🛡️ Orclave Layer has never and will never have the ability to move your funds unilaterally. The architecture makes it cryptographically impossible.</div>
            </>
        )
    },
    virtualcards: {
        title: "Virtual Cards",
        readingTime: "4 min read",
        desc: "Issue and manage cards for your agents",
        content: (
            <>
                <div className="doc-p">Issue programmable virtual Visa cards to your AI agents for fiat spending — with full policy control.</div>
                <div className="doc-h">Issuing a Card</div>
                <div className="doc-code">{`const card = await client.cards.issue({
  walletId: 'wal_xxx',
  currency: 'USD',
  limit: 500,            // $500 total limit
  perTransaction: 100,   // max $100 per charge
  merchant: 'any',       // restrict by MCC if needed
  expiresIn: '7d',       // auto-expire in 7 days
  label: 'agent-shopper'
})`}</div>
                <div className="doc-h">Card Controls</div>
                <div className="doc-p">Each card supports the following real-time controls:</div>
                <div className="doc-step-row"><div className="doc-step-num">✓</div><div className="doc-step-text"><strong style={{ color: 'var(--text)' }}>Spending Limit</strong> — total cap across all transactions</div></div>
                <div className="doc-step-row"><div className="doc-step-num">✓</div><div className="doc-step-text"><strong style={{ color: 'var(--text)' }}>Per-Transaction Limit</strong> — max amount per single charge</div></div>
                <div className="doc-step-row"><div className="doc-step-num">✓</div><div className="doc-step-text"><strong style={{ color: 'var(--text)' }}>Merchant Category</strong> — restrict to specific MCC codes</div></div>
                <div className="doc-step-row"><div className="doc-step-num">✓</div><div className="doc-step-text"><strong style={{ color: 'var(--text)' }}>Auto-Expiry</strong> — cards expire automatically after set duration</div></div>
                <div className="doc-step-row"><div className="doc-step-num">✓</div><div className="doc-step-text"><strong style={{ color: 'var(--text)' }}>Instant Freeze</strong> — freeze/unfreeze in real time via API</div></div>
                <div className="doc-h">Monitoring Spend</div>
                <div className="doc-code">{`// Get card transactions
const txns = await client.cards.transactions(card.id)

// Check remaining balance
const balance = await client.cards.balance(card.id)
console.log(balance.remaining) // 350 USD`}</div>
                <div className="doc-note">💳 Cards are backed by Visa infrastructure and accepted wherever Visa is supported — online and in-person.</div>
            </>
        )
    },
    rules: {
        title: "Rules Engine",
        readingTime: "6 min read",
        desc: "Define and enforce spending policies",
        content: (
            <>
                <div className="doc-p">Define granular spending policies enforced at the protocol level — before any transaction is signed.</div>
                <div className="doc-h">Available Rule Types</div>
                <div className="doc-code">{`await client.rules.set(walletId, {
  // Amount limits
  maxPerTx: '0.5',       // max ETH per tx
  dailyCap: '2.0',       // max ETH per day
  monthlyCap: '20.0',    // max ETH per month

  // Address controls
  whitelist: ['0xABC...', '0xDEF...'],  // only these addresses
  blacklist: ['0x123...'],              // never these addresses

  // Time-based
  allowedHours: { from: 9, to: 17 },   // 9am-5pm UTC only
  blockWeekends: true,                  // no weekend txs

  // Token controls
  allowedTokens: ['ETH', 'USDC'],       // only these tokens

  // Approval triggers
  requireApproval: {
    above: '1.0',                       // flag txs above 1 ETH
    newAddress: true,                   // flag new recipients
  }
})`}</div>
                <div className="doc-h">Rule Priority</div>
                <div className="doc-p">Rules are evaluated in order. If any rule fails, the transaction is blocked immediately. Approval triggers pause the transaction pending human review — they do not reject.</div>
                <div className="doc-h">Updating Rules</div>
                <div className="doc-code">{`// Update specific rules (merges with existing)
await client.rules.update(walletId, {
  dailyCap: '5.0'  // only changes dailyCap
})

// Replace all rules
await client.rules.set(walletId, { ... })

// Clear all rules (use with caution)
await client.rules.clear(walletId)`}</div>
                <div className="doc-note">⚠️ Rules are enforced at the protocol layer — they cannot be bypassed by the agent even if the agent's code is compromised.</div>
            </>
        )
    },
    approval: {
        title: "Approval Gates",
        readingTime: "5 min read",
        desc: "Human-in-the-loop transaction controls",
        content: (
            <>
                <div className="doc-p">Put humans in the loop for sensitive transactions — without stopping your agent from operating normally.</div>
                <div className="doc-h">How Approval Gates Work</div>
                <div className="doc-step-row"><div className="doc-step-num">1</div><div className="doc-step-text">Agent initiates a transaction that triggers an approval rule (e.g. above $500)</div></div>
                <div className="doc-step-row"><div className="doc-step-num">2</div><div className="doc-step-text">Transaction is paused — agent is notified it's pending review</div></div>
                <div className="doc-step-row"><div className="doc-step-num">3</div><div className="doc-step-text">Your team receives an alert via webhook, email, or Slack</div></div>
                <div className="doc-step-row"><div className="doc-step-num">4</div><div className="doc-step-text">Reviewer approves or rejects via dashboard or API</div></div>
                <div className="doc-step-row"><div className="doc-step-num">5</div><div className="doc-step-text">If approved, transaction proceeds. If rejected, agent receives an error.</div></div>
                <div className="doc-h">Configuring Alerts</div>
                <div className="doc-code">{`await client.approvals.configure({
  webhook: 'https://your-app.com/approvals',
  email: 'team@yourcompany.com',
  slack: 'https://hooks.slack.com/...',
  timeout: '30m',          // auto-reject after 30 min
  timeoutAction: 'reject'  // or 'approve'
})`}</div>
                <div className="doc-h">Handling Approvals via API</div>
                <div className="doc-code">{`// List pending approvals
const pending = await client.approvals.pending()

// Approve
await client.approvals.approve(pending[0].id, {
  note: 'Verified — authorized trade'
})

// Reject
await client.approvals.reject(pending[0].id, {
  reason: 'Unusual recipient address'
})`}</div>
                <div className="doc-note">🔔 Approval timeouts default to reject for maximum safety. Adjust the timeoutAction setting if your workflow requires auto-approval.</div>
            </>
        )
    }
};

const docIndex = [
    { key: 'quickstart', section: 'Getting Started', title: 'Quick Start Guide', desc: 'Get your first agent connected in 5 minutes', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><polyline points="13 2 13 9 20 9" /></svg> },
    { key: 'sdk', section: 'Getting Started', title: 'SDK Reference', desc: 'Full API and SDK documentation', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg> },
    { key: 'secmodel', section: 'Getting Started', title: 'Security Model', desc: 'How MPC and zero-trust architecture works', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
    { key: 'virtualcards', section: 'Guides', title: 'Virtual Cards', desc: 'Issue and manage cards for your agents', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg> },
    { key: 'rules', section: 'Guides', title: 'Rules Engine', desc: 'Define and enforce spending policies', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg> },
    { key: 'approval', section: 'Guides', title: 'Approval Gates', desc: 'Human-in-the-loop transaction controls', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
]

export default function DocsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeDoc, setActiveDoc] = useState(null);

    const filteredDocs = docIndex.filter(d => d.title.toLowerCase().includes(searchTerm.toLowerCase()));
    const gettingStartedDocs = filteredDocs.filter(d => d.section === 'Getting Started');
    const guideDocs = filteredDocs.filter(d => d.section === 'Guides');

    return (
        <div className="app-container">
            <Navbar onNavigate={(path) => { window.location.href = path === 'top' ? '/' : `/#${path}` }} onOpenModal={() => { }} />

            <main style={{ minHeight: '80vh', padding: '120px 20px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: '640px', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>

                    {!activeDoc ? (
                        <div id="docs-index">
                            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: '24px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>Documentation</h1>
                            <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px' }}>Everything you need to integrate Orclave Layer.</div>

                            <div style={{ position: 'relative', marginBottom: '24px' }}>
                                <svg style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', width: '15px', height: '15px', stroke: '#4A4845', fill: 'none', strokeWidth: 1.5 }} viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
                                <input
                                    style={{ width: '100%', padding: '12px 14px 12px 40px', background: 'var(--bg3)', border: '1px solid var(--border2)', borderRadius: '10px', color: 'var(--text)', fontSize: '14px', fontFamily: "'DM Sans', sans-serif", outline: 'none' }}
                                    placeholder="Search docs..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>

                            <div id="docs-list-wrap">
                                {gettingStartedDocs.length > 0 && (
                                    <>
                                        <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>Getting Started</div>
                                        {gettingStartedDocs.map(doc => (
                                            <a key={doc.key} className="docs-item" href="#" onClick={(e) => { e.preventDefault(); setActiveDoc(doc.key); }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                        {doc.icon}
                                                    </div>
                                                    <div>
                                                        <div style={{ fontSize: '14px', color: 'var(--text)', fontWeight: 500 }}>{doc.title}</div>
                                                        <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>{doc.desc}</div>
                                                    </div>
                                                </div>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4A4845" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                            </a>
                                        ))}
                                    </>
                                )}

                                {guideDocs.length > 0 && (
                                    <>
                                        <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '24px 0 10px' }}>Guides</div>
                                        {guideDocs.map(doc => (
                                            <a key={doc.key} className="docs-item" href="#" onClick={(e) => { e.preventDefault(); setActiveDoc(doc.key); }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                        {doc.icon}
                                                    </div>
                                                    <div>
                                                        <div style={{ fontSize: '14px', color: 'var(--text)', fontWeight: 500 }}>{doc.title}</div>
                                                        <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>{doc.desc}</div>
                                                    </div>
                                                </div>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4A4845" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                            </a>
                                        ))}
                                    </>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div id="doc-page-view">
                            <button
                                onClick={() => setActiveDoc(null)}
                                style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'none', border: 'none', color: 'var(--gold)', fontSize: '14px', fontFamily: "'DM Sans', sans-serif", cursor: 'pointer', marginBottom: '24px', padding: 0 }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg> Back to Docs
                            </button>
                            <div id="doc-page-body">
                                <div style={{ display: 'inline-block', padding: '4px 12px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '6px', fontSize: '12px', color: 'var(--gold)', fontWeight: 600, marginBottom: '16px' }}>{docContents[activeDoc].readingTime}</div>
                                <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '24px', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.5px', marginBottom: '8px' }}>{docContents[activeDoc].title}</h2>
                                <p className="doc-p" style={{ fontSize: '15px', marginBottom: '24px' }}>{docContents[activeDoc].desc}</p>
                                <div className="doc-content">
                                    {docContents[activeDoc].content}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <Footer onNavigate={(path) => { window.location.href = path === 'top' ? '/' : `/#${path}` }} onOpenModal={() => { }} />
        </div>
    );
}
