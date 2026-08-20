"use client";
import { cn } from "../../utils/cn";
import React from "react";

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col w-full min-h-[90vh] md:min-h-screen items-center justify-center bg-[#fafafa] text-slate-950 transition-bg overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Premium Next-Gen Liquid Glow Background (100% Smooth GPU 120fps) */}
      <div className="absolute inset-0 overflow-hidden w-full h-full pointer-events-none z-0">
        {/* Animated Gradient Blob 1: Electric Cyan */}
        <div 
          className="absolute -top-[20%] -left-[10%] w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full opacity-45 pointer-events-none animate-liquid-blob-1"
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 229, 255, 0.4) 0%, rgba(0, 229, 255, 0) 70%)',
            filter: 'blur(60px)',
            willChange: 'transform',
            transform: 'translateZ(0)'
          }}
        />

        {/* Animated Gradient Blob 2: Royal Indigo / Violet */}
        <div 
          className="absolute top-[5%] -right-[15%] w-[85vw] h-[85vw] max-w-[950px] max-h-[950px] rounded-full opacity-40 pointer-events-none animate-liquid-blob-2"
          style={{
            background: 'radial-gradient(circle at center, rgba(124, 77, 255, 0.35) 0%, rgba(124, 77, 255, 0) 70%)',
            filter: 'blur(70px)',
            willChange: 'transform',
            transform: 'translateZ(0)'
          }}
        />

        {/* Animated Gradient Blob 3: Vibrant Blue Wave */}
        <div 
          className="absolute top-[35%] left-[20%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full opacity-35 pointer-events-none animate-liquid-blob-3"
          style={{
            background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.35) 0%, rgba(59, 130, 246, 0) 70%)',
            filter: 'blur(65px)',
            willChange: 'transform',
            transform: 'translateZ(0)'
          }}
        />

        {/* Subtle Fine Micro Grid Overlay for Studio Structure */}
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1D1D1F 1px, transparent 1px),
              linear-gradient(to bottom, #1D1D1F 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Smooth Bottom Feather Transition Layer */}
      <div 
        className="absolute inset-x-0 bottom-0 h-44 sm:h-56 md:h-72 bg-gradient-to-t from-[#fafafa] via-[#fafafa]/80 to-transparent pointer-events-none z-10" 
        aria-hidden="true"
      />

      <div className="relative z-20 w-full">
        {children}
      </div>
    </div>
  );
};
