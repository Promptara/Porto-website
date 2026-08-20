import React, { useState } from 'react';
import { Typography, Container, Box, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const servicesList = [
  {
    category: 'Product Design',
    items: ['UX/UI Design', 'Design System', 'Prototyping', 'User Testing'],
    color: '#E3F2FD',
    imageText: 'PRODUCT DESIGN PREVIEW'
  },
  {
    category: 'Web Design',
    items: ['Corporate Websites', 'E-commerce', 'Landing Pages', 'Web Apps'],
    color: '#FFF3E0',
    imageText: 'WEB DESIGN PREVIEW'
  },
  {
    category: 'Brand Identity',
    items: ['Logo Design', 'Brand Guidelines', 'Typography', 'Visual Strategy'],
    color: '#E8F5E9',
    imageText: 'BRAND IDENTITY PREVIEW'
  },
  {
    category: 'Graphics & Motion',
    items: ['Illustrations', '3D Graphics', 'Motion Design', 'Lottie Animations'],
    color: '#FCE4EC',
    imageText: 'GRAPHICS & MOTION PREVIEW'
  },
  {
    category: 'Development',
    items: ['React / Next.js', 'WordPress', 'Framer / Webflow', 'Creative Coding'],
    color: '#F3E5F5',
    imageText: 'DEVELOPMENT PREVIEW'
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <Box sx={{ pb: 20 }}>
      {/* Hero Section */}
      <Container maxWidth="xl" sx={{ pt: '15vw', pb: 10, px: { xs: 3, md: 8 } }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <Typography sx={{ color: '#a1a1a6', fontWeight: 700, textTransform: 'uppercase', mb: 2, fontSize: '0.9rem', letterSpacing: '0.05em' }}>
            Services
          </Typography>
          <Typography variant="h1" sx={{ color: '#1D1D1F', mb: 0 }}>We build</Typography>
          <Typography variant="h1" sx={{ color: '#1D1D1F', mb: 0 }}>strong</Typography>
          <Typography variant="h1" sx={{ color: '#1D1D1F', mb: 4 }}>products</Typography>
        </motion.div>
      </Container>

      {/* Interactive Sticky Hover Layout */}
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 }, mt: 10 }}>
        <Grid container spacing={8}>
          
          {/* Left Column: Service Lists */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {servicesList.map((service, index) => (
                <Box 
                  key={index} 
                  onMouseEnter={() => setActiveService(index)}
                  onClick={() => setActiveService(index)}
                  sx={{ 
                    borderBottom: '1px solid #e5e5ea',
                    py: 6,
                    cursor: 'pointer',
                    opacity: activeService === index ? 1 : 0.5,
                    transition: 'opacity 0.4s ease'
                  }}
                  className="hover-target"
                >
                  <Typography variant="h2" sx={{ fontSize: 'clamp(2rem, 4vw, 5rem)', fontWeight: 800, color: '#1D1D1F', mb: 4, letterSpacing: '-0.02em' }}>
                    {service.category}
                  </Typography>
                  <Grid container spacing={2}>
                    {service.items.map((item, i) => (
                      <Grid item xs={12} sm={6} key={i}>
                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                           <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#00E5FF' }} />
                           <Typography sx={{ fontSize: '1.2rem', fontWeight: 600, color: '#1D1D1F' }}>{item}</Typography>
                         </Box>
                      </Grid>
                    ))}
                  </Grid>
                  
                  {activeService === index && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} style={{ marginTop: '40px' }}>
                      <Link to="/contact" className="hover-target" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00E5FF', textDecoration: 'none', fontWeight: 800, fontSize: '1.2rem' }}>
                        Discuss project <ArrowForwardIcon />
                      </Link>
                    </motion.div>
                  )}
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Right Column: Sticky Preview container */}
          <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ position: 'sticky', top: '15vh', height: '75vh', width: '100%', borderRadius: '40px', overflow: 'hidden' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    backgroundColor: servicesList[activeService].color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute'
                  }}
                >
                  {/* Fake video placeholder */}
                  <Typography variant="h3" sx={{ fontWeight: 900, color: '#1D1D1F', opacity: 0.3, textAlign: 'center', px: 4 }}>
                    {servicesList[activeService].imageText}
                  </Typography>
                </motion.div>
              </AnimatePresence>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
