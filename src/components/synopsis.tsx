import { FilmData, Theme } from '@/data/data';
import { cn } from '@/lib/utils';
import { Variants } from 'framer-motion';
import * as motion from 'framer-motion/client';
import Image from 'next/image';
import AnimatedLines from './animated-lines';
import { Container } from './container';

interface SynopsisProps {
  theme: Theme;
  data: FilmData;
  className?: string;
}

export const Synopsis: React.FC<SynopsisProps> = ({ className, theme, data }) => {
  const blueVariants: Variants = {
    hidden: { opacity: 0, x: '-25%' },
    hiddenChar2: { opacity: 0, x: '25%' },
    visibleChar1: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
    visibleText: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeInOut', delay: 0.15 } },
    visibleImage: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeInOut', delay: 0.3 } },
    visibleChar2: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeInOut', delay: 0.45 } },
  };

  const redVariants: Variants = {
    hidden: { opacity: 0, x: '25%' },
    hiddenChar2: { opacity: 0, x: '-25%' },
    visibleChar1: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
    visibleText: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeInOut', delay: 0.15 } },
    visibleImage: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeInOut', delay: 0.3 } },
    visibleChar2: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeInOut', delay: 0.5 } },
  };

  return (
    <section
      className={cn(
        'overflow-hidden relative',
        theme === 'blue'
          ? 'bg-gradient-to-b from-primary-400 to-white'
          : 'bg-gradient-to-b from-secondary-400 to-white',
        className,
      )}
    >
      <AnimatedLines
        key={Date.now()}
        numberOfLines={10}
        color={theme === 'blue' ? 'var(--primary-800)' : 'var(--secondary-800)'}
      />
      <Container htmlTag="div" className="relative flex justify-center">
        <div
          className={cn('relative z-10 flex gap-16 items-end justify-between', theme === 'red' && 'flex-row-reverse')}
        >
          <motion.div
            className="max-w-[280px] w-full shrink"
            initial="hidden"
            animate="visibleChar1"
            variants={theme === 'blue' ? blueVariants : redVariants}
          >
            <Image src={data.image1_synopsis} alt="synopsis" width={320} height={700} className="w-full" />
          </motion.div>
          <motion.div
            className="flex flex-col gap-4 mb-20 w-[360px] fhd:w-[420px] shrink-0"
            initial="hidden"
            animate="visibleText"
            variants={theme === 'blue' ? blueVariants : redVariants}
          >
            <h2 className="text-fluid-xl leading-[1.2] mb-10">{data.title_synopsis}</h2>
            <h3 className="text-fluid-md font-medium">{data.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: data.synopsis }}></p>
          </motion.div>

          <motion.div
            className={cn('w-full flex', theme === 'red' && 'justify-end')}
            initial="hidden"
            animate="visibleImage"
            variants={theme === 'blue' ? blueVariants : redVariants}
          >
            <Image
              src={data.image2_synopsis}
              alt="synopsis"
              width={600}
              height={840}
              className="shrink-0 object-cover"
            />
          </motion.div>
          <motion.div
            className={cn(
              'absolute bottom-0 z-10 ',
              theme === 'red' ? '2xl:left-0 lg:-left-8' : '2xl:right-0 lg:-right-8',
            )}
            initial="hiddenChar2"
            animate="visibleChar2"
            variants={theme === 'blue' ? blueVariants : redVariants}
          >
            <Image src={data.image3_synopsis} alt="synopsis" width={140} height={700} className="w-[140px]" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
