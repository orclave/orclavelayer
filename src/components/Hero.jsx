import React from 'react';
import './Hero.css';

export default function Hero({ onOpenDemo, onOpenEarlyAccess }) {
    return (
        <section className="hero">
            <div className="hero-grid"></div>
            <div className="hero-glow"></div>
            <div className="hero-inner">
                <div className="badge fade-up">
                    <div className="badge-dot"></div>Now in Private Beta · Non-Custodial
                </div>
                <h1 className="fade-up delay-1">
                    The Security Layer<br />Your <em>AI Agents</em><br />Actually Need
                </h1>
                <p className="hero-sub fade-up delay-2">
                    Orclave Layer is the first non-custodial security infrastructure for autonomous AI agents — managing crypto wallets, virtual cards, spending approvals, and rule enforcement without ever holding your keys.
                </p>
                <div className="hero-actions fade-up delay-3">
                    <button className="btn-hero" onClick={() => onOpenEarlyAccess('early-access-modal')}>
                        Get Early Access
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </button>
                    <button className="btn-hero-ghost" onClick={() => onOpenDemo('demo-modal')}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>
                        Watch Demo
                    </button>
                </div>
                <div className="stats-bar">
                    <div className="stat-item fade-up delay-1"><div className="stat-num">0<span>ms</span></div><div className="stat-label">Key Exposure</div></div>
                    <div className="stat-item fade-up delay-2"><div className="stat-num">100<span>%</span></div><div className="stat-label">Non-Custodial</div></div>
                    <div className="stat-item fade-up delay-3"><div className="stat-num">50<span>+</span></div><div className="stat-label">Rule Conditions</div></div>
                    <div className="stat-item fade-up delay-4"><div className="stat-num">EVM<span>+</span></div><div className="stat-label">Chain Support</div></div>
                </div>
            </div>
        </section>
    );
}
