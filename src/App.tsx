import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedWork } from './components/FeaturedWork';
import { ServiceSection } from './components/ServiceSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { AboutSection } from './components/AboutSection';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [contactInitialService, setContactInitialService] = useState<string>('Graphic Design');

  // Handle URL hash changes if user navigates with back/forward or anchors
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'work', 'services', 'process', 'about', 'contact'].includes(hash)) {
        setCurrentTab(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRequestService = (serviceName: string) => {
    setContactInitialService(serviceName);
    setCurrentTab('contact');
    window.location.hash = 'contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartProject = (context?: string) => {
    if (context) {
      setContactInitialService(context);
    }
    setCurrentTab('contact');
    window.location.hash = 'contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#090D14] text-[#F5F5F2] selection:bg-[#FF7138] selection:text-white flex flex-col font-['Plus_Jakarta_Sans']">
      {/* Fixed Navigation */}
      <Navbar
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenProjectContact={() => handleStartProject()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <>
            <Hero
              onExploreWork={() => {
                const el = document.getElementById('work-section');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  handleNavigate('work');
                }
              }}
              onStartProject={() => handleStartProject()}
            />
            <ServiceSection
              onRequestService={handleRequestService}
            />
            <FeaturedWork
              onStartProject={handleStartProject}
            />
            <ProcessTimeline />
            <AboutSection
              onStartProject={() => handleStartProject()}
            />
            <Testimonials />
            <ContactSection
              initialService={contactInitialService}
            />
          </>
        )}

        {currentTab === 'work' && (
          <div className="animate-in fade-in duration-300">
            <FeaturedWork
              onStartProject={handleStartProject}
              isStandalonePage={true}
            />
          </div>
        )}

        {currentTab === 'services' && (
          <div className="animate-in fade-in duration-300">
            <ServiceSection
              onRequestService={handleRequestService}
              isStandalonePage={true}
            />
          </div>
        )}

        {currentTab === 'process' && (
          <div className="animate-in fade-in duration-300 pt-20">
            <ProcessTimeline />
          </div>
        )}

        {currentTab === 'about' && (
          <div className="animate-in fade-in duration-300">
            <AboutSection
              onStartProject={() => handleStartProject()}
              isStandalonePage={true}
            />
          </div>
        )}

        {currentTab === 'contact' && (
          <div className="animate-in fade-in duration-300">
            <ContactSection
              initialService={contactInitialService}
              isStandalonePage={true}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onRequestService={handleRequestService}
      />
    </div>
  );
}
