import React from 'react';
import './Footer.css';

export default function Footer({ onNavigate, onOpenModal }) {
    return (
        <footer>
            <div>
                <a href="#" className="logo" onClick={(e) => { e.preventDefault(); onNavigate('top'); }}>
                    <img src="/logo_transparent.png?v=3" alt="Orclave Logo" style={{ width: '40px', height: '40px', objectFit: 'contain', flexShrink: 0, marginRight: '-8px' }} />
                    <span className="logo-text">Orclave<span> Layer</span></span>
                </a>
                <div className="footer-copy">© 2025 Orclave Layer. All rights reserved.</div>
            </div>
            <div className="footer-links">
                <a onClick={() => onOpenModal('privacy-modal')}>Privacy</a>
                <a onClick={() => onOpenModal('terms-modal')}>Terms</a>
                <a onClick={() => onNavigate('security')}>Security</a>
                <a onClick={() => onOpenModal('docs-modal')}>Docs</a>
                <a href="https://x.com/OrclaveLayer" target="_blank" rel="noopener noreferrer">Twitter / X</a>
            </div>
        </footer>
    );
}
