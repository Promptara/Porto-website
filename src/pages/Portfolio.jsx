import React, { useState } from 'react';
import { Typography, Container, Box, Grid, Card, CardContent, Tabs, Tab } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const portfolioItems = [
  { id: 1, title: 'Corporate Portal', category: 'Website Development' },
  { id: 2, title: 'Modern E-commerce', category: 'Website Development' },
  { id: 3, title: 'Premium Blog Theme', category: 'WordPress Development' },
  { id: 4, title: 'Company Profile WP', category: 'WordPress Development' },
  { id: 5, title: 'Brand Identity Redesign', category: 'Graphic Design' },
  { id: 6, title: 'Mobile App Wireframes', category: 'UI/UX Design' },
  { id: 7, title: 'Fintech App Design', category: 'UI/UX Design' },
  { id: 8, title: 'SaaS UI Kit', category: 'Digital Products' },
  { id: 9, title: 'Admin Dashboard Template', category: 'Digital Products' },
];

const categories = ['All', 'Website Development', 'WordPress Development', 'UI/UX Design', 'Graphic Design', 'Digital Products'];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('All');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const filteredItems = activeTab === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);

  return (
    <Container maxWidth="lg" sx={{ pb: 10 }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Typography variant="h1" gutterBottom sx={{ mt: 4 }}>
          Our <span className="text-gradient">Portfolio</span>
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4, maxWidth: '800px' }}>
          Explore some of our recent work across web development, graphic design, and digital products.
        </Typography>
        
        {/* Category Tabs */}
        <Box sx={{ mb: 6, borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange} 
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            textColor="primary"
            indicatorColor="primary"
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem',
              }
            }}
          >
            {categories.map((category) => (
              <Tab key={category} label={category} value={category} />
            ))}
          </Tabs>
        </Box>

        {/* Portfolio Grid */}
        <Box sx={{ minHeight: 400 }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <Box 
                  key={item.id} 
                  component={motion.div}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  sx={{ 
                    width: { 
                      xs: '100%', 
                      sm: 'calc(50% - 16px)', 
                      md: 'calc(33.333% - 22px)' 
                    } 
                  }}
                >
                  <motion.div whileHover={{ y: -10 }} transition={{ type: 'spring', stiffness: 300 }} style={{ height: '100%' }}>
                    <Card sx={{ height: '100%', borderRadius: 4, overflow: 'hidden', background: 'rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column' }}>
                      <Box sx={{ height: 200, background: `linear-gradient(45deg, #f0f0f0, #e0e0e0)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                         <Typography color="text.secondary">Project {item.id} Image</Typography>
                      </Box>
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" gutterBottom>{item.title}</Typography>
                        <Typography variant="body2" color="primary.main" sx={{ fontWeight: 600 }}>
                          {item.category}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Box>
              ))}
            </AnimatePresence>
          </Box>
        </Box>

      </motion.div>
    </Container>
  );
};

export default Portfolio;
