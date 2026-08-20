import React, { useState, useRef } from 'react';
import { 
  Typography, 
  Grid, 
  Box,
  Button,
  Container,
  Tabs,
  Tab,
  TextField,
  Alert
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import ProjectCard from '../components/ProjectCard';
import { AuroraBackground } from '../components/ui/aurora-background';
import { TextGenerateEffect } from '../components/ui/text-generate-effect';
import { Marquee } from '../components/ui/marquee';

// Data Mockups
const teamPhotos = [
  { id: 1, title: 'Lead Designers', subtitle: 'Aesthetics & Strategy', color: '#1D1D1F', textColor: '#ffffff' },
  { id: 2, title: 'Engineering Hub', subtitle: 'Creative Coding & Systems', color: '#ffffff', textColor: '#1D1D1F' },
  { id: 3, title: 'Brand Studio', subtitle: 'Identity & Visual Motion', color: '#00E5FF', textColor: '#1D1D1F' },
  { id: 4, title: 'Lab Workshop', subtitle: 'R&D and Prototyping', color: '#f0f0f2', textColor: '#1D1D1F' }
];

const servicesList = [
  {
    category: 'Product Design',
    items: ['UX/UI Design Architecture', 'Design System Architecture', 'High-Fidelity Prototyping', 'User Testing & Audits'],
    color: '#E3F2FD',
    imageText: 'PRODUCT DESIGN PREVIEW'
  },
  {
    category: 'Web Design & Dev',
    items: ['Corporate Websites', 'E-commerce Platforms', 'Landing Experience', 'Next.js & React Apps'],
    color: '#FFF3E0',
    imageText: 'WEB DESIGN PREVIEW'
  },
  {
    category: 'Brand Identity',
    items: ['Logo & Visual Strategy', 'Brand Guidelines', 'Typography Systems', '3D Asset Creation'],
    color: '#E8F5E9',
    imageText: 'BRAND IDENTITY PREVIEW'
  },
  {
    category: 'Graphics & Motion',
    items: ['Illustrations', 'Interactive 3D Graphics', 'Motion Design', 'Lottie & WebGL Animations'],
    color: '#FCE4EC',
    imageText: 'GRAPHICS & MOTION PREVIEW'
  },
  {
    category: 'Creative Engineering',
    items: ['React / Next.js', 'WordPress CMS', 'Framer & Webflow', 'Shader & Canvas Animations'],
    color: '#F3E5F5',
    imageText: 'DEVELOPMENT PREVIEW'
  }
];

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
    category: 'WordPress',
    client: 'Monocle Press',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    tags: ['WordPress', 'CMS', 'Editorial']
  },
  { 
    id: 4, 
    title: 'Aura Studio Brand Identity', 
    category: 'Brand Identity',
    client: 'Aura Architecture',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    tags: ['Branding', 'Typography', '3D Asset']
  },
  { 
    id: 5, 
    title: 'Neura AI Mobile Suite', 
    category: 'UI/UX Design',
    client: 'NeuraData Inc',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    tags: ['iOS App', 'Figma', 'Prototyping']
  },
  { 
    id: 6, 
    title: 'Executive Operations Dashboard', 
    category: 'Digital Products',
    client: 'Starlight Ops',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
    tags: ['React', 'Dashboard', 'Analytics']
  },
];

const categories = ['All', 'Website Development', 'UI/UX Design', 'Brand Identity', 'WordPress', 'Digital Products'];

