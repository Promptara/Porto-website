import React, { useState } from 'react';
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
import { motion } from 'framer-motion';
import { navItems, handleNavClick } from '../utils/navigation';

const Navbar = ({ scrolled, activeSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const onNavClick = (target) => {
    handleNavClick(target, setMobileOpen);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center', p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 800 }}>
          Promptara
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ my: 'auto' }}>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding sx={{ mb: 2 }}>
            <Button 
              onClick={() => onNavClick(item.target)}
              fullWidth 
              sx={{ 
                color: '#1D1D1F',
                fontSize: '1.5rem',
                fontWeight: 800,
                py: 1
              }}
            >
              <ListItemText 
                primary={item.label} 
                primaryTypographyProps={{ fontSize: '1.5rem', fontWeight: 800 }}
              />
            </Button>
          </ListItem>
        ))}
      </List>
      <Button 
        onClick={() => onNavClick('#contact')}
        variant="contained"
        sx={{ 
          backgroundColor: '#1D1D1F', 
          color: '#ffffff !important', 
          fontWeight: 800, 
          fontSize: '1.1rem',
          borderRadius: '100px',
          py: 1.5,
          mt: 'auto'
        }}
      >
        Contact Us
      </Button>
    </Box>
  );

  return (
    <>
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
                onClick={() => onNavClick('#')}
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  cursor: 'pointer', 
                  color: '#1D1D1F' 
                }}
                className="hover-target"
              >
                <img src="/promptaralogo.png" alt="Promptara Logo" style={{ height: '32px', marginRight: '14px' }} />
                <Typography variant="h5" component="div" sx={{ fontWeight: 800, letterSpacing: '-0.02em', fontSize: { xs: '1.1rem', sm: '1.4rem' } }}>
                  Promptara Agency 
                </Typography>
              </Box>

            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
              {navItems.map((item) => {
                const isActive = activeSection.id === item.target.replace('#', '');
                return (
                  <Box 
                    key={item.label} 
                    onClick={() => onNavClick(item.target)}
                    className="hover-target"
                    sx={{ 
                      color: isActive ? '#1D1D1F' : '#666666',
                      fontWeight: isActive ? 800 : 700,
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
                onClick={() => onNavClick('#contact')}
                className="hover-target"
                variant="contained"
                sx={{ 
                  ml: 2, 
                  backgroundColor: '#1D1D1F', 
                  color: '#ffffff !important', 
                  fontWeight: 800, 
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
                Contact Us
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
    </>
  );
};

export default Navbar;
