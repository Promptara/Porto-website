import React from 'react';
import { Typography, Container, Box, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <Container maxWidth="lg">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Typography variant="h1" gutterBottom sx={{ mt: 4 }}>
          Our <span className="text-gradient">Portfolio</span>
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 8, maxWidth: '800px' }}>
          Explore some of our recent work across web development, graphic design, and digital products.
        </Typography>
        
        <Grid container spacing={4}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Card sx={{ borderRadius: 4, overflow: 'hidden', background: 'rgba(0,0,0,0.02)' }}>
                  <Box sx={{ height: 200, background: `linear-gradient(45deg, #f0f0f0, #e0e0e0)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <Typography color="text.secondary">Project Image {item}</Typography>
                  </Box>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>Project Title {item}</Typography>
                    <Typography variant="body2" color="text.secondary">Website Development</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Portfolio;
