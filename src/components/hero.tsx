import { cn } from '@/lib/utils';
import * as motion from 'framer-motion/client';
import Image from 'next/image';

interface HeroProps {
  imageUrl: string;
  className?: string;
}

export const Hero = ({ imageUrl, className }: HeroProps) => (
  <section className={cn('overflow-hidden h-full', className)} style={{ maxHeight: 'calc(100vh - 48px)' }}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.5,
      }}
    >
      <Image src={imageUrl} alt="hero" width={1920} height={1080} className="h-full object-cover" />
    </motion.div>
  </section>
);
