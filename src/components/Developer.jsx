import React from 'react';
import './Developer.css';

export default function Developer() {
    return (
        <section id="developer" className="developer-section">
            <div className="container">
                <div className="section-label fade-up">Developer Experience</div>
                <h2 className="section-title fade-up delay-1">Built for rapid integration</h2>
                <div className="section-sub fade-up delay-2">
                    Connect your AI agents to Orclave Layer in under 60 seconds. Our infrastructure supports any execution environment.
                </div>

                <div className="dev-grid fade-up delay-3">
                    <div className="dev-card">
                        <div className="dev-icon">⌘</div>
                        <h3>MCP Server</h3>
                        <p>Native Model Context Protocol server for Claude Desktop. Enforce rules directly from your local AI workflows without writing integration code.</p>
                    </div>
                    <div className="dev-card">
                        <div className="dev-icon">{"{ }"}</div>
                        <h3>REST API</h3>
                        <p>Universal access for any programming language. Manage wallets, generate virtual cards, and approve transactions programmatically.</p>
                    </div>
                    <div className="dev-card">
                        <div className="dev-icon">{"</>"}</div>
                        <h3>Native SDKs</h3>
                        <p>Drop-in libraries for TypeScript and Python. Complete with type safety, automatic retries, and comprehensive error handling.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
