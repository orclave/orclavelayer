import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Security from './components/Security';
import Developer from './components/Developer';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Modals from './components/Modals';
import DemoModal from './components/DemoModal';
import DocsModal from './components/DocsModal';
import Dashboard from './components/Dashboard';
import { supabase } from './lib/supabase';

export default function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setIsAuthenticated(true);
        setUser(session.user);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setIsAuthenticated(true);
        setUser(session.user);
        setActiveModal(null);
        window.scrollTo({ top: 0 });
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [activeModal]); // Re-run when modal changes just in case modal content has fade-ups

  // Manage body scroll based on modal state
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [activeModal]);

  const handleNavigate = (sectionId) => {
    if (sectionId === 'top') {
      window.scrollTo(0, 0);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        window.scrollTo(0, el.offsetTop - 80);
      }
    }
    setActiveModal(null); // Close any open modal on navigation
  };

  return (
    <div className="app-container">
      {!isAuthenticated ? (
        <>
          <Navbar onNavigate={handleNavigate} onOpenModal={setActiveModal} />

          <main>
            <Hero onOpenDemo={setActiveModal} onOpenEarlyAccess={setActiveModal} />
            <Features />
            <HowItWorks />
            <Security />
            <Developer />
            <Pricing onOpenEarlyAccess={setActiveModal} />
            <CTA onOpenDocs={setActiveModal} onOpenEarlyAccess={setActiveModal} />
          </main>

          <Footer onNavigate={handleNavigate} onOpenModal={setActiveModal} />

          <Modals
            activeModal={activeModal}
            onClose={() => setActiveModal(null)}
            onSwitchModal={setActiveModal}
            onLogin={async () => {
              // The actual login state is now handled by the supabase onAuthStateChange listener
              // This is just a fallback for the email/password simulation if needed
            }}
          />
          <DemoModal activeModal={activeModal} onClose={() => setActiveModal(null)} />
          <DocsModal activeModal={activeModal} onClose={() => setActiveModal(null)} />
        </>
      ) : (
        <Dashboard
          onLogout={async () => {
            await supabase.auth.signOut();
            setIsAuthenticated(false);
            setUser(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          user={user}
        />
      )}
    </div>
  );
}
