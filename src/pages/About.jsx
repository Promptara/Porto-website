import React from 'react';
import { Typography, Container, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const teamPhotos = [
  { id: 1, text: 'TEAM MEMBER', color: '#f5f5f7' },
  { id: 2, text: 'OFFICE SPACE', color: '#e5e5ea' },
  { id: 3, text: 'WORKSHOP', color: '#d2d2d7' },
  { id: 4, text: 'DESIGN PROCESS', color: '#c7c7cc' }
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

const About = () => {
  return (
    <Box sx={{ pb: 20 }}>
      {/* Hero Section */}
      <Container maxWidth="xl" sx={{ pt: '15vw', pb: 10, px: { xs: 3, md: 8 } }}>
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <Typography sx={{ color: '#a1a1a6', fontWeight: 700, textTransform: 'uppercase', mb: 2, fontSize: '0.9rem', letterSpacing: '0.05em' }}>
              About Us
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography variant="h1" sx={{ color: '#1D1D1F', mb: 0 }}>We are</Typography>
            <Typography variant="h1" sx={{ color: '#1D1D1F', mb: 4 }}>promptara</Typography>
          </motion.div>
        </motion.div>
      </Container>

      {/* Mission Statement */}
      <Box sx={{ borderTop: '1px solid #e5e5ea', borderBottom: '1px solid #e5e5ea', py: 15 }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
           <Grid container spacing={4} justifyContent="flex-end">
              <Grid item xs={12} md={7}>
                 <Typography sx={{ fontSize: 'clamp(1.5rem, 3vw, 3rem)', fontWeight: 600, color: '#1D1D1F', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                    We are a digital design agency focused on creating seamless user experiences and powerful brand identities. We believe in the intersection of aesthetics and pure utility.
                 </Typography>
              </Grid>
           </Grid>
        </Container>
      </Box>

      {/* Team / Culture Masonry */}
      <Container maxWidth="xl" sx={{ pt: 15, px: { xs: 3, md: 8 } }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: { xs: 4, md: 0 } }}>
           {teamPhotos.map((item, index) => (
              <Box 
                key={item.id}
                className="hover-target"
                component={motion.div}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                sx={{ 
                  width: { xs: '100%', md: 'calc(50% - 24px)' },
                  mt: { xs: 0, md: index % 2 !== 0 ? 15 : 0 },
                }}
              >
                 <Box 
                   sx={{ 
                     width: '100%',
                     height: { xs: 400, md: 600 },
                     backgroundColor: item.color, 
                     borderRadius: '40px',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     cursor: 'none',
                     transition: 'transform 0.4s ease',
                     '&:hover': {
                       transform: 'scale(0.98)'
                     }
                   }}
                 >
                    <Typography sx={{ fontWeight: 800, color: '#1D1D1F', opacity: 0.3, letterSpacing: '0.05em' }}>
                      {item.text}
                    </Typography>
                 </Box>
              </Box>
           ))}
        </Box>
      </Container>
    </Box>
  );
};

export default About;
