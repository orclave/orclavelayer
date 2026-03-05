import React, { useState, useEffect } from 'react';
import './Demo.css';

export default function DemoModal({ activeModal, onClose }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [demoStep, setDemoStep] = useState(0);

    const demoSteps = [
        { scene: 1, nav: 'overview', label: 'Overview' },
        { scene: 2, nav: 'wallet', label: 'Agent Wallets' },
        { scene: 3, nav: 'cards', label: 'Virtual Cards' },
        { scene: 4, nav: 'rules', label: 'Rules Engine' },
        { scene: 5, nav: 'approvals', label: 'Approval Gates' },
    ];

    useEffect(() => {
        let timer;
        if (isPlaying && activeModal === 'demo-modal') {
            timer = setInterval(() => {
                setDemoStep((prev) => (prev + 1) % demoSteps.length);
            }, 3500);
        } else {
            setDemoStep(0);
            setIsPlaying(false);
        }
        return () => clearInterval(timer);
    }, [isPlaying, activeModal]);

    if (activeModal !== 'demo-modal') return null;

    const currentStep = demoSteps[demoStep];

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div className="modal-overlay open" onClick={handleOverlayClick}>
            <div className="modal video-modal" style={{ maxWidth: '780px' }}>
                <div className="video-header">
                    <div className="video-header-title">Orclave Layer — Live Demo</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        {isPlaying && (
                            <div id="demo-status" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#888' }}>
                                <span style={{ color: '#C9A84C' }}>● </span>{currentStep.label}
                            </div>
                        )}
                        <button className="modal-close" onClick={onClose} style={{ position: 'static' }}>✕</button>
                    </div>
                </div>

                <div style={{ background: '#0A0A0A', padding: 0, position: 'relative', minHeight: '460px', overflow: 'hidden' }}>
                    {/* TOP BAR */}
                    <div style={{ background: '#111', borderBottom: '1px solid #222', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ width: '22px', height: '22px', border: '1.5px solid #C9A84C', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ width: '7px', height: '7px', background: '#C9A84C', borderRadius: '1px', transform: 'rotate(45deg)' }}></div>
                            </div>
                            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '13px', color: '#F0EEE8' }}>
                                Orclave <span style={{ color: '#C9A84C' }}>Layer</span>
                            </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#C9A84C', animation: 'pulse 2s infinite' }}></div>
                            <span style={{ fontSize: '11px', color: '#888' }}>Dashboard</span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', height: '420px' }}>
                        {/* SIDEBAR */}
                        <div style={{ width: '160px', background: '#0D0D0D', borderRight: '1px solid #1A1A1A', padding: '16px 12px', flexShrink: 0 }}>
                            <div style={{ fontSize: '10px', color: '#4A4845', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>Menu</div>
                            {demoSteps.map((step) => (
                                <div key={step.nav} className={`demo-nav-item ${currentStep.nav === step.nav ? 'active-nav' : ''}`}>
                                    {/* simplified icons for brevity, in real app use Lucide */}
                                    ❖ {step.label}
                                </div>
                            ))}
                        </div>

                        {/* MAIN PANEL */}
                        <div style={{ flex: 1, padding: '20px', overflow: 'hidden', position: 'relative' }}>
                            {/* Scene content mapped to current step */}
                            {currentStep.scene === 1 && <Scene1 />}
                            {currentStep.scene === 2 && <Scene2 />}
                            {currentStep.scene === 3 && <Scene3 />}
                            {currentStep.scene === 4 && <Scene4 />}
                            {currentStep.scene === 5 && <Scene5 />}
                        </div>
                    </div>

                    {!isPlaying && (
                        <div
                            style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', cursor: 'pointer' }}
                            onClick={() => setIsPlaying(true)}
                        >
                            <div className="play-btn">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="#000" style={{ marginLeft: '4px' }}><polygon points="5 3 19 12 5 21 5 3" /></svg>
                            </div>
                            <div style={{ fontSize: '14px', color: '#888' }}>Click to watch interactive demo</div>
                        </div>
                    )}
                </div>

                <div style={{ background: '#111', padding: '12px 20px', borderTop: '1px solid #1A1A1A', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ flex: 1, height: '3px', background: '#1A1A1A', borderRadius: '2px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: isPlaying ? `${((demoStep + 1) / demoSteps.length) * 100}%` : '0%', background: '#C9A84C', borderRadius: '2px', transition: 'width 0.3s ease' }}></div>
                    </div>
                    <div style={{ fontSize: '11px', color: '#4A4845', whiteSpace: 'nowrap' }}>
                        {isPlaying ? demoStep + 1 : 0} / {demoSteps.length}
                    </div>
                </div>
            </div>
        </div >
    );
}

function Scene1() {
    return (
        <div className="demo-scene">
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '16px', fontWeight: 700, color: '#F0EEE8', marginBottom: '16px' }}>Good morning, Orclave 👋</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '16px' }}>
                <div className="demo-stat-card"><div style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>Active Agents</div><div style={{ fontFamily: "'Syne', sans-serif", fontSize: '22px', fontWeight: 700, color: '#F0EEE8' }}>3</div></div>
                <div className="demo-stat-card"><div style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>Total Protected</div><div style={{ fontFamily: "'Syne', sans-serif", fontSize: '22px', fontWeight: 700, color: '#C9A84C' }}>12.4 ETH</div></div>
                <div className="demo-stat-card"><div style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>Blocked Txns</div><div style={{ fontFamily: "'Syne', sans-serif", fontSize: '22px', fontWeight: 700, color: '#F0EEE8' }}>7</div></div>
            </div>
            <div style={{ background: '#111', border: '1px solid #1A1A1A', borderRadius: '10px', padding: '14px' }}>
                <div style={{ fontSize: '11px', color: '#888', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Recent Activity</div>
                <div className="demo-tx-row"><div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4CAF50' }}></div><span style={{ fontSize: '12px', color: '#F0EEE8' }}>trading-agent-01</span></div><span style={{ fontSize: '12px', color: '#888' }}>0.08 ETH → Uniswap</span><span style={{ fontSize: '11px', color: '#4CAF50' }}>✓ Allowed</span></div>
                <div className="demo-tx-row"><div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C9A84C' }}></div><span style={{ fontSize: '12px', color: '#F0EEE8' }}>defi-agent-02</span></div><span style={{ fontSize: '12px', color: '#888' }}>1.2 ETH → Unknown</span><span style={{ fontSize: '11px', color: '#C9A84C' }}>⏸ Pending</span></div>
                <div className="demo-tx-row"><div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F44336' }}></div><span style={{ fontSize: '12px', color: '#F0EEE8' }}>arb-agent-03</span></div><span style={{ fontSize: '12px', color: '#888' }}>5.0 ETH → Blacklist</span><span style={{ fontSize: '11px', color: '#F44336' }}>✗ Blocked</span></div>
            </div>
        </div>
    )
}

