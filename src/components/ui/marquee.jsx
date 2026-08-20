import React from 'react';
import { Box } from '@mui/material';

export const Marquee = ({ children, speed = 45, className = '' }) => {
  return (
    <Box 
      sx={{ 
        overflow: 'hidden', 
        width: '100%', 
        position: 'relative',
        py: 2,
        maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)'
      }}
      className={className}
    >
      <Box 
        className="animate-marquee"
        sx={{
          display: 'flex',
          gap: 4,
          alignItems: 'center',
          animationDuration: `${speed}s`,
        }}
      >
        {/* Render children twice for infinite seamless loop */}
        <Box sx={{ display: 'flex', gap: 4 }}>
          {children}
        </Box>
        <Box sx={{ display: 'flex', gap: 4 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};
