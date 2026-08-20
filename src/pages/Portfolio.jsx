import React, { useState } from 'react';
import { Typography, Container, Box, Tabs, Tab } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const portfolioItems = [
  { 
    id: 1, 
    title: 'Fintech Corporate Portal', 
    category: 'Website Development',
    client: 'FinPulse International',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    tags: ['React', 'Design System', 'Financial']
  },
  { 
    id: 2, 
    title: 'Luxe E-Commerce Storefront', 
    category: 'Website Development',
    client: 'Veloce Atelier',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
    tags: ['Shopify', 'Framer', 'Luxury Brand']
  },
  { 
    id: 3, 
    title: 'Monocle Magazine WP', 
    category: 'WordPress Development',
    client: 'Monocle Press',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    tags: ['WordPress', 'CMS', 'Editorial']
  },
  { 
    id: 4, 
    title: 'Kubo Architects Profile', 
    category: 'WordPress Development',
    client: 'Kubo Studio',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    tags: ['WordPress', 'Custom Theme']
  },
  { 
    id: 5, 
    title: 'Aura Studio Brand Identity', 
    category: 'Graphic Design',
    client: 'Aura Architecture',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    tags: ['Branding', 'Typography', '3D Asset']
  },
  { 
    id: 6, 
    title: 'Neura AI Mobile Suite', 
    category: 'UI/UX Design',
    client: 'NeuraData Inc',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    tags: ['iOS App', 'Figma', 'Prototyping']
  },
  { 
    id: 7, 
    title: 'Crypto Mobile Wallet UI', 
    category: 'UI/UX Design',
    client: 'Aether Capital',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop',
    tags: ['Fintech', 'Mobile UI']
  },
  { 
    id: 8, 
    title: 'SaaS Design System Kit', 
    category: 'Digital Products',
    client: 'Promptara Lab',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    tags: ['Design System', 'UI Kit']
  },
  { 
    id: 9, 
    title: 'Executive Operations Dashboard', 
    category: 'Digital Products',
    client: 'Starlight Ops',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
    tags: ['React', 'Dashboard', 'Analytics']
  },
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
