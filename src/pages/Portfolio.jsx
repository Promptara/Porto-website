import React, { useState } from 'react';
import { Typography, Container, Box, Tabs, Tab } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

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
        <Box sx={{ mb: 10, borderBottom: '1px solid #e5e5ea' }}>
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange} 
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            textColor="primary"
            indicatorColor="primary"
            sx={{
              '& .MuiTabs-indicator': { height: 3 },
              '& .MuiTab-root': {
                textTransform: 'lowercase',
                fontWeight: 700,
                fontSize: '1.2rem',
                color: '#1D1D1F',
                minWidth: 'auto',
                mr: 4,
                px: 0,
                '&.Mui-selected': { color: '#00E5FF' }
              }
            }}
          >
            {categories.map((category) => (
              <Tab key={category} label={category} value={category} />
            ))}
          </Tabs>
        </Box>

        {/* Portfolio Grid */}
        <Box sx={{ minHeight: 600 }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: { xs: 4, md: 0 } }}>
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <ProjectCard key={item.id} item={item} index={index} />
              ))}
            </AnimatePresence>
          </Box>
        </Box>

      </motion.div>
    </Container>
  );
};

export default Portfolio;