function Scene2() {
    return (
        <div className="demo-scene">
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '16px', fontWeight: 700, color: '#F0EEE8', marginBottom: '16px' }}>Agent Wallets</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div className="demo-wallet-row">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ width: '32px', height: '32px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>🤖</div><div><div style={{ fontSize: '13px', color: '#F0EEE8', fontWeight: 500 }}>trading-agent-01</div><div style={{ fontSize: '11px', color: '#4A4845' }}>0x1a2b...3c4d</div></div></div>
                    <div style={{ textAlign: 'right' }}><div style={{ fontSize: '13px', color: '#C9A84C', fontWeight: 600 }}>4.2 ETH</div><div style={{ fontSize: '11px', color: '#4CAF50' }}>● Active</div></div>
                </div>
                <div className="demo-wallet-row">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ width: '32px', height: '32px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>⚡</div><div><div style={{ fontSize: '13px', color: '#F0EEE8', fontWeight: 500 }}>defi-agent-02</div><div style={{ fontSize: '11px', color: '#4A4845' }}>0x5e6f...7g8h</div></div></div>
                    <div style={{ textAlign: 'right' }}><div style={{ fontSize: '13px', color: '#C9A84C', fontWeight: 600 }}>7.8 ETH</div><div style={{ fontSize: '11px', color: '#C9A84C' }}>⏸ Review</div></div>
                </div>
                <div className="demo-wallet-row">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ width: '32px', height: '32px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>🔄</div><div><div style={{ fontSize: '13px', color: '#F0EEE8', fontWeight: 500 }}>arb-agent-03</div><div style={{ fontSize: '11px', color: '#4A4845' }}>0x9i0j...1k2l</div></div></div>
                    <div style={{ textAlign: 'right' }}><div style={{ fontSize: '13px', color: '#C9A84C', fontWeight: 600 }}>0.4 ETH</div><div style={{ fontSize: '11px', color: '#4CAF50' }}>● Active</div></div>
                </div>
            </div>
        </div>
    )
}

