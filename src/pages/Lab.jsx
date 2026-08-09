import React from 'react';
import { Typography, Container, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const labExperiments = [
  { id: 1, title: 'Fluid Cursor 2.0', category: 'Interaction', color: '#1D1D1F', textColor: '#ffffff' },
  { id: 2, title: 'WebGL Distortion', category: '3D Graphics', color: '#00E5FF', textColor: '#ffffff' },
  { id: 3, title: 'Scroll Triggered SVG', category: 'Animation', color: '#e5e5ea', textColor: '#1D1D1F' },
  { id: 4, title: 'Typography Matrix', category: 'Layout', color: '#f5f5f7', textColor: '#1D1D1F' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Lab = () => {
  return (
    <Box sx={{ pb: 20 }}>
      {/* Hero Section */}
      <Container maxWidth="xl" sx={{ pt: '15vw', pb: 10, px: { xs: 3, md: 8 } }}>
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <Typography sx={{ color: '#a1a1a6', fontWeight: 700, textTransform: 'uppercase', mb: 2, fontSize: '0.9rem', letterSpacing: '0.05em' }}>
              Experimental
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography variant="h1" sx={{ color: '#1D1D1F', mb: 0 }}>The</Typography>
            <Typography variant="h1" sx={{ color: '#1D1D1F', mb: 4 }}>design lab</Typography>
          </motion.div>
        </motion.div>
      </Container>

      {/* Lab Grid */}
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 }, mt: 5 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: { xs: 4, md: 0 } }}>
           {labExperiments.map((experiment, index) => (
              <Box 
                key={experiment.id}
                className="hover-target"
                component={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                sx={{ 
                  width: { xs: '100%', md: 'calc(50% - 24px)' },
                  mt: { xs: 0, md: index % 2 !== 0 ? 15 : 0 },
                  height: '600px',
                  background: experiment.color,
                  borderRadius: '40px',
                  p: 6,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'none',
                  transition: 'transform 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'scale(0.98)'
                  }
                }}
              >
                <Box sx={{ zIndex: 2 }}>
                  <Typography sx={{ color: experiment.textColor === '#ffffff' ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.4)', fontWeight: 800, fontSize: '1rem', mb: 1, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {experiment.category}
                  </Typography>
                  <Typography variant="h3" sx={{ color: experiment.textColor, fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                    {experiment.title}
                  </Typography>
                </Box>
                
                {/* Abstract shape representing the experiment */}
                <Box sx={{ 
                  position: 'absolute', 
                  bottom: -50, 
                  right: -50, 
                  width: 300, 
                  height: 300, 
                  borderRadius: '50%', 
                  background: experiment.textColor === '#ffffff' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                  zIndex: 1
                }} />
              </Box>
           ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Lab;
