import React from 'react';
import './Pricing.css';

export default function Pricing({ onOpenEarlyAccess }) {
    return (
        <section id="pricing" className="pricing-section">
            <div className="container">
                <div className="section-label fade-up">Pricing Plans</div>
                <h2 className="section-title fade-up delay-1">Security that scales with you</h2>
                <div className="section-sub fade-up delay-2">
                    Start enforcing rules on your AI agents immediately. Upgrade when your transaction volume grows.
                </div>

                <div className="pricing-grid fade-up delay-3">
                    <div className="pricing-card">
                        <div className="pricing-header">
                            <h3>Developer</h3>
                            <div className="price">Free</div>
                            <p>Perfect for testing AI agents locally and in sandboxes.</p>
                        </div>
                        <ul className="pricing-features">
                            <li>Up to 3 Active Agents</li>
                            <li>100 Transactions / month</li>
                            <li>Basic Rules Engine</li>
                            <li>Community Support</li>
                        </ul>
                        <button className="btn-pricing btn-outline" onClick={() => onOpenEarlyAccess('early-access-modal')}>Start for free</button>
                    </div>

                    <div className="pricing-card popular">
                        <div className="popular-badge">Most Popular</div>
                        <div className="pricing-header">
                            <h3>Pro</h3>
                            <div className="price">$49<span>/mo</span></div>
                            <p>For independent developers deploying agents to mainnet.</p>
                        </div>
                        <ul className="pricing-features">
                            <li>Unlimited Active Agents</li>
                            <li>Unlimited Transactions</li>
                            <li>Advanced Approval Gates</li>
                            <li>Virtual Card Issuance (Up to 5)</li>
                            <li>Priority Email Support</li>
                        </ul>
                        <button className="btn-pricing btn-solid" onClick={() => onOpenEarlyAccess('early-access-modal')}>Upgrade to Pro</button>
                    </div>

                    <div className="pricing-card">
                        <div className="pricing-header">
                            <h3>Enterprise</h3>
                            <div className="price">Custom</div>
                            <p>For teams requiring custom SLAs, compliance, and large-scale deployments.</p>
                        </div>
                        <ul className="pricing-features">
                            <li>Custom Transaction Limits</li>
                            <li>Unlimited Virtual Cards</li>
                            <li>Dedicated Success Manager</li>
                            <li>SOC 2 Compliance Reports</li>
                            <li>On-Prem / VPC Deployment Options</li>
                        </ul>
                        <button className="btn-pricing btn-outline" onClick={() => onOpenEarlyAccess('early-access-modal')}>Contact Sales</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
