'use client';
import { Theme } from '@/data/data';
import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import * as motion from 'framer-motion/client';
import { useEffect, useRef } from 'react';

interface VideoProps {
  theme: Theme;
  videoUrl: string;
  className?: string;
}

export const Video = ({ theme, videoUrl, className }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef);

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play();
    }

    if (!isInView && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isInView, theme]);

  return (
    <section className={cn('w-full', className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.5,
        }}
      >
        <video autoPlay muted loop className="h-full w-full aspect-video" ref={videoRef}>
          <source src={`${videoUrl}#t=2`} type="video/mp4" />
        </video>
      </motion.div>
    </section>
  );
};
