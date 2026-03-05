import React from 'react';
import './Security.css';

export default function Security() {
    return (
        <section id="security">
            <div className="container">
                <div className="fade-up">
                    <div className="section-label">Security First</div>
                    <h2 className="section-title">Built on a foundation<br />of uncompromising trust</h2>
                    <p className="section-sub">Security isn't a feature. It's the architecture.</p>
                </div>
                <div className="trust-grid fade-up delay-1">
                    <div className="trust-card">
                        <div className="trust-card-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div>
                        <div className="trust-card-title">Zero-Trust Architecture</div>
                        <div className="trust-card-desc">Every request is authenticated independently. No implicit trust — not even from your own agents.</div>
                    </div>
                    <div className="trust-card">
                        <div className="trust-card-icon"><svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg></div>
                        <div className="trust-card-title">MPC Key Management</div>
                        <div className="trust-card-desc">Keys never reconstructed in a single location. Cryptographically enforced non-custody.</div>
                    </div>
                    <div className="trust-card">
                        <div className="trust-card-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg></div>
                        <div className="trust-card-title">Open Source Auditable</div>
                        <div className="trust-card-desc">Core rule enforcement engine is open source and independently audited.</div>
                    </div>
                    <div className="trust-card">
                        <div className="trust-card-icon"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg></div>
                        <div className="trust-card-title">Real-Time Monitoring</div>
                        <div className="trust-card-desc">Live dashboards with anomaly detection. Instant alerts on unexpected agent behavior.</div>
                    </div>
                    <div className="trust-card">
                        <div className="trust-card-icon"><svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg></div>
                        <div className="trust-card-title">Multi-Chain Support</div>
                        <div className="trust-card-desc">Full EVM: Ethereum, Base, Arbitrum, Polygon, and more.</div>
                    </div>
                    <div className="trust-card">
                        <div className="trust-card-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
                        <div className="trust-card-title">Team Access Controls</div>
                        <div className="trust-card-desc">Role-based permissions — who can create agents, modify rules, approve transactions.</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
