import React from 'react';
import './Features.css';

export default function Features() {
    return (
        <section id="features">
            <div className="container">
                <div className="fade-up">
                    <div className="section-label">Core Features</div>
                    <h2 className="section-title">Everything an AI agent<br />needs to operate securely</h2>
                    <p className="section-sub">Purpose-built primitives that give AI agents financial capability without compromising on control or custody.</p>
                </div>
                <div className="features-layout fade-up delay-1">
                    <div className="feature-card featured">
                        <div className="feature-icon">
                            <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                        </div>
                        <div className="feature-title">Non-Custodial Wallet Layer</div>
                        <div className="feature-desc">Your AI agents get full on-chain capability while your private keys stay with you. Always.</div>
                        <span className="feature-tag">Zero Key Exposure</span>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
                        </div>
                        <div className="feature-title">Virtual Cards for AI</div>
                        <div className="feature-desc">Issue programmable virtual cards with per-card spending limits, merchant restrictions, and automatic expiry.</div>
                        <span className="feature-tag">Visa-Backed</span>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                        </div>
                        <div className="feature-title">Spending Rules Engine</div>
                        <div className="feature-desc">Define granular spending policies enforced at the protocol level — daily caps, whitelists, time-based restrictions.</div>
                        <span className="feature-tag">Protocol-Level</span>
                    </div>
                    <div className="feature-card featured">
                        <div className="feature-icon">
                            <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        </div>
                        <div className="feature-title">Human Approval Gates</div>
                        <div className="feature-desc">Set thresholds that require human sign-off. Large transactions can be flagged and paused instantly.</div>
                        <span className="feature-tag">Human-in-the-Loop</span>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
                        </div>
                        <div className="feature-title">Full Audit Trail</div>
                        <div className="feature-desc">Every action logged immutably on-chain and off-chain with exportable compliance reports.</div>
                        <span className="feature-tag">Immutable Logs</span>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
                        </div>
                        <div className="feature-title">Native DeFi Integrations</div>
                        <div className="feature-desc">Seamless compatibility with major DEXs and lending protocols right out of the box.</div>
                        <span className="feature-tag">Composable</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