const blogPosts = [
  { title: 'Form-Over-Function Mistakes: How Not to Harm Your Business', author: 'Valeriia Bondarieva', role: 'Lead Designer', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop' },
  { title: 'No-Code in 2026: Framer vs Webflow Through a Designer\'s Eyes', author: 'Artem Meshkov', role: 'UI/UX Designer', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop' },
  { title: 'The Glass Is Half Empty: How Apple\'s Boldest Redesign Missed the Point', author: 'Ernest Asanov', role: 'Lead Designer', image: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=800&auto=format&fit=crop' },
  { title: 'From Block to Brand: Three Linocut Lessons for Digital Products', author: 'Yaroslava Yatsuba', role: 'Illustrator', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop' },
  { title: 'Systemic Micro-Interactions: Elevating Utility into Delight', author: 'Daria Savina', role: 'Creative Developer', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop' }
];

const labExperiments = [
  { id: 1, title: 'Fluid Cursor 2.0', category: 'Interaction Design', color: '#1D1D1F', textColor: '#ffffff' },
  { id: 2, title: 'WebGL Distortion', category: '3D Graphics', color: '#00E5FF', textColor: '#1D1D1F' },
  { id: 3, title: 'Scroll Triggered SVG', category: 'Animation', color: '#ffffff', textColor: '#1D1D1F' },
  { id: 4, title: 'Typography Matrix', category: 'Layout Experiment', color: '#f5f5f7', textColor: '#1D1D1F' },
];

const servicesOptions = ['Web Development', 'Mobile App', 'UI/UX Design', 'Branding', 'Digital Product'];
const budgetsOptions = ['< $5k', '$5k - $10k', '$10k - $25k', '$25k+'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const Home = () => {
  // Services Active Index
  const [activeService, setActiveService] = useState(0);

  // Portfolio Active Tab Filter
  const [activeTab, setActiveTab] = useState('All');

  // Contact Form State
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setErrorMessage('Please fill in your name and email address.');
      return;
    }
    setErrorMessage('');
    setSubmitted(true);
  };

  const filteredPortfolio = activeTab === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);

  return (
    <Box>
      {/* 1. Hero Section (Animated Aurora background flush to VERY TOP of screen) */}
      <Box id="hero" sx={{ position: 'relative', width: '100%', top: 0, m: 0, p: 0 }}>
        <AuroraBackground className="w-full pt-28 sm:pt-36 md:pt-44 pb-16 md:pb-24">
          <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
            <motion.div initial="hidden" animate="visible" variants={containerVariants} className="w-full">
              <Grid container spacing={4} alignItems="flex-end">
                <Grid item xs={12} md={8}>
                  <motion.div variants={itemVariants}>
                    <Typography sx={{ color: '#86868b', fontWeight: 700, textTransform: 'uppercase', mb: 2, fontSize: '0.85rem', letterSpacing: '0.08em' }}>
                      Digital Agency Studio
                    </Typography>
                  </motion.div>
                  <motion.div variants={itemVariants} className="mb-6">
                    <TextGenerateEffect 
                      words="Crafting UI/UX design, website development & brands" 
                      className="text-[clamp(2.8rem,6vw,8.5rem)] leading-[0.92] tracking-[-0.04em] font-extrabold text-[#1D1D1F]"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants} style={{ marginTop: '40px' }}>
                    <Typography sx={{ color: '#1D1D1F', fontWeight: 800, textTransform: 'uppercase', mb: 2, fontSize: '0.8rem', letterSpacing: '0.06em' }}>
                      Practice • Excellence • Recognition
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', opacity: 0.45 }}>
                      <WorkspacePremiumIcon fontSize="large" />
                      <WorkspacePremiumIcon fontSize="large" />
                      <WorkspacePremiumIcon fontSize="large" />
                    </Box>
                  </motion.div>
                </Grid>

                {/* Showreel Video Box */}
                <Grid item xs={12} md={4} sx={{ minWidth: { md: '340px' } }}>
                  <motion.div variants={itemVariants}>
                    <Box 
                      className="hover-target"
                      sx={{ 
                        width: '100%', 
                        height: { xs: 280, md: 460 }, 
                        backgroundColor: '#1D1D1F', 
                        borderRadius: '36px',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.12)'
                      }}
                    >
                      <Box sx={{
                        width: 90,
                        height: 90,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 2,
                        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                        '&:hover': { transform: 'scale(1.1)' }
                      }}>
                        <Typography sx={{ color: '#1D1D1F', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Play</Typography>
                      </Box>
                      
                      <video 
                        autoPlay 
                        muted 
                        loop 
                        playsInline 
                        style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45 }}
                      >
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                      </video>
                    </Box>
                  </motion.div>
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </AuroraBackground>
      </Box>

      {/* 2. About Section (With Background Ornaments & Glows) */}
      <Box id="about" sx={{ py: 18, position: 'relative', overflow: 'hidden' }}>
        {/* Ambient Glow Orb */}
        <div className="ambient-orb ambient-orb-cyan" style={{ width: 450, height: 450, top: -100, right: -100 }} />

        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 }, position: 'relative', zIndex: 2 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
            
            {/* Section Ornament Badge */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Typography sx={{ color: '#00E5FF', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.14em', fontFamily: '"Space Grotesk", sans-serif' }}>
                // 01. ABOUT STUDIO
              </Typography>
              <Box sx={{ flexGrow: 1, height: '1px', backgroundColor: 'rgba(0,0,0,0.06)' }} />
              <Typography sx={{ color: '#a1a1a6', fontWeight: 700, fontSize: '0.8rem', fontFamily: '"Space Grotesk", sans-serif' }}>+</Typography>
            </Box>

            <Box sx={{ mb: 8 }}>
              <Typography variant="h2" sx={{ color: '#1D1D1F', fontWeight: 800, maxW: '900px' }}>
                We design digital products that resonate & endure.
              </Typography>
            </Box>

            <Grid container spacing={6} alignItems="center" sx={{ mb: 12 }}>
              <Grid item xs={12} md={7}>
                <Typography sx={{ fontSize: 'clamp(1.4rem, 2.5vw, 2.5rem)', fontWeight: 600, color: '#1D1D1F', lineHeight: 1.25, letterSpacing: '-0.02em' }}>
                  We are an independent digital agency studio focusing on intuitive user experience, robust architecture, and high-impact brand identities. We bridge the gap between aesthetics and performance.
                </Typography>
              </Grid>
              <Grid item xs={12} md={5}>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Box sx={{ p: 4, borderRadius: '24px', backgroundColor: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                      <Typography variant="h3" sx={{ color: '#00E5FF', fontWeight: 900 }}>50+</Typography>
                      <Typography sx={{ color: '#86868b', fontWeight: 600, fontSize: '0.95rem' }}>Global Projects</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ p: 4, borderRadius: '24px', backgroundColor: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                      <Typography variant="h3" sx={{ color: '#1D1D1F', fontWeight: 900 }}>98%</Typography>
                      <Typography sx={{ color: '#86868b', fontWeight: 600, fontSize: '0.95rem' }}>Client Retention</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/* Team / Culture Masonry */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: { xs: 4, md: 0 } }}>
              {teamPhotos.map((item, index) => (
                <Box 
                  key={item.id}
                  className="hover-target"
                  component={motion.div}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  sx={{ 
                    width: { xs: '100%', md: 'calc(50% - 20px)' },
                    mt: { xs: 0, md: index % 2 !== 0 ? 10 : 0 },
                    mb: 4
                  }}
                >
                  <Box 
                    sx={{ 
                      width: '100%',
                      height: { xs: 350, md: 520 },
                      backgroundColor: item.color, 
                      borderRadius: '36px',
                      p: 6,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      border: item.color === '#ffffff' ? '1px solid rgba(0,0,0,0.08)' : 'none',
                      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), boxShadow 0.4s ease',
                      boxShadow: '0 15px 40px rgba(0,0,0,0.05)',
                      '&:hover': {
                        transform: 'scale(0.985)'
                      }
                    }}
                  >
                    <Typography variant="h3" sx={{ fontWeight: 800, color: item.textColor, mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontWeight: 600, color: item.textColor, opacity: 0.8, fontSize: '1.1rem' }}>
                      {item.subtitle}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* 3. Services Section (With Background Ornaments) */}
      <Box id="services" sx={{ py: 18, position: 'relative', overflow: 'hidden' }}>
        {/* Ambient Glow Orb */}
        <div className="ambient-orb ambient-orb-purple" style={{ width: 500, height: 500, bottom: -150, left: -100 }} />

        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 }, position: 'relative', zIndex: 2 }}>
          {/* Section Ornament Badge */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Typography sx={{ color: '#00E5FF', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.14em', fontFamily: '"Space Grotesk", sans-serif' }}>
              // 02. SERVICES SHOWCASE
            </Typography>
            <Box sx={{ flexGrow: 1, height: '1px', backgroundColor: 'rgba(0,0,0,0.06)' }} />
            <Typography sx={{ color: '#a1a1a6', fontWeight: 700, fontSize: '0.8rem', fontFamily: '"Space Grotesk", sans-serif' }}>+</Typography>
          </Box>

          <Box sx={{ mb: 10 }}>
            <Typography variant="h2" sx={{ color: '#1D1D1F', fontWeight: 800 }}>
              We build strong products
            </Typography>
          </Box>

          <Grid container spacing={8}>
            {/* Left Column: Interactive Service Accordion List */}
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {servicesList.map((service, index) => (
                  <Box 
                    key={index} 
                    onMouseEnter={() => setActiveService(index)}
                    onClick={() => setActiveService(index)}
                    sx={{ 
                      borderBottom: '1px solid #e5e5ea',
                      py: 5,
                      cursor: 'pointer',
                      opacity: activeService === index ? 1 : 0.4,
                      transition: 'opacity 0.3s ease'
                    }}
                    className="hover-target"
                  >
                    <Typography variant="h3" sx={{ fontWeight: 800, color: '#1D1D1F', mb: 3, letterSpacing: '-0.02em' }}>
                      {service.category}
                    </Typography>
                    <Grid container spacing={2}>
                      {service.items.map((item, i) => (
                        <Grid item xs={12} sm={6} key={i}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#00E5FF' }} />
                            <Typography sx={{ fontSize: '1.05rem', fontWeight: 600, color: '#1D1D1F' }}>{item}</Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                ))}
              </Box>
            </Grid>

            {/* Right Column: Sticky Visual Preview */}
            <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box sx={{ position: 'sticky', top: '15vh', height: '65vh', width: '100%', borderRadius: '36px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.08)' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      backgroundColor: servicesList[activeService].color,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'absolute',
                      padding: '32px'
                    }}
                  >
                    <Typography variant="h3" sx={{ fontWeight: 900, color: '#1D1D1F', opacity: 0.35, textAlign: 'center', mb: 2 }}>
                      {servicesList[activeService].imageText}
                    </Typography>
                    <Typography sx={{ fontWeight: 700, color: '#1D1D1F', opacity: 0.5 }}>
                      Interactive Service Visual
                    </Typography>
                  </motion.div>
                </AnimatePresence>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 4. Portfolio Section */}
      <Box id="work" sx={{ py: 18, position: 'relative' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
          {/* Section Ornament Badge */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Typography sx={{ color: '#00E5FF', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.14em', fontFamily: '"Space Grotesk", sans-serif' }}>
              // 03. CURATED DIGITAL CATALOG
            </Typography>
            <Box sx={{ flexGrow: 1, height: '1px', backgroundColor: 'rgba(0,0,0,0.06)' }} />
            <Typography sx={{ color: '#a1a1a6', fontWeight: 700, fontSize: '0.8rem', fontFamily: '"Space Grotesk", sans-serif' }}>+</Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'flex-end' }, mb: 6, gap: 3 }}>
            <Box>
              <Typography variant="h2" sx={{ color: '#1D1D1F', fontWeight: 800 }}>
                Curated Digital Catalog
              </Typography>
            </Box>
          </Box>

          {/* Filter Tabs */}
          <Box sx={{ mb: 8, borderBottom: '1px solid #e5e5ea' }}>
            <Tabs 
              value={activeTab} 
              onChange={(e, v) => {
                e.preventDefault();
                setActiveTab(v);
              }}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '& .MuiTabs-indicator': { height: 3, backgroundColor: '#00E5FF' },
                '& .MuiTab-root': {
                  textTransform: 'lowercase',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  color: '#1D1D1F',
                  mr: 4,
                  px: 0,
                  '&.Mui-selected': { color: '#00E5FF' }
                }
              }}
            >
              {categories.map((cat) => (
                <Tab key={cat} label={cat} value={cat} disableRipple />
              ))}
            </Tabs>
          </Box>

          {/* Project Grid */}
          <Box sx={{ minHeight: 500 }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <AnimatePresence mode="popLayout">
                {filteredPortfolio.map((item, index) => (
                  <ProjectCard key={item.id} item={item} index={index} />
                ))}
              </AnimatePresence>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 5. Smooth Marquee Notes / Blog Section */}
      <Box id="notes" sx={{ py: 18, backgroundColor: '#ffffff', overflow: 'hidden', position: 'relative' }}>
        {/* Ambient Glow Orb */}
        <div className="ambient-orb ambient-orb-cyan" style={{ width: 400, height: 400, top: 50, right: 100 }} />

        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 }, mb: 6, position: 'relative', zIndex: 2 }}>
          {/* Section Ornament Badge */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Typography sx={{ color: '#00E5FF', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.12em' }}>
              // 04. EDITORIAL NOTES
            </Typography>
            <Box sx={{ flexGrow: 1, height: '1px', backgroundColor: 'rgba(0,0,0,0.06)' }} />
            <Typography sx={{ color: '#a1a1a6', fontWeight: 700, fontSize: '0.8rem' }}>+</Typography>
          </Box>

          <Typography variant="h2" sx={{ color: '#1D1D1F', fontWeight: 800 }}>
            Read our highly-opinionated notes
          </Typography>
        </Container>

        {/* 60fps Smooth Continuous Infinite Marquee */}
        <Marquee speed={40}>
          {blogPosts.map((post, index) => (
            <Box 
              key={index}
              className="hover-target group"
              sx={{ 
                width: { xs: '320px', sm: '420px', md: '480px' },
                height: '540px',
                borderRadius: '36px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                flexShrink: 0,
                boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                '&:hover .bg-image': {
                  transform: 'scale(1.06)'
                }
              }}
            >
              {/* Background Image */}
              <img
                className="bg-image"
                src={post.image}
                alt={post.title}
                loading="lazy"
                decoding="async"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                  zIndex: 1
                }}
              />
              
              {/* Dark Overlay */}
              <Box 
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(29,29,31,0.92) 0%, rgba(29,29,31,0.2) 60%, rgba(0,0,0,0) 100%)',
                  zIndex: 2
                }}
              />

              {/* Content Overlay */}
              <Box sx={{ position: 'relative', zIndex: 3, height: '100%', p: 5, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Box sx={{ 
                    width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(12px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
                    transition: 'all 0.3s ease',
                    '&:hover': { background: '#00E5FF', color: '#1D1D1F' }
                  }}>
                    <ArrowForwardIcon fontSize="small" />
                  </Box>
                </Box>

                <Box>
                  <Typography variant="h4" sx={{ color: '#ffffff', fontWeight: 800, lineHeight: 1.2, mb: 3, fontSize: '1.7rem' }}>
                    {post.title}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ width: 42, height: 42, borderRadius: '50%', background: '#00E5FF' }} />
                    <Box>
                      <Typography sx={{ fontWeight: 800, color: '#ffffff', fontSize: '0.95rem' }}>{post.author}</Typography>
                      <Typography sx={{ color: '#d2d2d7', fontWeight: 600, fontSize: '0.85rem' }}>{post.role}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Marquee>
      </Box>

      {/* 6. Experimental Lab Section */}
      <Box id="lab" sx={{ py: 18, position: 'relative' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
          {/* Section Ornament Badge */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Typography sx={{ color: '#00E5FF', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.12em' }}>
              // 05. DESIGN LAB & PROTOTYPING
            </Typography>
            <Box sx={{ flexGrow: 1, height: '1px', backgroundColor: 'rgba(0,0,0,0.06)' }} />
            <Typography sx={{ color: '#a1a1a6', fontWeight: 700, fontSize: '0.8rem' }}>+</Typography>
          </Box>

          <Box sx={{ mb: 10 }}>
            <Typography variant="h2" sx={{ color: '#1D1D1F', fontWeight: 800 }}>
              The Design Lab
            </Typography>
          </Box>

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
                  width: { xs: '100%', md: 'calc(50% - 20px)' },
                  mt: { xs: 0, md: index % 2 !== 0 ? 10 : 0 },
                  mb: 4,
                  height: '460px',
                  background: experiment.color,
                  borderRadius: '36px',
                  p: 6,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.4s ease, boxShadow 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  border: experiment.color === '#ffffff' ? '1px solid rgba(0,0,0,0.08)' : 'none',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                  '&:hover': {
                    transform: 'scale(0.985)'
                  }
                }}
              >
                <Box sx={{ zIndex: 2 }}>
                  <Typography sx={{ color: experiment.textColor === '#ffffff' ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.4)', fontWeight: 800, fontSize: '0.85rem', mb: 1, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {experiment.category}
                  </Typography>
                  <Typography variant="h3" sx={{ color: experiment.textColor, fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                    {experiment.title}
                  </Typography>
                </Box>

                <Box sx={{ zIndex: 2, display: 'flex', justifyContent: 'flex-end' }}>
                  <Button 
                    variant="outlined"
                    sx={{ 
                      borderRadius: '100px', 
                      borderColor: experiment.textColor, 
                      color: `${experiment.textColor} !important`,
                      fontWeight: 700,
                      px: 3
                    }}
                  >
                    View Experiment
                  </Button>
                </Box>
                
                {/* Abstract shape */}
                <Box sx={{ 
                  position: 'absolute', 
                  bottom: -60, 
                  right: -60, 
                  width: 280, 
                  height: 280, 
                  borderRadius: '50%', 
                  background: experiment.textColor === '#ffffff' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)',
                  zIndex: 1
                }} />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* 7. Contact / CTA Section */}
      <Box id="contact" sx={{ py: 22, position: 'relative', overflow: 'hidden' }}>
        {/* Ambient Glow Orb */}
        <div className="ambient-orb ambient-orb-cyan" style={{ width: 500, height: 500, bottom: -100, left: '50%', transform: 'translateX(-50%)' }} />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          {/* Section Ornament Badge */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <Typography sx={{ color: '#00E5FF', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.12em' }}>
              // 06. GET IN TOUCH
            </Typography>
            <Box sx={{ flexGrow: 1, height: '1px', backgroundColor: 'rgba(0,0,0,0.06)' }} />
            <Typography sx={{ color: '#a1a1a6', fontWeight: 700, fontSize: '0.8rem' }}>+</Typography>
          </Box>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Typography variant="h1" sx={{ color: '#1D1D1F', mb: 6, lineHeight: 1.05 }}>
              Got a project <br />
              in mind? <br />
              <span style={{ color: '#00E5FF' }}>Let's talk.</span>
            </Typography>

            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <Box 
                  sx={{ 
                    mt: 6, 
                    p: 6, 
                    borderRadius: '30px', 
                    backgroundColor: '#ffffff', 
                    border: '2px solid #00E5FF',
                    textAlign: 'center',
                    boxShadow: '0 20px 40px rgba(0,229,255,0.1)'
                  }}
                >
                  <CheckCircleIcon sx={{ fontSize: 64, color: '#00E5FF', mb: 2 }} />
                  <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, color: '#1D1D1F' }}>
                    Request Received!
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#86868b', fontSize: '1.15rem', mb: 4 }}>
                    Thank you, {name}. We will review your project details and respond within 24 hours.
                  </Typography>
                  <Button 
                    variant="outlined" 
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                      setSelectedServices([]);
                      setSelectedBudget('');
                    }}
                    sx={{ borderRadius: '100px', px: 4, py: 1.5, borderColor: '#1D1D1F', color: '#1D1D1F' }}
                  >
                    Send Another Request
                  </Button>
                </Box>
              </motion.div>
            ) : (
              <Box sx={{ mt: 8 }}>
                {errorMessage && (
                  <Alert severity="error" sx={{ mb: 4, borderRadius: '16px' }}>
                    {errorMessage}
                  </Alert>
                )}
                <form onSubmit={handleContactSubmit} noValidate autoComplete="off">
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    
                    {/* Services Selector */}
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2.5 }}>I'm interested in...</Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                        {servicesOptions.map((service) => (
                          <Box 
                            key={service}
                            className="hover-target"
                            onClick={() => toggleService(service)}
                            sx={{ 
                              border: selectedServices.includes(service) ? '2px solid #00E5FF' : '1px solid #d2d2d7',
                              backgroundColor: selectedServices.includes(service) ? '#00E5FF' : '#ffffff',
                              borderRadius: '100px',
                              px: 3, py: 1.2,
                              cursor: 'pointer',
                              color: selectedServices.includes(service) ? '#1D1D1F' : '#1D1D1F',
                              fontWeight: 700,
                              fontSize: '0.95rem',
                              transition: 'all 0.2s ease',
                              boxShadow: '0 4px 14px rgba(0,0,0,0.02)',
                              '&:hover': {
                                borderColor: '#00E5FF'
                              }
                            }}
                          >
                            {service}
                          </Box>
                        ))}
                      </Box>
                    </Box>

                    {/* Inputs */}
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 4 }}>
                      <TextField 
                        fullWidth 
                        required
                        placeholder="Your Name *" 
                        variant="standard" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        sx={{ '& .MuiInputBase-root': { fontSize: '1.3rem', py: 1 } }}
                      />
                      <TextField 
                        fullWidth 
                        required
                        placeholder="Your Email *" 
                        variant="standard" 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{ '& .MuiInputBase-root': { fontSize: '1.3rem', py: 1 } }}
                      />
                    </Box>

                    <TextField 
                      fullWidth 
                      placeholder="Tell us about your project..." 
                      variant="standard" 
                      multiline
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      sx={{ '& .MuiInputBase-root': { fontSize: '1.3rem', py: 1 } }}
                    />

                    {/* Budget Selector */}
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2.5 }}>Project Budget</Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                        {budgetsOptions.map((budget) => (
                          <Box 
                            key={budget}
                            className="hover-target"
                            onClick={() => setSelectedBudget(budget)}
                            sx={{ 
                              border: selectedBudget === budget ? '2px solid #00E5FF' : '1px solid #d2d2d7',
                              backgroundColor: selectedBudget === budget ? '#00E5FF' : '#ffffff',
                              borderRadius: '100px',
                              px: 3, py: 1.2,
                              cursor: 'pointer',
                              color: selectedBudget === budget ? '#1D1D1F' : '#1D1D1F',
                              fontWeight: 700,
                              fontSize: '0.95rem',
                              transition: 'all 0.2s ease',
                              boxShadow: '0 4px 14px rgba(0,0,0,0.02)',
                              '&:hover': {
                                borderColor: '#00E5FF'
                              }
                            }}
                          >
                            {budget}
                          </Box>
                        ))}
                      </Box>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                      <Button 
                        type="submit" 
                        className="hover-target" 
                        variant="contained" 
                        size="large" 
                        endIcon={<SendIcon />} 
                        sx={{ px: 6, py: 2, fontSize: '1.1rem', borderRadius: '100px', backgroundColor: '#1D1D1F', '&:hover': { backgroundColor: '#00E5FF', color: '#1D1D1F' } }}
                      >
                        Submit Request
                      </Button>
                    </Box>
                  </Box>
                </form>
              </Box>
            )}
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
