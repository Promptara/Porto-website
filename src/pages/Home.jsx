import React from 'react';
import { 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Box,
  Button,
  Container
} from '@mui/material';
import { motion } from 'framer-motion';
import WebIcon from '@mui/icons-material/Web';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DrawIcon from '@mui/icons-material/Draw';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CodeIcon from '@mui/icons-material/Code';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

const blogPosts = [
  { title: 'Form-Over-Function Mistakes, or How Not to Harm Your Business', author: 'Valeriia Bondarieva', role: 'Lead Designer' },
  { title: 'No-Code in 2026: Framer vs Webflow Through a Designer\'s Eyes', author: 'Artem Meshkov', role: 'UI/UX Designer' },
  { title: 'The Glass Is Half Empty: How Appleâ€™s Boldest Redesign Missed the Point', author: 'Ernest Asanov', role: 'Lead Designer' },
  { title: 'From Block to Brand: Three Linocut Lessons for Digital Products', author: 'Yaroslava Yatsuba', role: 'Illustrator' },
];

const featuredWork = [
  { id: 1, title: 'Corporate Portal', category: 'Website Development' },
  { id: 2, title: 'Modern E-commerce', category: 'Website Development' },
  { id: 3, title: 'Premium Blog Theme', category: 'WordPress Development' },
  { id: 4, title: 'Brand Identity Redesign', category: 'Graphic Design' },
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

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Container maxWidth="xl" sx={{ pt: '15vw', pb: 10, px: { xs: 3, md: 8 } }}>
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <Grid container spacing={4} alignItems="flex-end">
            <Grid item xs={12} md={8}>
              <motion.div variants={itemVariants}>
                <Typography sx={{ color: '#a1a1a6', fontWeight: 700, textTransform: 'uppercase', mb: 2, fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                  We are a design studio
                </Typography>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Typography variant="h1" sx={{ color: '#1D1D1F', mb: 0 }}>Crafting</Typography>
                <Typography variant="h1" sx={{ color: '#1D1D1F', mb: 0 }}>UX design</Typography>
                <Typography variant="h1" sx={{ color: '#1D1D1F', mb: 4 }}>and brands</Typography>
              </motion.div>
              <motion.div variants={itemVariants} style={{ marginTop: '60px' }}>
                <Typography sx={{ color: '#1D1D1F', fontWeight: 800, textTransform: 'uppercase', mb: 2, fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                  PRACTICE, EXCELLENCE, RECOGNITION
                </Typography>
                <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', opacity: 0.5 }}>
                  {/* Award Placeholders */}
                  <WorkspacePremiumIcon fontSize="large" />
                  <WorkspacePremiumIcon fontSize="large" />
                  <WorkspacePremiumIcon fontSize="large" />
                </Box>
              </motion.div>
            </Grid>

            {/* Mini Showreel Video */}
            <Grid item xs={12} md={4} sx={{ minWidth: { md: '350px' } }}>
               <motion.div variants={itemVariants}>
                 <Box 
                   className="hover-target"
                   sx={{ 
                     width: '100%', 
                     height: { xs: 300, md: 500 }, 
                     backgroundColor: '#e5e5ea', 
                     borderRadius: '40px',
                     overflow: 'hidden',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     position: 'relative'
                   }}
                 >
                   {/* Interactive Play Button */}
                   <Box sx={{
                     width: 100,
                     height: 100,
                     borderRadius: '50%',
                     backgroundColor: '#1D1D1F',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     zIndex: 2,
                     transition: 'transform 0.3s ease',
                     '&:hover': { transform: 'scale(1.1)' }
                   }}>
                     <Typography sx={{ color: '#ffffff', fontWeight: 800, fontSize: '1rem', textTransform: 'uppercase' }}>Play</Typography>
                   </Box>
                   
                   {/* Placeholder Video */}
                   <video 
                     autoPlay 
                     muted 
                     loop 
                     playsInline 
                     style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }}
                   >
                     <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                   </video>
                 </Box>
               </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      {/* Blog Slider Section */}
      <Box sx={{ py: 15, background: '#ffffff', overflow: 'hidden' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
              <Typography variant="h3" sx={{ color: '#1D1D1F', fontWeight: 800 }}>
                Read our highly-opinionated notes
              </Typography>
            </Box>
            
            {/* Horizontal Scroll Container */}
            <Box 
              sx={{ 
                display: 'flex', 
                gap: 4, 
                overflowX: 'auto', 
                pb: 4,
                '&::-webkit-scrollbar': { display: 'none' },
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
              }}
            >
              {blogPosts.map((post, index) => (
                <Box 
                  key={index} 
                  className="hover-target"
                  sx={{ 
                    minWidth: { xs: '85vw', md: '400px' },
                    height: '450px',
                    background: '#f5f5f7',
                    borderRadius: '30px',
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'background 0.3s',
                    '&:hover': {
                      background: '#e5e5ea'
                    }
                  }}
                >
                  <Box>
                    <Typography variant="h4" sx={{ color: '#1D1D1F', fontWeight: 800, lineHeight: 1.2 }}>
                      {post.title}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ width: 48, height: 48, borderRadius: '50%', background: '#d2d2d7' }} />
                    <Box>
                      <Typography sx={{ fontWeight: 800, color: '#1D1D1F', fontSize: '1rem' }}>{post.author}</Typography>
                      <Typography sx={{ color: '#a1a1a6', fontWeight: 600, fontSize: '0.9rem' }}>{post.role}</Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Featured Work Section */}
      <Container maxWidth="xl" sx={{ pt: 15, pb: 20, px: { xs: 3, md: 8 } }}>
        <Typography variant="h3" sx={{ color: '#1D1D1F', fontWeight: 800, mb: 10 }}>
          Featured Work
        </Typography>
        <Box sx={{ minHeight: 600 }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: { xs: 4, md: 0 } }}>
             {featuredWork.map((item, index) => (
                <ProjectCard key={item.id} item={item} index={index} />
             ))}
          </Box>
        </Box>
        <Box sx={{ mt: 15, textAlign: 'center' }}>
          <Button variant="outlined" size="large" component={Link} to="/portfolio" sx={{ px: 6, py: 3, fontSize: '1.2rem', fontWeight: 800, borderRadius: '100px' }}>
            View All Projects
          </Button>
        </Box>
      </Container>

      {/* CTA Section */}
      <Container maxWidth="xl" sx={{ py: 20, px: { xs: 3, md: 8 } }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
          <Typography variant="h1" sx={{ color: '#1D1D1F', mb: 8 }}>
            ready to <br />
            <span style={{ color: '#00E5FF' }}>start?</span>
          </Typography>
          <Button variant="contained" size="large" component={Link} to="/contact" sx={{ px: 6, py: 3, fontSize: '1.5rem', fontWeight: 800 }}>
            Let's Talk
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home;
