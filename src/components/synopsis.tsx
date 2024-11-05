import { FilmData, Theme } from '@/data/data';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import AnimatedLines from './animated-lines';
import { Container } from './container';

interface SynopsisProps {
  theme: Theme;
  data: FilmData;
  className?: string;
}

export const Synopsis: React.FC<SynopsisProps> = ({ className, theme, data }) => (
  <section
    className={cn(
      'overflow-hidden relative',
      theme === 'blue' ? 'bg-gradient-to-b from-primary-400 to-white' : 'bg-gradient-to-b from-secondary-400 to-white',
      className,
    )}
  >
    <AnimatedLines
      key={Date.now()}
      numberOfLines={10}
      color={theme === 'blue' ? 'var(--primary-800)' : 'var(--secondary-800)'}
    />
    <Container htmlTag="div" className="relative">
      <div className={cn('relative z-10 flex gap-16 items-end justify-between', theme === 'red' && 'flex-row-reverse')}>
        <div className={cn('flex items-end justify-between', theme === 'red' && 'flex-row-reverse')}>
          <Image src={data.image1_synopsis} alt="synopsis" width={320} height={700} />
          <div className="flex flex-col gap-4 mb-20">
            <h2 className="text-fluid-md font-bold">{data.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: data.synopsis }}></p>
          </div>
        </div>

        <div className={cn('w-full flex', theme === 'red' && 'justify-end')}>
          <Image src={data.image2_synopsis} alt="synopsis" width={600} height={840} />
        </div>
      </div>
      {theme === 'blue' && data.image3_synopsis && (
        <div className="absolute right-0 bottom-0 z-10 fhd:right-[270px]">
          <Image src={data.image3_synopsis} alt="synopsis" width={320} height={700} className="w-full" />
        </div>
      )}
    </Container>
  </section>
);
