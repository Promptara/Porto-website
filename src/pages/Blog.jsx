import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import { motion } from 'framer-motion';

const blogPosts = [
  { id: 1, title: 'Form-Over-Function Mistakes, or How Not to Harm Your Business', author: 'Valeriia Bondarieva', role: 'Lead Designer', color: '#f5f5f7' },
  { id: 2, title: "No-Code in 2026: Framer vs Webflow Through a Designer's Eyes", author: 'Artem Meshkov', role: 'UI/UX Designer', color: '#e5e5ea' },
  { id: 3, title: "The Glass Is Half Empty: How Apple's Boldest Redesign Missed the Point", author: 'Ernest Asanov', role: 'Lead Designer', color: '#d2d2d7' },
  { id: 4, title: 'From Block to Brand: Three Linocut Lessons for Digital Products', author: 'Yaroslava Yatsuba', role: 'Illustrator', color: '#f5f5f7' },
  { id: 5, title: 'Why Micro-Interactions Are the New Macro-Conversions', author: 'Anna K.', role: 'Product Manager', color: '#e5e5ea' },
  { id: 6, title: 'The Death of the Hamburger Menu (And What Comes Next)', author: 'Valeriia Bondarieva', role: 'Lead Designer', color: '#d2d2d7' },
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

const Blog = () => {
  return (
    <Box sx={{ pb: 20 }}>
      {/* Hero Section */}
      <Container maxWidth="xl" sx={{ pt: '15vw', pb: 10, px: { xs: 3, md: 8 } }}>
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <Typography sx={{ color: '#a1a1a6', fontWeight: 700, textTransform: 'uppercase', mb: 2, fontSize: '0.9rem', letterSpacing: '0.05em' }}>
              Blog & Insights
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Typography variant="h1" sx={{ color: '#1D1D1F', mb: 0 }}>Expert</Typography>
            <Typography variant="h1" sx={{ color: '#1D1D1F', mb: 4 }}>opinions</Typography>
          </motion.div>
        </motion.div>
      </Container>

      {/* Blog Grid */}
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 }, mt: 5 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: { xs: 4, md: 0 } }}>
           {blogPosts.map((post, index) => (
              <Box 
                key={post.id}
                className="hover-target"
                component={motion.div}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                sx={{ 
                  width: { xs: '100%', md: 'calc(50% - 24px)' },
                  mt: { xs: 0, md: index % 2 !== 0 ? 15 : 0 },
                  height: '500px',
                  background: post.color,
                  borderRadius: '30px',
                  p: 6,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'background 0.3s, transform 0.4s ease',
                  '&:hover': {
                    background: '#e5e5ea',
                    transform: 'scale(0.98)'
                  }
                }}
              >
                <Box>
                  <Typography sx={{ color: '#00E5FF', fontWeight: 800, fontSize: '1rem', mb: 3, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Article
                  </Typography>
                  <Typography variant="h3" sx={{ color: '#1D1D1F', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                    {post.title}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <Box sx={{ width: 64, height: 64, borderRadius: '50%', background: '#d2d2d7' }} />
                  <Box>
                    <Typography sx={{ fontWeight: 800, color: '#1D1D1F', fontSize: '1.2rem' }}>{post.author}</Typography>
                    <Typography sx={{ color: '#a1a1a6', fontWeight: 700, fontSize: '1rem' }}>{post.role}</Typography>
                  </Box>
                </Box>
              </Box>
           ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;
