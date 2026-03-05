'use client'

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../app/docs/Docs.css';

export default function PrivacyPage() {
    return (
        <div className="app-container">
            <Navbar onNavigate={(path) => window.location.href = `/#${path}`} onOpenModal={() => { }} />

            <main style={{ minHeight: '80vh', padding: '120px 20px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: '640px', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px 36px' }}>
                    <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: '24px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>Privacy Policy</h1>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '28px' }}>Last updated: January 2025</div>

                    <div className="doc-h">1. Information We Collect</div>
                    <div className="doc-p">We collect information you provide when creating an account (name, email, company), technical data such as API usage logs, wallet addresses interacted with, and transaction metadata (not private keys — never private keys).</div>

                    <div className="doc-h">2. How We Use Your Information</div>
                    <div className="doc-p">We use collected data to provide and improve our services, enforce spending rules on behalf of your agents, send important security alerts and product updates, and comply with legal obligations.</div>

                    <div className="doc-h">3. Data We Never Collect</div>
                    <div className="doc-p">Orclave Layer is architecturally designed to never have access to your private keys or seed phrases. This is enforced cryptographically — it is not a policy choice, it is a technical guarantee.</div>

                    <div className="doc-h">4. Data Sharing</div>
                    <div className="doc-p">We do not sell your data. We may share anonymized, aggregated usage statistics. We may share data with service providers (cloud infrastructure, fraud detection) under strict data processing agreements.</div>

                    <div className="doc-h">5. Security</div>
                    <div className="doc-p">All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We undergo regular third-party security audits. Our infrastructure is SOC 2 Type II compliant.</div>

                    <div className="doc-h">6. Contact</div>
                    <div className="doc-p">For privacy inquiries: <span style={{ color: 'var(--gold)' }}>privacy@orclave.com</span></div>

                    <div style={{ marginTop: '32px' }}>
                        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--gold)', fontSize: '13px', textDecoration: 'none' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                            Back to home
                        </a>
                    </div>
                </div>
            </main>

            <Footer onNavigate={(path) => window.location.href = `/#${path}`} onOpenModal={() => { }} />
        </div>
    );
}
