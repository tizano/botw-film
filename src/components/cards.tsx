import { Theme } from '@/data/data';
import { useAnimation, useInView, Variants } from 'framer-motion';
import * as motion from 'framer-motion/client';
import { useEffect, useRef, useState } from 'react';
import { Card } from './card/card';

interface CardsProps {
  theme: Theme;
}

export const Cards: React.FC<CardsProps> = ({ theme }) => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();

  const cardLeftVariants: Variants = {
    hidden: { opacity: 0, x: ['30%', '25%', 0] },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeInOut' } },
  };
  const cardRightVariants: Variants = {
    hidden: { opacity: 0, x: ['-30%', '-25%', 0] },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeInOut' } },
  };

  useEffect(() => {
    if (isInView) {
      controlsLeft.start('visible');
      controlsRight.start('visible');
    }
  }, [controlsLeft, controlsRight, isInView]);

  useEffect(() => {
    if (selectedCard !== null) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [selectedCard]);

  const handleClickOutside = () => {
    setSelectedCard(null);
  };

  const handleEscapeKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSelectedCard(null);
    }
  };

  const handleCardClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedCard(selectedCard === index ? null : index);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (selectedCard !== null) {
      const { offsetX, offsetY, target } = e.nativeEvent;
      const { clientWidth, clientHeight } = target as HTMLElement;

      const rotationY = (offsetX / clientWidth - 0.5) * 40;
      const rotationX = (offsetY / clientHeight - 0.5) * -40;

      requestAnimationFrame(() => setRotation({ x: rotationX, y: rotationY }));
    }
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div ref={ref} className="flex gap-8" onClick={(e) => e.stopPropagation()}>
      {/* Première carte */}
      <motion.div
        onMouseMove={selectedCard === 0 ? handleMouseMove : undefined}
        onMouseLeave={handleMouseLeave}
        animate={controlsLeft}
        initial="hidden"
        variants={cardLeftVariants}
      >
        <Card
          src={theme === 'blue' ? '/ticket1-1.png' : '/ticket2-1.png'}
          isSelected={selectedCard === 0}
          onClick={(e) => handleCardClick(0, e)}
          rotation={rotation}
          zIndex={selectedCard === 0 ? 2 : 1} // La carte sélectionnée aura un z-index plus élevé
        />
      </motion.div>
      {/* Deuxième carte */}
      <motion.div
        onMouseMove={selectedCard === 1 ? handleMouseMove : undefined}
        onMouseLeave={handleMouseLeave}
        className="relative"
        animate={controlsRight}
        initial="hidden"
        variants={cardRightVariants}
      >
        <Card
          src={theme === 'blue' ? '/ticket1-2.png' : '/ticket2-2.png'}
          isSelected={selectedCard === 1}
          onClick={(e) => handleCardClick(1, e)}
          rotation={rotation}
          zIndex={selectedCard === 1 ? 2 : 1} // La carte sélectionnée aura un z-index plus élevé
        />
      </motion.div>
    </div>
  );
};
