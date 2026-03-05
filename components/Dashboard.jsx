import React from 'react';
import './Dashboard.css';

export default function Dashboard({ onLogout }) {
    return (
        <div className="dashboard-layout">
            <aside className="dash-sidebar">
                <div className="dash-logo">
                    <img src="/logo_transparent.png?v=3" alt="Orclave Logo" />
                    <span>Orclave</span>
                </div>
                <nav className="dash-nav">
                    <a href="#/" className="active">Overview</a>
                    <a href="#/">AI Agents</a>
                    <a href="#/">Policies</a>
                    <a href="#/">Audit Logs</a>
                    <a href="#/">Settings</a>
                </nav>
                <div className="dash-bottom">
                    <button className="btn-logout" onClick={onLogout}>Sign Out</button>
                </div>
            </aside>
            <main className="dash-main">
                <header className="dash-header">
                    <h1>Dashboard</h1>
                    <div className="dash-user">
                        <span>User</span>
                        <div className="avatar">U</div>
                    </div>
                </header>
                <div className="dash-content">
                    <div className="stats-grid">
                        <div className="stat-card">
                            <h3>Active Agents</h3>
                            <div className="stat-val">3</div>
                        </div>
                        <div className="stat-card">
                            <h3>Transactions Secured</h3>
                            <div className="stat-val">1,248</div>
                        </div>
                        <div className="stat-card">
                            <h3>Blocked Threats</h3>
                            <div className="stat-val">12</div>
                        </div>
                    </div>

                    <div className="dash-section">
                        <h2>Recent Activity</h2>
                        <div className="activity-list">
                            <div className="activity-item">
                                <div className="activity-icon safe">✓</div>
                                <div className="activity-details">
                                    <p>Agent <strong>TradingBot-Alfa</strong> executed swap on Uniswap.</p>
                                    <span>2 mins ago</span>
                                </div>
                            </div>
                            <div className="activity-item">
                                <div className="activity-icon warn">!</div>
                                <div className="activity-details">
                                    <p>Blocked unauthorized transfer attempt from Unknown Contract.</p>
                                    <span>1 hour ago</span>
                                </div>
                            </div>
                            <div className="activity-item">
                                <div className="activity-icon safe">✓</div>
                                <div className="activity-details">
                                    <p>Daily limit policy updated for <strong>CustomerSupport-AI</strong>.</p>
                                    <span>Yesterday</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
