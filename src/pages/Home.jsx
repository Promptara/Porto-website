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
import { Link } from 'react-router-dom';

const services = [
  { title: 'Website Development', icon: <WebIcon fontSize="large" color="primary" />, desc: 'Custom, high-performance websites tailored to your business needs.' },
  { title: 'WordPress Development', icon: <CodeIcon fontSize="large" color="primary" />, desc: 'Scalable and manageable WordPress solutions and themes.' },
  { title: 'Graphic Design', icon: <DesignServicesIcon fontSize="large" color="primary" />, desc: 'Stunning visual assets that communicate your brand effectively.' },
  { title: 'UI/UX Design', icon: <ViewQuiltIcon fontSize="large" color="primary" />, desc: 'Intuitive and engaging user interfaces for web and mobile apps.' },
  { title: 'Logo Design', icon: <DrawIcon fontSize="large" color="primary" />, desc: 'Memorable and unique logos that define your brand identity.' },
  { title: 'Digital Products', icon: <ShoppingBagIcon fontSize="large" color="primary" />, desc: 'Premium digital goods, templates, and UI kits ready for use.' },
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
      <Container maxWidth="lg" sx={{ pt: { xs: 8, md: 15 }, pb: 10 }}>
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <motion.div variants={itemVariants}>
                <Typography variant="h1" gutterBottom>
                  Crafting <span className="text-gradient-primary">Digital</span> Experiences that Inspire.
                </Typography>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Typography variant="h5" color="text.secondary" sx={{ mb: 4, maxWidth: '80%', lineHeight: 1.6 }}>
                  Promptara is a premium digital agency specializing in modern web development, stunning graphic design, and top-tier digital products.
                </Typography>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap'}}>
                  <Button sx={{color:"white"}} variant="contained" size="large" component={Link} to="/portfolio" endIcon={<ArrowForwardIcon />}>
                    View Our Work
                  </Button>
                  <Button variant="outlined" size="large" component={Link} to="/contact" sx={{ borderColor: 'rgba(0, 255, 234, 0.65)', color: '#000000ff', '&:hover': { borderColor: '#00ffd5ff' }}}>
                    Let's Talk
                  </Button>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      {/* Services Section */}
      <Box sx={{ py: 10, background: 'rgba(0,0,0,0.02)', borderTop: '1px solid rgba(0,0,0,0.05)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <Container maxWidth="lg">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
            <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6 }}>
              Our <span className="text-gradient">Services</span>
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
              {services.map((service, index) => (
                <Box 
                  key={index} 
                  sx={{ 
                    width: { 
                      xs: '100%', 
                      sm: 'calc(50% - 16px)', 
                      md: 'calc(33.333% - 22px)' 
                    } 
                  }}
                >
                  <motion.div variants={itemVariants} style={{ height: '100%' }}>
                    <Card sx={{ height: '100%', minHeight: 260, display: 'flex', flexDirection: 'column', p: 2 }}>
                      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Box sx={{ mb: 2, width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', background: 'rgba(94, 190, 196, 0.15)' }}>
                          {service.icon}
                        </Box>
                        <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                          {service.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {service.desc}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Box>
              ))}
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="md" sx={{ py: 15, textAlign: 'center' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
          <Typography variant="h2" gutterBottom>
            Ready to start your next project?
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Partner with us to bring your vision to life with modern, elegant, and user-centric design.
          </Typography>
          <Button variant="contained" size="large" component={Link} to="/contact">
            Get a Free Consultation
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home;
