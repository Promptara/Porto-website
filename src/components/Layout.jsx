import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import { sectionInfoMap } from '../utils/navigation';

const Layout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(sectionInfoMap[0]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 150;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));

          // Determine current section in viewport
          const scrollPosition = window.scrollY + 220;
          for (let i = sectionInfoMap.length - 1; i >= 0; i--) {
            const section = document.getElementById(sectionInfoMap[i].id);
            if (section && section.offsetTop <= scrollPosition) {
              setActiveSection((prev) => (prev.id !== sectionInfoMap[i].id ? sectionInfoMap[i] : prev));
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
      {/* Background Texture Layer (Activates on Scroll) */}
      <div className={`bg-texture-layer ${scrolled ? 'visible' : ''}`} />

      <Navbar scrolled={scrolled} activeSection={activeSection} />
      
      <Box component="main" sx={{ flexGrow: 1, zIndex: 10, position: 'relative' }}>
        {children}
      </Box>

      <Footer />
    </Box>
  );
};

export default Layout;
