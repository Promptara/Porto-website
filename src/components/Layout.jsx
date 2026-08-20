import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Box, 
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'work', target: '#work' },
  { label: 'services', target: '#services' },
  { label: 'about', target: '#about' },
  { label: 'notes', target: '#notes' },
  { label: 'lab', target: '#lab' },
];

const sectionInfoMap = [
  { id: 'hero', label: 'home studio', target: '#hero' },
  { id: 'about', label: 'about studio', target: '#about' },
  { id: 'services', label: 'services showcase', target: '#services' },
  { id: 'work', label: 'curated digital catalog', target: '#work' },
  { id: 'notes', label: 'opinionated notes', target: '#notes' },
  { id: 'lab', label: 'experimental lab', target: '#lab' },
  { id: 'contact', label: 'get in touch', target: '#contact' },
];

const Layout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (target) => {
    setMobileOpen(false);
    if (target === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(target);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const drawer = (
    <Box sx={{ textAlign: 'center', p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 800, textTransform: 'lowercase' }}>
          promptara
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ my: 'auto' }}>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding sx={{ mb: 2 }}>
            <Button 
              onClick={() => handleNavClick(item.target)}
              fullWidth 
              sx={{ 
                color: '#1D1D1F',
                fontSize: '1.5rem',
                fontWeight: 800,
                textTransform: 'lowercase',
                py: 1
              }}
            >
              <ListItemText 
                primary={item.label} 
                primaryTypographyProps={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'lowercase' }}
              />
            </Button>
          </ListItem>
        ))}
      </List>
      <Button 
        onClick={() => handleNavClick('#contact')}
        variant="contained"
        sx={{ 
          backgroundColor: '#1D1D1F', 
          color: '#ffffff !important', 
          fontWeight: 800, 
          textTransform: 'lowercase', 
          fontSize: '1.1rem',
          borderRadius: '100px',
          py: 1.5,
          mt: 'auto'
        }}
      >
        contact us
      </Button>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
      {/* Background Texture Layer (Activates on Scroll) */}
      <div className={`bg-texture-layer ${scrolled ? 'visible' : ''}`} />

      {/* Blurry Transparent Glass Navbar */}
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{ 
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          py: scrolled ? 1.5 : 2.2,
          background: scrolled ? 'rgba(250, 250, 250, 0.75)' : 'rgba(250, 250, 250, 0.35)',
          backgroundColor: scrolled ? 'rgba(250, 250, 250, 0.75)' : 'rgba(250, 250, 250, 0.35)',
          backdropFilter: 'blur(18px) saturate(180%)',
          WebkitBackdropFilter: 'blur(18px) saturate(180%)',
          borderBottom: scrolled ? '1px solid rgba(0, 0, 0, 0.06)' : '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.03)' : 'none',
          zIndex: 1100
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            {/* Brand Logo, Name & Live Location Ticker */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box 
                onClick={() => handleNavClick('#')}
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  cursor: 'pointer', 
                  color: '#1D1D1F' 
                }}
                className="hover-target"
              >
                <img src="/promptaralogo.png" alt="Promptara Logo" style={{ height: '32px', marginRight: '14px' }} />
                <Typography variant="h5" component="div" sx={{ fontWeight: 800, letterSpacing: '-0.02em', textTransform: 'lowercase', fontSize: { xs: '1.1rem', sm: '1.4rem' } }}>
                  promptara agency 
                </Typography>
              </Box>

              {/* Dynamic Live Location Status Badge in Navbar */}
              <Box 
                sx={{ 
                  display: { xs: 'none', lg: 'flex' }, 
                  alignItems: 'center', 
                  gap: 1.2, 
                  px: 2.2, 
                  py: 0.7, 
                  ml: 3.5, 
                  borderRadius: '100px', 
                  background: 'rgba(255, 255, 255, 0.6)', 
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                  transition: 'all 0.3s ease'
                }}
              >
                <Box 
                  sx={{ 
                    width: 7, 
                    height: 7, 
                    borderRadius: '50%', 
                    backgroundColor: '#00E5FF', 
                    boxShadow: '0 0 10px #00E5FF' 
                  }} 
                />
                <Typography sx={{ color: '#86868b', fontSize: '0.72rem', fontWeight: 700, fontFamily: '"Space Grotesk", sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  LOC:
                </Typography>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeSection.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    style={{ 
                      fontSize: '0.82rem', 
                      fontWeight: 800, 
                      textTransform: 'lowercase', 
                      color: '#1D1D1F',
                      fontFamily: '"Plus Jakarta Sans", sans-serif'
                    }}
                  >
                    {activeSection.label}
                  </motion.span>
                </AnimatePresence>
              </Box>
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
              {navItems.map((item) => {
                const isActive = activeSection.id === item.target.replace('#', '');
                return (
                  <Box 
                    key={item.label} 
                    onClick={() => handleNavClick(item.target)}
                    className="hover-target"
                    sx={{ 
                      color: isActive ? '#1D1D1F' : '#666666',
                      fontWeight: isActive ? 800 : 700,
                      textTransform: 'lowercase',
                      fontSize: '1.05rem',
                      cursor: 'pointer',
                      position: 'relative',
                      transition: 'color 0.2s ease',
                      '&:hover': {
                        color: '#1D1D1F'
                      }
                    }}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        style={{
                          position: 'absolute',
                          bottom: -6,
                          left: 0,
                          right: 0,
                          height: 2,
                          backgroundColor: '#00E5FF',
                          borderRadius: 2,
                          boxShadow: '0 0 8px #00E5FF'
                        }}
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}
                  </Box>
                );
              })}
              
              <Box sx={{ display: 'flex', gap: 1, ml: 2, alignItems: 'center' }}>
                 <Typography className="hover-target" sx={{ fontWeight: 700, fontSize: '0.95rem', color: '#1D1D1F', cursor: 'pointer', '&:hover': { color: '#00E5FF' }}}>EN</Typography>
                 <Typography sx={{ color: '#d2d2d7' }}>|</Typography>
                 <Typography className="hover-target" sx={{ fontWeight: 700, fontSize: '0.95rem', color: '#a1a1a6', cursor: 'pointer', '&:hover': { color: '#1D1D1F' }}}>UA</Typography>
              </Box>

              <Button 
                onClick={() => handleNavClick('#contact')}
                className="hover-target"
                variant="contained"
                sx={{ 
                  ml: 2, 
                  backgroundColor: '#1D1D1F', 
                  color: '#ffffff !important', 
                  fontWeight: 800, 
                  textTransform: 'lowercase', 
                  fontSize: '0.95rem',
                  borderRadius: '100px',
                  px: 3.5,
                  py: 1.2,
                  boxShadow: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#00E5FF',
                    color: '#1D1D1F !important',
                    boxShadow: '0 8px 24px rgba(0,229,255,0.35)',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                contact us
              </Button>
            </Box>

            {/* Mobile Navigation Toggle */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, color: '#1D1D1F' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%', maxWidth: 320, background: '#ffffff' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      
      <Box component="main" sx={{ flexGrow: 1, zIndex: 10, position: 'relative' }}>
        {children}
      </Box>

      {/* Footer Section */}
      <Box component="footer" sx={{ py: 12, px: { xs: 3, md: 8 }, mt: 'auto', backgroundColor: '#ffffff', borderTop: '1px solid #e5e5ea', zIndex: 10, position: 'relative' }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'flex-start', gap: 6 }}>
            <Box>
               <Typography variant="h2" sx={{ fontWeight: 800, color: '#1D1D1F', letterSpacing: '-0.04em' }}>promptara</Typography>
               <Typography variant="h6" sx={{ color: '#00E5FF', mt: 1, fontWeight: 700 }}>digital agency studio</Typography>
            </Box>
            
            <Box sx={{ display: 'flex', gap: 8, flexDirection: { xs: 'column', sm: 'row' } }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography sx={{ fontWeight: 800, textTransform: 'uppercase', color: '#a1a1a6', fontSize: '0.85rem', letterSpacing: '0.05em', mb: 1 }}>Menu</Typography>
                {navItems.map(item => (
                  <Box key={item.label} onClick={() => handleNavClick(item.target)} className="hover-target" sx={{ color: '#1D1D1F', fontWeight: 600, textTransform: 'lowercase', cursor: 'pointer', '&:hover': { color: '#00E5FF' }}}>
                    {item.label}
                  </Box>
                ))}
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography sx={{ fontWeight: 800, textTransform: 'uppercase', color: '#a1a1a6', fontSize: '0.85rem', letterSpacing: '0.05em', mb: 1 }}>Socials</Typography>
                <Box component="a" href="#" className="hover-target" sx={{ color: '#1D1D1F', fontWeight: 600, textDecoration: 'none', '&:hover': { color: '#00E5FF' }}}>Dribbble</Box>
                <Box component="a" href="#" className="hover-target" sx={{ color: '#1D1D1F', fontWeight: 600, textDecoration: 'none', '&:hover': { color: '#00E5FF' }}}>Behance</Box>
                <Box component="a" href="#" className="hover-target" sx={{ color: '#1D1D1F', fontWeight: 600, textDecoration: 'none', '&:hover': { color: '#00E5FF' }}}>Twitter / X</Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ mt: 10, pt: 4, borderTop: '1px solid #e5e5ea', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
            <Typography variant="body2" sx={{ color: '#a1a1a6', fontWeight: 600 }}>
              &copy; {new Date().getFullYear()} Promptara Agency Studio. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;

