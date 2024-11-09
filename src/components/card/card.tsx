'use client';
import { cn } from '@/lib/utils';
import { useAnimation, Variants } from 'framer-motion';
import * as motion from 'framer-motion/client';
import Image from 'next/image';
import { useState } from 'react';
import './card.css';

interface CardProps {
  src: string;
  isSelected: boolean;
  onClick: (e: React.MouseEvent) => void;
  rotation: { x: number; y: number };
  zIndex: number;
}

export const Card: React.FC<CardProps> = ({ src, isSelected, onClick, rotation, zIndex }) => {
  const [, setIsAnimationPlaying] = useState(false);
  const cardAnimationControls = useAnimation();

  const cardVariants: Variants = {
    init: {
      y: 0,
    },
    anim: {
      y: 30,
      transition: {
        duration: 1,
        ease: 'easeIn',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };

  return (
    <motion.div
      key={Date.now()}
      animate={cardAnimationControls}
      variants={cardVariants}
      onMouseEnter={() => {
        if (!isSelected) {
          cardAnimationControls.start('anim');
          setIsAnimationPlaying(true);
        }
      }}
      onMouseLeave={() => {
        if (!isSelected) {
          cardAnimationControls.stop();
          setIsAnimationPlaying(false);
        }
      }}
      className="card-container relative"
      onClick={onClick}
      style={{ zIndex: zIndex }}
    >
      <div
        className={cn(`card ${isSelected ? 'selected' : ''}`)}
        style={{
          transform: isSelected ? `scale(1.1) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` : 'scale(1)',
          transition: 'transform 0.15s ease, box-shadow 0.15s ease', // Smooth transition
        }}
      >
        <Image src={src} alt="custom card" className="card-image" width={400} height={800} />
        <div className="card-overlay"></div>
      </div>
    </motion.div>
  );
};
