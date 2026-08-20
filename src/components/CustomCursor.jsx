import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const springConfig = { stiffness: 600, damping: 30, mass: 0.4 };
  const smoothX = useSpring(rawX, springConfig);
  const smoothY = useSpring(rawY, springConfig);

  useEffect(() => {
    // Only enable custom cursor on fine-pointer devices (desktop mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsFinePointer(mediaQuery.matches);

    const handleMediaChange = (e) => setIsFinePointer(e.matches);
    mediaQuery.addEventListener('change', handleMediaChange);

    const updateMousePosition = (e) => {
      rawX.set(e.clientX - 12);
      rawY.set(e.clientY - 12);
    };

    let currentHovering = false;
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      const isInteractive =
        target.tagName?.toLowerCase() === 'a' ||
        target.tagName?.toLowerCase() === 'button' ||
        target.closest?.('a') ||
        target.closest?.('button') ||
        target.classList?.contains('hover-target');

      if (isInteractive !== currentHovering) {
        currentHovering = Boolean(isInteractive);
        setIsHovering(currentHovering);
      }
    };

    if (mediaQuery.matches) {
      window.addEventListener('mousemove', updateMousePosition, { passive: true });
      window.addEventListener('mouseover', handleMouseOver, { passive: true });
    }

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [rawX, rawY]);

  if (!isFinePointer) return null;

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 24,
        height: 24,
        backgroundColor: isHovering ? 'rgba(0, 229, 255, 0.25)' : 'transparent',
        border: isHovering ? '2px solid #00E5FF' : '2px solid rgba(29, 29, 31, 0.7)',
        backdropFilter: isHovering ? 'blur(4px)' : 'none',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        willChange: 'transform',
        transform: 'translateZ(0)',
        x: smoothX,
        y: smoothY,
        scale: isHovering ? 2 : 1,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    />
  );
};

export default CustomCursor;
