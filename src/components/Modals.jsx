import React from 'react';
import { supabase } from '../lib/supabase';
import './Modals.css';
import './Modals.css';

export default function Modals({ activeModal, onClose, onSwitchModal, onLogin }) {
    if (!activeModal) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div className={`modal-overlay ${activeModal ? 'open' : ''}`} onClick={handleOverlayClick}>
            {activeModal === 'early-access-modal' && (
                <EarlyAccessModal onClose={onClose} onSwitch={() => onSwitchModal('signin-modal')} />
            )}
            {activeModal === 'signin-modal' && (
                <SignInModal onClose={onClose} onSwitch={() => onSwitchModal('early-access-modal')} onLogin={onLogin} />
            )}
            {activeModal === 'privacy-modal' && <PrivacyModal onClose={onClose} />}
            {activeModal === 'terms-modal' && <TermsModal onClose={onClose} />}
        </div>
    );
}

function EarlyAccessModal({ onClose, onSwitch }) {
    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form fields here ideally
        setSubmitted(true);
    };

    return (
        <div className="modal">
            <button className="modal-close" onClick={onClose}>✕</button>
            <div className="modal-logo">
                <img src="/logo_transparent.png?v=3" alt="Orclave Logo" style={{ width: '40px', height: '40px', objectFit: 'contain', flexShrink: 0, marginRight: '-8px' }} />
                <span className="logo-text">Orclave<span> Layer</span></span>
            </div>

            {!submitted ? (
                <div id="ea-form-wrap">
                    <div className="modal-title">Request Early Access</div>
                    <div className="modal-sub">Join the waitlist for the private beta.</div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Full Name</label>
                            <input type="text" className="form-input" placeholder="Your name" required />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Work Email</label>
                            <input type="email" className="form-input" placeholder="you@company.com" required />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Use Case</label>
                            <select className="form-select">
                                <option value="">Select use case</option>
                                <option>DeFi Automation</option>
                                <option>AI Trading Agents</option>
                                <option>Multi-Agent Workflows</option>
                                <option>Enterprise AI Ops</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Company / Project</label>
                            <input type="text" className="form-input" placeholder="Company name" />
                        </div>
                        <button type="submit" className="btn-submit">Join the Waitlist →</button>
                    </form>
                    <div className="modal-footer-text">Already have an account? <a onClick={onSwitch}>Sign in</a></div>
                </div>
            ) : (
                <div id="ea-success-wrap">
                    <div className="success-state">
                        <div className="success-icon">
                            <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                        </div>
                        <div className="success-title">You're on the list! 🎉</div>
                        <div className="success-sub">We'll send you an invite when your spot is ready.</div>
                        <button className="btn-submit" style={{ marginTop: '28px' }} onClick={onClose}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

function SignInModal({ onClose, onSwitch, onLogin }) {
    const [isConnecting, setIsConnecting] = React.useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsConnecting('email');
        setTimeout(() => {
            if (onLogin) onLogin();
        }, 1000);
    };

    const handleSocialLogin = async (provider) => {
        setIsConnecting(provider);
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: provider,
                options: {
                    redirectTo: window.location.origin
                }
            });
            if (error) throw error;
            // The redirect handles the actual login state transition once it bounces back
        } catch (error) {
            console.error('Error logging in:', error.message);
            alert(`Failed to connect with ${provider}: ${error.message}`);
            setIsConnecting(null);
        }
    };

    return (
        <div className="modal">
            <button className="modal-close" onClick={onClose}>✕</button>
            <div className="modal-logo">
                <img src="/logo_transparent.png?v=3" alt="Orclave Logo" style={{ width: '40px', height: '40px', objectFit: 'contain', flexShrink: 0, marginRight: '-8px' }} />
                <span className="logo-text">Orclave<span> Layer</span></span>
            </div>
            <div className="modal-title">Welcome back</div>
            <div className="modal-sub">Sign in to your dashboard.</div>

            <button className="btn-social" onClick={() => handleSocialLogin('google')} disabled={isConnecting !== null}>
                {isConnecting === 'google' ? 'Connecting...' : (
                    <>
                        <svg width="18" height="18" viewBox="0 0 48 48">
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                        </svg>Continue with Google
                    </>
                )}
            </button>
            <button className="btn-social" onClick={() => handleSocialLogin('github')} disabled={isConnecting !== null}>
                {isConnecting === 'github' ? 'Connecting...' : (
                    <>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#aaa">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>Continue with GitHub
                    </>
                )}
            </button>

            <div className="modal-divider"><span>or continue with email</span></div>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-input" placeholder="you@company.com" required />
                </div>
                <div className="form-group">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-input" placeholder="••••••••" required />
                </div>
                <button type="submit" className="btn-submit" disabled={isConnecting !== null}>
                    {isConnecting === 'email' ? 'Signing In...' : 'Sign In →'}
                </button>
            </form>
            <div className="modal-footer-text">Don't have an account? <a onClick={onSwitch}>Request access</a></div>
        </div>
    );
}

function PrivacyModal({ onClose }) {
    return (
        <div className="modal" style={{ maxWidth: '580px' }}>
            <button className="modal-close" onClick={onClose}>✕</button>
            <div className="modal-title">Privacy Policy</div>
            <div className="modal-sub">Last updated: January 2025</div>
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
            <button className="btn-submit" style={{ marginTop: '20px' }} onClick={onClose}>Close</button>
        </div>
    );
}

function TermsModal({ onClose }) {
    return (
        <div className="modal" style={{ maxWidth: '580px' }}>
            <button className="modal-close" onClick={onClose}>✕</button>
            <div className="modal-title">Terms of Service</div>
            <div className="modal-sub">Last updated: January 2025</div>
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
            <div className="doc-p">During the private beta, services are provided "as is." We reserve the right to modify, suspend, or discontinue any feature with reasonable notice.</div>
            <div className="doc-h">7. Contact</div>
            <div className="doc-p">For legal inquiries: <span style={{ color: 'var(--gold)' }}>legal@orclave.com</span></div>
            <button className="btn-submit" style={{ marginTop: '20px' }} onClick={onClose}>Close</button>
        </div>
    )
}