function Scene3() {
    return (
        <div className="demo-scene">
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '16px', fontWeight: 700, color: '#F0EEE8', marginBottom: '16px' }}>Virtual Cards</div>
            <div style={{ background: 'linear-gradient(135deg,#1A1A1A,#2A2010)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '14px', padding: '20px', marginBottom: '12px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(201,168,76,0.05)' }}></div>
                <div style={{ fontSize: '10px', color: '#C9A84C', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Orclave Virtual Card</div>
                <div style={{ fontSize: '15px', color: '#F0EEE8', letterSpacing: '0.15em', marginBottom: '16px' }}>•••• •••• •••• 4291</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div><div style={{ fontSize: '10px', color: '#888' }}>Limit</div><div style={{ fontSize: '13px', color: '#F0EEE8', fontWeight: 600 }}>$500 / $1,000</div></div>
                    <div style={{ textAlign: 'right' }}><div style={{ fontSize: '10px', color: '#888' }}>Expires</div><div style={{ fontSize: '13px', color: '#F0EEE8' }}>12/25</div></div>
                </div>
                <div style={{ marginTop: '12px', background: 'rgba(0,0,0,0.3)', borderRadius: '6px', height: '4px' }}><div style={{ width: '50%', height: '100%', background: 'var(--gold)', borderRadius: '6px' }}></div></div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ flex: 1, background: '#111', border: '1px solid #1A1A1A', borderRadius: '8px', padding: '10px', textAlign: 'center' }}><div style={{ fontSize: '10px', color: '#888' }}>Spent</div><div style={{ fontSize: '14px', color: '#F0EEE8', fontWeight: 600 }}>$500</div></div>
                <div style={{ flex: 1, background: '#111', border: '1px solid #1A1A1A', borderRadius: '8px', padding: '10px', textAlign: 'center' }}><div style={{ fontSize: '10px', color: '#888' }}>Remaining</div><div style={{ fontSize: '14px', color: '#C9A84C', fontWeight: 600 }}>$500</div></div>
                <div style={{ flex: 1, background: '#111', border: '1px solid #1A1A1A', borderRadius: '8px', padding: '10px', textAlign: 'center' }}><div style={{ fontSize: '10px', color: '#888' }}>Status</div><div style={{ fontSize: '14px', color: '#4CAF50', fontWeight: 600 }}>Active</div></div>
            </div>
        </div>
    )
}

