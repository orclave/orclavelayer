import React from 'react';
import './Navbar.css';

export default function Navbar({ onNavigate, onOpenModal }) {
  return (
    <nav id="main-nav">
      <a href="#" className="logo" onClick={(e) => { e.preventDefault(); onNavigate('top'); }}>
        <img src="/logo_transparent.png?v=3" alt="Orclave Logo" style={{ width: '40px', height: '40px', objectFit: 'contain', flexShrink: 0, marginRight: '-8px' }} />
        <span className="logo-text">Orclave<span> Layer</span></span>
      </a>
      <ul className="nav-links">
        <li><a onClick={() => onNavigate('features')}>Features</a></li>
        <li><a onClick={() => onNavigate('how')}>How It Works</a></li>
        <li><a onClick={() => onNavigate('security')}>Security</a></li>
        <li><a onClick={() => onNavigate('developer')}>Developers</a></li>
        <li><a onClick={() => onNavigate('pricing')}>Pricing</a></li>
        <li><a onClick={() => onOpenModal('docs-modal')}>Docs</a></li>
      </ul>
      <div className="nav-right">
        <button className="btn-outline" onClick={() => onOpenModal('signin-modal')}>Sign In</button>
        <button className="btn-gold" onClick={() => onOpenModal('early-access-modal')}>Get Early Access</button>
      </div>
    </nav>
  );
}
