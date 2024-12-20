import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

interface VideoProps {
  videoUrl: string;
  className?: string;
}

const getIdFromVideoUrl = (url: string) => {
  // https://www.youtube.com/embed/1O0yazhqaxs
  const urlParts = url.split('/');
  const videoId = urlParts[urlParts.length - 1];
  return videoId;
};

const Video = forwardRef<HTMLDivElement, VideoProps>(({ videoUrl, className }, ref) => (
  <section ref={ref} className={cn('w-full', className)}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.5,
      }}
    >
      <iframe
        className="h-full w-full aspect-video"
        src={`${videoUrl}?autoplay=1&mute=1&loop=1&rel=0&modestbranding=1&showinfo=0&playlist=${getIdFromVideoUrl(videoUrl)}`}
        title='"To the Only One Who Loved You, Me" and "To All of You That I Loved" Movie - Official Trailer'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </motion.div>
  </section>
));

Video.displayName = 'Video';
export { Video };