function Scene4() {
    return (
        <div className="demo-scene">
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '16px', fontWeight: 700, color: '#F0EEE8', marginBottom: '16px' }}>Spending Rules</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div className="demo-rule-row"><div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#C9A84C' }}></div><span style={{ fontSize: '12px', color: '#F0EEE8' }}>Max per transaction</span></div><span style={{ fontSize: '12px', color: '#C9A84C', fontWeight: 600 }}>0.5 ETH</span></div>
                <div className="demo-rule-row"><div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#C9A84C' }}></div><span style={{ fontSize: '12px', color: '#F0EEE8' }}>Daily cap</span></div><span style={{ fontSize: '12px', color: '#C9A84C', fontWeight: 600 }}>2.0 ETH</span></div>
                <div className="demo-rule-row"><div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#4CAF50' }}></div><span style={{ fontSize: '12px', color: '#F0EEE8' }}>Whitelist active</span></div><span style={{ fontSize: '12px', color: '#4CAF50', fontWeight: 600 }}>3 addresses</span></div>
                <div className="demo-rule-row"><div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#F44336' }}></div><span style={{ fontSize: '12px', color: '#F0EEE8' }}>Block weekends</span></div><span style={{ fontSize: '12px', color: '#4CAF50', fontWeight: 600 }}>ON</span></div>
                <div className="demo-rule-row"><div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#C9A84C' }}></div><span style={{ fontSize: '12px', color: '#F0EEE8' }}>Require approval above</span></div><span style={{ fontSize: '12px', color: '#C9A84C', fontWeight: 600 }}>1.0 ETH</span></div>
            </div>
        </div>
    )
}

function Scene5() {
    const [action, setAction] = useState(null)
    return (
        <div className="demo-scene">
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '16px', fontWeight: 700, color: '#F0EEE8', marginBottom: '16px' }}>Pending Approvals <span style={{ background: '#C9A84C', color: '#000', fontSize: '10px', padding: '2px 7px', borderRadius: '10px', fontWeight: 700, marginLeft: '6px' }}>1</span></div>
            <div style={{ background: '#111', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '12px', padding: '16px', marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <div><div style={{ fontSize: '13px', color: '#F0EEE8', fontWeight: 600 }}>defi-agent-02</div><div style={{ fontSize: '11px', color: '#888', marginTop: '2px' }}>Requested 2 min ago</div></div>
                    <div style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', padding: '3px 10px', borderRadius: '6px', fontSize: '11px', color: '#C9A84C' }}>Pending</div>
                </div>
                <div style={{ background: '#0A0A0A', borderRadius: '8px', padding: '10px', marginBottom: '12px' }}>
                    <div style={{ fontSize: '11px', color: '#888', marginBottom: '4px' }}>Transaction Details</div>
                    <div style={{ fontSize: '12px', color: '#F0EEE8' }}>Send <span style={{ color: '#C9A84C', fontWeight: 600 }}>1.2 ETH</span> to 0x7f3a...9b2c</div>
                    <div style={{ fontSize: '11px', color: '#888', marginTop: '2px' }}>Triggered: amount exceeds 1.0 ETH threshold</div>
                </div>
                {!action ? (
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <button onClick={() => setAction('approve')} style={{ flex: 1, padding: '8px', background: '#C9A84C', border: 'none', borderRadius: '8px', color: '#000', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>✓ Approve</button>
                        <button onClick={() => setAction('reject')} style={{ flex: 1, padding: '8px', background: 'transparent', border: '1px solid #333', borderRadius: '8px', color: '#888', fontSize: '12px', cursor: 'pointer' }}>✗ Reject</button>
                    </div>
                ) : (
                    <div style={{
                        textAlign: 'center', padding: '8px', borderRadius: '8px', fontSize: '13px', fontWeight: 600,
                        background: action === 'approve' ? 'rgba(76,175,80,0.1)' : 'rgba(244,67,54,0.1)',
                        color: action === 'approve' ? '#4CAF50' : '#F44336',
                        border: action === 'approve' ? '1px solid rgba(76,175,80,0.3)' : '1px solid rgba(244,67,54,0.3)'
                    }}>
                        {action === 'approve' ? '✓ Transaction Approved — 1.2 ETH sent' : '✗ Transaction Rejected — Agent notified'}
                    </div>
                )}
            </div>
        </div>
    )
}
