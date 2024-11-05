import { ReenieBeanieSans } from '@/app/fonts/fonts';
import { Theme } from '@/data/data';
import { cn } from '@/lib/utils';
import { AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import * as motion from 'framer-motion/client';
import { useRef, useState } from 'react';
import { Container } from './container';
import { IconPortal } from './icon-portal';

interface HeaderProps {
  title: string;
  className?: string;
  toggleTheme: (theme: Theme) => void;
  theme: Theme;
}

export const Header: React.FC<HeaderProps> = ({ title, toggleTheme, theme, className }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [, setIsScrollTop] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollYRef = useRef(0);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const difference = y - lastScrollYRef.current;
    if (Math.abs(difference) > 10) {
      setIsHidden(difference > 0);
      setIsScrollTop(y > 10);
      lastScrollYRef.current = y;
    }
  });

  const handleToggleTheme = (theme: Theme) => {
    toggleTheme(theme === 'blue' ? 'red' : 'blue');
  };
  return (
    <AnimatePresence>
      <motion.header
        animate={isHidden ? 'hidden' : 'visible'}
        onFocusCapture={() => setIsHidden(false)}
        variants={{ hidden: { y: '-100%' }, visible: { y: '0%' } }}
        transition={{ duration: 0.25 }}
        className={cn(
          'fixed top-0 left-0 right-0 w-full transition-colors z-50',
          theme === 'blue' ? 'shadow-primary-inset bg-primary-400' : 'shadow-primary-inset bg-secondary-400',
          className,
        )}
      >
        <Container htmlTag="div" className="relative flex items-center justify-center p-4 text-white">
          <h1 className={cn(ReenieBeanieSans.className, 'text-fluid-lg')}>{title}</h1>
          <button className="absolute right-4 top-1/2 -translate-y-1/2" onClick={() => handleToggleTheme(theme)}>
            <IconPortal />
          </button>
        </Container>
      </motion.header>
    </AnimatePresence>
  );
};
