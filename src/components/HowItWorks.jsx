import React from 'react';
import './HowItWorks.css';

export default function HowItWorks() {
    return (
        <section id="how" className="how-bg">
            <div className="container">
                <div className="fade-up">
                    <div className="section-label">How It Works</div>
                    <h2 className="section-title">Simple to integrate,<br />impossible to bypass</h2>
                    <p className="section-sub">Orclave Layer sits between your AI agent and the blockchain — enforcing your rules on every action, every time.</p>
                </div>
                <div className="steps-grid fade-up delay-1">
                    <div className="step">
                        <div className="step-num">STEP 01</div>
                        <div className="step-title">Connect Your Agent</div>
                        <div className="step-desc">Integrate via SDK or REST API in minutes. Works with LangChain, AutoGPT, custom agents.</div>
                    </div>
                    <div className="step">
                        <div className="step-num">STEP 02</div>
                        <div className="step-title">Define Your Rules</div>
                        <div className="step-desc">Set spending limits, address whitelists, time windows, and approval thresholds.</div>
                    </div>
                    <div className="step">
                        <div className="step-num">STEP 03</div>
                        <div className="step-title">Agent Operates</div>
                        <div className="step-desc">Your agent runs freely within your boundaries. Every transaction is checked in real time.</div>
                    </div>
                    <div className="step">
                        <div className="step-num">STEP 04</div>
                        <div className="step-title">You Stay in Control</div>
                        <div className="step-desc">Monitor activity, receive alerts, approve edge cases. You hold the keys — always.</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
