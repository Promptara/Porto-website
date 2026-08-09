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

const navItems = [
  { label: 'work', path: '/portfolio' },
  { label: 'services', path: '/services' },
  { label: 'about', path: '/about' },
  { label: 'blog', path: '/blog' },
  { label: 'lab', path: '/lab' },
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
                color: location.pathname === item.path ? 'primary.main' : 'text.primary'
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
        elevation={0}
        sx={{ 
          transition: 'all 0.3s ease',
          py: scrolled ? 1.5 : 3,
          background: '#ffffff',
          borderBottom: scrolled ? '1px solid #e5e5ea' : '1px solid transparent',
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#1D1D1F' }} component={Link} to="/">
              <img src="/promptaralogo.png" alt="Promptara Logo" style={{ height: '32px', marginRight: '16px' }} />
              <Typography variant="h5" component="div" sx={{ fontWeight: 800, letterSpacing: '-0.02em', textTransform: 'lowercase' }}>
                promptara
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
              {navItems.map((item) => (
                <Box 
                  key={item.label} 
                  component={Link} 
                  to={item.path}
                  className="hover-target"
                  sx={{ 
                    color: location.pathname === item.path ? '#00E5FF' : '#1D1D1F',
                    fontWeight: 700,
                    textTransform: 'lowercase',
                    fontSize: '1.1rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    '&:hover': {
                      color: '#00E5FF'
                    }
                  }}
                >
                  {item.label}
                </Box>
              ))}
              
              <Box sx={{ display: 'flex', gap: 1, ml: 2, alignItems: 'center' }}>
                 <Typography className="hover-target" sx={{ fontWeight: 700, fontSize: '1rem', color: '#1D1D1F', cursor: 'pointer', '&:hover': { color: '#00E5FF' }}}>EN</Typography>
                 <Typography sx={{ color: '#d2d2d7' }}>|</Typography>
                 <Typography className="hover-target" sx={{ fontWeight: 700, fontSize: '1rem', color: '#a1a1a6', cursor: 'pointer', '&:hover': { color: '#1D1D1F' }}}>UA</Typography>
              </Box>

              <Box component={Link} to="/contact" className="hover-target" sx={{ ml: 4, color: '#1D1D1F', fontWeight: 800, textTransform: 'lowercase', fontSize: '1.1rem', textDecoration: 'none' }}>
                contact us
              </Box>
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, background: '#ffffff' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      
      <Box component="main" sx={{ flexGrow: 1, pt: { xs: 10, md: 12 }, pb: 8 }}>
        {children}
      </Box>

      <Box component="footer" sx={{ py: 10, px: { xs: 3, md: 8 }, mt: 'auto', backgroundColor: '#ffffff', borderTop: '1px solid #e5e5ea' }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'flex-start', gap: 6 }}>
            <Box>
               <Typography variant="h2" sx={{ fontWeight: 900, color: '#1D1D1F', letterSpacing: '-0.04em' }}>promptara</Typography>
               <Typography variant="h6" sx={{ color: '#00E5FF', mt: 1, fontWeight: 700 }}>digital agency</Typography>
            </Box>
            
            <Box sx={{ display: 'flex', gap: 8, flexDirection: { xs: 'column', sm: 'row' } }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography sx={{ fontWeight: 800, textTransform: 'uppercase', color: '#a1a1a6', fontSize: '0.9rem', mb: 1 }}>Menu</Typography>
                {navItems.map(item => (
                  <Box key={item.label} component={Link} to={item.path} className="hover-target" sx={{ color: '#1D1D1F', fontWeight: 600, textDecoration: 'none', '&:hover': { color: '#00E5FF' }}}>
                    {item.label}
                  </Box>
                ))}
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography sx={{ fontWeight: 800, textTransform: 'uppercase', color: '#a1a1a6', fontSize: '0.9rem', mb: 1 }}>Socials</Typography>
                <Box component="a" href="#" className="hover-target" sx={{ color: '#1D1D1F', fontWeight: 600, textDecoration: 'none', '&:hover': { color: '#00E5FF' }}}>Dribbble</Box>
                <Box component="a" href="#" className="hover-target" sx={{ color: '#1D1D1F', fontWeight: 600, textDecoration: 'none', '&:hover': { color: '#00E5FF' }}}>Behance</Box>
                <Box component="a" href="#" className="hover-target" sx={{ color: '#1D1D1F', fontWeight: 600, textDecoration: 'none', '&:hover': { color: '#00E5FF' }}}>Twitter</Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ mt: 10, pt: 4, borderTop: '1px solid #e5e5ea', display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2" sx={{ color: '#a1a1a6', fontWeight: 600 }}>
              Â© {new Date().getFullYear()} Promptara Agency.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
