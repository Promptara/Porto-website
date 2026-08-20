import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const ProjectCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isHovered]);

  const defaultImage = item.image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop';

  return (
    <Box 
      component={motion.div}
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="hover-target group"
      sx={{ 
        width: { 
          xs: '100%', 
          md: 'calc(50% - 20px)' 
        },
        mb: { xs: 6, md: 8 },
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Main Image Container */}
      <Box 
        component="div"
        sx={{ 
          width: '100%',
          height: { xs: 320, sm: 420, md: 480 },
          borderRadius: '32px',
          overflow: 'hidden',
          position: 'relative',
          backgroundColor: '#1D1D1F',
          textDecoration: 'none',
          boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.12)'
          }
        }}
      >
        {/* Native Lazy-Loaded Image */}
        <img
          src={defaultImage}
          alt={item.title}
          loading="lazy"
          decoding="async"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: isHovered ? 'scale(1.06)' : 'scale(1)',
          }}
        />

        {/* Video Overlay on Hover (if video provided) */}
        {item.video && isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{ position: 'absolute', inset: 0, zIndex: 2 }}
          >
            <video 
              ref={videoRef}
              muted 
              loop 
              playsInline 
              preload="metadata"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            >
              <source src={item.video} type="video/mp4" />
            </video>
          </motion.div>
        )}

        {/* Subtle Dark Gradient Overlay */}
        <Box 
          sx={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'linear-gradient(to top, rgba(29,29,31,0.65) 0%, rgba(0,0,0,0) 50%, rgba(29,29,31,0.3) 100%)',
            zIndex: 3
          }} 
        />

        {/* Top Badges (Category & Year) */}
        <Box 
          sx={{ 
            position: 'absolute', 
            top: 24, 
            left: 24, 
            right: 24, 
            display: 'flex', 
            justify: 'space-between', 
            alignItems: 'center',
            zIndex: 4
          }}
        >
          <Box 
            sx={{ 
              px: 2.5, 
              py: 1, 
              borderRadius: '100px', 
              background: 'rgba(255, 255, 255, 0.25)', 
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '0.03em',
              textTransform: 'uppercase'
            }}
          >
            {item.category}
          </Box>

          {/* Floating Action Arrow */}
          <Box 
            sx={{ 
              width: 48, 
              height: 48, 
              borderRadius: '50%', 
              background: isHovered ? '#00E5FF' : 'rgba(255, 255, 255, 0.25)', 
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: isHovered ? '1px solid #00E5FF' : '1px solid rgba(255, 255, 255, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: isHovered ? '#1D1D1F' : '#ffffff',
              transition: 'all 0.3s ease',
              transform: isHovered ? 'rotate(-45deg) scale(1.1)' : 'rotate(0deg) scale(1)'
            }}
          >
            <ArrowForwardIcon sx={{ fontSize: '1.2rem' }} />
          </Box>
        </Box>

        {/* Bottom Floating Title Info over image */}
        <Box sx={{ position: 'absolute', bottom: 24, left: 28, right: 28, zIndex: 4 }}>
          <Typography variant="h3" sx={{ fontWeight: 800, color: '#ffffff', fontSize: { xs: '1.4rem', md: '1.75rem' }, letterSpacing: '-0.02em', mb: 0.5 }}>
            {item.title}
          </Typography>
          {item.client && (
            <Typography sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', fontWeight: 600 }}>
              Client: {item.client} {item.year ? `• ${item.year}` : ''}
            </Typography>
          )}
        </Box>
      </Box>
      
      {/* Bottom Tags Metadata */}
      {item.tags && item.tags.length > 0 && (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2.5, px: 1 }}>
          {item.tags.map((tag, i) => (
            <Chip 
              key={i} 
              label={tag} 
              size="small" 
              sx={{ 
                backgroundColor: '#f5f5f7', 
                color: '#1D1D1F', 
                fontWeight: 700, 
                fontSize: '0.8rem',
                borderRadius: '8px'
              }} 
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ProjectCard;
