import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <Container maxWidth="lg">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Typography variant="h1" gutterBottom sx={{ mt: 4 }}>
          Our <span className="text-gradient-primary">Services</span>
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 8, maxWidth: '800px' }}>
          We offer a comprehensive suite of digital services designed to elevate your brand and drive results.
        </Typography>
        
        {/* Placeholder for detailed services - in a real app this would map over data like the home page but with more depth */}
        <Box sx={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.02)', borderRadius: 4, border: '1px dashed rgba(0,0,0,0.1)' }}>
          <Typography variant="h6" color="text.secondary">Detailed Services List Coming Soon</Typography>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Services;
