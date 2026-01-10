import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  Preloader,
  Navbar,
  Hero,
  Services,
  Process,
  Shop,
  Testimonials,
  Portfolio,
  Team,
  FAQ,
  Contact,
  Footer
} from './components';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Lock scroll saat loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans antialiased text-slate-800 bg-white selection:bg-teal-500 selection:text-white overflow-x-hidden relative">
      {/* Preloader sebagai Overlay */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Konten Utama */}
      <div className={`${isLoading ? "fixed inset-0 overflow-hidden" : ""}`}>
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Process />
          <Shop />
          <Testimonials />
          <Portfolio />
          <Team />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;