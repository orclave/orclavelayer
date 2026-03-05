'use client'

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../app/docs/Docs.css';

export default function TermsPage() {
    return (
        <div className="app-container">
            <Navbar onNavigate={(path) => { window.location.href = path === 'top' ? '/' : `/#${path}` }} onOpenModal={() => { }} />

            <main style={{ minHeight: '80vh', padding: '120px 20px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: '640px', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px 36px' }}>
                    <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: '24px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>Terms of Service</h1>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '28px' }}>Last updated: January 2025</div>

                    <div className="doc-h">1. Acceptance of Terms</div>
                    <div className="doc-p">By accessing or using Orclave Layer, you agree to be bound by these Terms of Service. If you do not agree, do not use our services.</div>

                    <div className="doc-h">2. Description of Service</div>
                    <div className="doc-p">Orclave Layer provides a non-custodial security infrastructure layer for AI agents, including wallet policy enforcement, virtual card issuance, and approval gate management.</div>

                    <div className="doc-h">3. Non-Custodial Nature</div>
                    <div className="doc-p">Orclave Layer never takes custody of your digital assets. You retain full ownership and control of your private keys at all times. We enforce rules on transactions but cannot initiate or block transactions unilaterally.</div>

                    <div className="doc-h">4. Acceptable Use</div>
                    <div className="doc-p">You agree not to use Orclave Layer for any illegal activity, market manipulation, money laundering, or violation of applicable financial regulations. Accounts found in violation will be terminated immediately.</div>

                    <div className="doc-h">5. Limitation of Liability</div>
                    <div className="doc-p">Orclave Layer is a rules enforcement tool. We are not liable for losses arising from agent behavior that complies with your defined rules, market volatility, or third-party service failures.</div>

                    <div className="doc-h">6. Beta Services</div>
                    <div className="doc-p">During beta, services are provided "as is." We reserve the right to modify, suspend, or discontinue any feature with reasonable notice.</div>

                    <div className="doc-h">7. Contact</div>
                    <div className="doc-p">For legal inquiries: <span style={{ color: 'var(--gold)' }}>legal@orclave.com</span></div>

                    <div style={{ marginTop: '32px' }}>
                        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--gold)', fontSize: '13px', textDecoration: 'none' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                            Back to home
                        </a>
                    </div>
                </div>
            </main>

            <Footer onNavigate={(path) => { window.location.href = path === 'top' ? '/' : `/#${path}` }} onOpenModal={() => { }} />
        </div>
    );
}
