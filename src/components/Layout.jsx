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
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Link, useLocation } from 'react-router-dom';
import promptaraLogo from '../assets/promptaralogo.png';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
];

const Layout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 2 }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold' }} className="text-gradient-primary">
        Promptara
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <Button 
              component={Link} 
              to={item.path} 
              fullWidth 
              sx={{ 
                textAlign: 'center', 
                color: location.pathname === item.path ? 'primary.main' : '#fff'
              }}
            >
              <ListItemText primary={item.label} />
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar 
        position="fixed" 
        className={scrolled ? 'glass' : ''}
        sx={{ 
          transition: 'all 0.3s ease-in-out',
          py: scrolled ? 1 : 2,
          background: scrolled ? 'rgba(10, 10, 10, 0.7)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }} component={Link} to="/">
              <img src={promptaraLogo} alt="Promptara Logo" style={{ height: '40px', marginRight: '12px' }} />
              <Typography variant="h5" component="div" sx={{ fontWeight: 800, letterSpacing: '-0.05em' }}>
                Prompt<span className="text-gradient-primary">ara</span>
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              {navItems.map((item) => (
                <Button 
                  key={item.label} 
                  component={Link} 
                  to={item.path}
                  sx={{ 
                    color: location.pathname === item.path ? 'primary.main' : '#e0e0e0',
                    fontWeight: 500,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: location.pathname === item.path ? '100%' : '0%',
                      height: '2px',
                      bottom: 0,
                      left: 0,
                      backgroundColor: 'primary.main',
                      transition: 'width 0.3s ease',
                    },
                    '&:hover::after': {
                      width: '100%'
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button variant="contained" color="primary" component={Link} to="/contact" sx={{ ml: 2 }}>
                Get Started
              </Button>
            </Box>

            {/* Mobile Navigation Toggle */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, background: '#121212' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      
      <Box component="main" sx={{ flexGrow: 1, pt: { xs: 10, md: 12 }, pb: 8 }}>
        {children}
      </Box>

      <Box component="footer" sx={{ py: 6, px: 2, mt: 'auto', borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(5,5,5,0.8)' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
               <img src={promptaraLogo} alt="Promptara Logo" style={{ height: '28px', marginRight: '8px' }} />
               <Typography variant="h6" sx={{ fontWeight: 700 }}>Promptara</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" align="center">
              © {new Date().getFullYear()} Promptara Agency. Empowering digital experiences.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
               {/* Social placeholders */}
               <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' }}}>Twitter</Typography>
               <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' }}}>LinkedIn</Typography>
               <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' }}}>Dribbble</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
