'use client';
import { Theme } from '@/data/data';
import { cn } from '@/lib/utils';
import { useAnimate, Variants } from 'framer-motion';
import * as motion from 'framer-motion/client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface IntroProps {
  theme: Theme | null;
  toggleTheme: (theme: Theme) => void;
}

export const Intro: React.FC<IntroProps> = ({ theme, toggleTheme }) => {
  const [showCta, setShowCta] = useState(true);
  const [scope, animate] = useAnimate();
  const timerBackdrop = 4000;
  useEffect(() => {
    setTimeout(() => {
      setShowCta(false);
    }, timerBackdrop);

    if (theme) {
      animate('.anim--blue', { x: '-100%' }, { ease: 'easeInOut', duration: 0.5 });
      animate('.anim--red', { x: '200%' }, { ease: 'easeInOut', duration: 0.5 });
    }
    return () => clearTimeout(timerBackdrop);
  }, [animate, theme]);

  const backdropVariants: Variants = {
    initial: {
      opacity: 0.8,
      backdropFilter: 'blur(40px)',
    },
    hide: {
      opacity: 0,
      backdropFilter: 'blur(0)',
      pointerEvents: 'none',
      transition: {
        ease: 'easeInOut',
        duration: 0.5,
      },
    },
  };

  const ctaVariants: Variants = {
    initial: {
      opacity: 0,
      y: 'calc(-50% - 20px)',
      x: '-50%',
    },
    show: {
      y: '-50%',
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        delay: 0.5,
        duration: 0.5,
      },
    },
    hide: {
      opacity: 0,
      y: 'calc(-50% + 20px)',
      pointerEvents: 'none',
      transition: {
        ease: 'easeInOut',
        duration: 0.5,
      },
    },
  };

  return (
    <div className={cn('overflow-hidden fixed left-0 top-0 right-0 bottom-0', theme && 'pointer-events-none')}>
      <motion.div
        variants={backdropVariants}
        initial="initial"
        animate={!showCta && 'hide'}
        className="flex items-center justify-center fixed left-0 top-0 right-0 bottom-0 bg-opacity-5 bg-slate-50 z-10"
      ></motion.div>
      <motion.p
        variants={ctaVariants}
        animate={showCta ? 'show' : 'hide'}
        initial="initial"
        className="text-fluid-3xl font-serif text-background uppercase absolute left-1/2 top-1/2 z-10"
      >
        Choose One
      </motion.p>
      <div className="grid grid-cols-2" ref={scope}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, x: '-100%' }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
          }}
          className={cn(
            'anim--blue h-screen grayscale hover:grayscale-0 cursor-pointer',
            theme === 'blue' && 'grayscale-0',
          )}
        >
          <Image
            src="/image-blue.png"
            alt="Affiche du film To Every You I've Loved Before"
            width={1600}
            height={1080}
            priority
            className="object-cover h-full"
            onClick={() => toggleTheme('blue')}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
          }}
          className={cn(
            'anim--red h-screen grayscale hover:grayscale-0 cursor-pointer',
            theme === 'red' && 'grayscale-0',
          )}
        >
          <Image
            src="/image-red.jpg"
            alt="Affiche du film To Me, The One Who Loved You"
            width={1600}
            height={1080}
            priority
            className="object-cover h-full"
            onClick={() => toggleTheme('red')}
          />
        </motion.div>
      </div>
    </div>
  );
};
