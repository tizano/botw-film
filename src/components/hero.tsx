import { cn } from '@/lib/utils';
import * as motion from 'framer-motion/client';
import { MoveDown } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
  imageUrl: string;
  className?: string;
}

export const Hero = ({ imageUrl, className }: HeroProps) => (
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
        <MoveDown size={48} color="white" />
      </motion.div>
    </motion.div>
  </section>
);
