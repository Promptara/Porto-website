import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { navItems, handleNavClick } from '../utils/navigation';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 12, px: { xs: 3, md: 8 }, mt: 'auto', backgroundColor: '#ffffff', borderTop: '1px solid #e5e5ea', zIndex: 10, position: 'relative' }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'flex-start', gap: 6 }}>
          <Box>
             <Typography variant="h2" sx={{ fontWeight: 800, color: '#1D1D1F', letterSpacing: '-0.04em' }}>Promptara</Typography>
             <Typography variant="h6" sx={{ color: '#00E5FF', mt: 1, fontWeight: 700 }}>Digital Agency Studio</Typography>
          </Box>
          
          <Box sx={{ display: 'flex', gap: 8, flexDirection: { xs: 'column', sm: 'row' } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography sx={{ fontWeight: 800, textTransform: 'uppercase', color: '#a1a1a6', fontSize: '0.85rem', letterSpacing: '0.05em', mb: 1 }}>Menu</Typography>
              {navItems.map(item => (
                <Box key={item.label} onClick={() => handleNavClick(item.target)} className="hover-target" sx={{ color: '#1D1D1F', fontWeight: 600, cursor: 'pointer', '&:hover': { color: '#00E5FF' }}}>
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
  );
};

export default Footer;
