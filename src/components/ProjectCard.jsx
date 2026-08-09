import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const ProjectCard = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box 
      component={motion.div}
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="hover-target"
      sx={{ 
        width: { 
          xs: '100%', 
          md: 'calc(50% - 24px)' 
        },
        mt: { xs: 0, md: index % 2 !== 0 ? 15 : 0 },
        cursor: 'none'
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box 
          sx={{ 
            width: '100%',
            height: { xs: 400, md: 700 }, // Massive height
            backgroundColor: '#e5e5ea', 
            borderRadius: '40px',
            mb: 4,
            overflow: 'hidden',
            position: 'relative',
            transform: 'translateZ(0)' // Hardware acceleration
          }}
        >
          {/* Default Image State */}
          <motion.div
            initial={false}
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#d2d2d7' }}
          >
             <Typography sx={{ fontWeight: 900, color: '#ffffff', fontSize: '2rem' }}>POSTER {item.id}</Typography>
          </motion.div>

          {/* Video Hover State */}
          <motion.div
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
          >
            {/* Using a placeholder open source video */}
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            >
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </Box>
        
        {/* Title & Category */}
        <Box>
          <Typography variant="h3" sx={{ fontWeight: 800, color: '#1D1D1F', mb: 1, letterSpacing: '-0.02em' }}>
            {item.title}
          </Typography>
          <Typography variant="body1" sx={{ color: '#00E5FF', fontWeight: 700, textTransform: 'lowercase', fontSize: '1.2rem' }}>
            {item.category}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;
