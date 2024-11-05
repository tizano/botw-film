import { Theme } from '@/data/data';
import { cn } from '@/lib/utils';
import * as motion from 'framer-motion/client';
import { MoveDown } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
  title: string;
  imageUrl: string;
  theme: Theme;
  className?: string;
}

export const Hero = ({ title, imageUrl, className, theme }: HeroProps) => (
  <section className={cn('overflow-hidden h-full relative', className)} style={{ maxHeight: 'calc(100vh - 48px)' }}>
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.5,
      }}
    >
      <Image
        src={imageUrl}
        alt="hero"
        width={1920}
        height={1080}
        className="w-full h-full object-cover object-center"
      />
      <motion.div
        className={cn(
          'absolute bottom-0 left-0 px-8 py-16 pt-32 w-full bg-gradient-to-b text-white flex items-end',
          theme === 'blue' ? 'from-transparent to-primary-400' : 'from-transparent to-secondary-400',
        )}
      >
        <motion.h2
          className="text-fluid-3xl leading-[1.1] w-[60%]"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.5,
          }}
        >
          {title}
        </motion.h2>
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-12 z-10"
        transition={{
          ease: 'easeInOut',
          duration: 0.5,
          repeat: Infinity,
          repeatType: 'reverse',
          bounce: 0.5,
        }}
        animate={{ y: 20 }}
      >
        <MoveDown size={56} color="white" />
      </motion.div>
    </motion.div>
  </section>
);
