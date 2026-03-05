import React from 'react';
import './CTA.css';

export default function CTA({ onOpenDocs, onOpenEarlyAccess }) {
    return (
        <section className="cta-section">
            <div className="cta-glow"></div>
            <div className="section-label" style={{ justifyContent: 'center' }}>Early Access</div>
            <h2>Ready to give your<br />agents <span>real boundaries</span>?</h2>
            <p>Join the private beta and deploy AI agents with production-grade financial security.</p>
            <div className="cta-actions">
                <button className="btn-hero" onClick={() => onOpenEarlyAccess('early-access-modal')}>
                    Request Early Access
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>
                <button className="btn-hero-ghost" onClick={() => onOpenDocs('docs-modal')}>Read the Docs</button>
            </div>
        </section>
    );
}
