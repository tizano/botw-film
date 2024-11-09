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
    <Container htmlTag="div" className="relative flex justify-center">
      <div className={cn('relative z-10 flex gap-16 items-end justify-between', theme === 'red' && 'flex-row-reverse')}>
        <Image
          src={data.image1_synopsis}
          alt="synopsis"
          width={320}
          height={700}
          className="max-w-[280px] w-full shrink"
        />
        <div className="flex flex-col gap-4 mb-20 w-[360px] fhd:w-[420px] shrink-0">
          <h2 className="text-fluid-xl leading-[1.2] mb-10">{data.title_synopsis}</h2>
          <h3 className="text-fluid-md font-medium">{data.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: data.synopsis }}></p>
        </div>

        <div className={cn('w-full flex', theme === 'red' && 'justify-end')}>
          <Image src={data.image2_synopsis} alt="synopsis" width={600} height={840} className="shrink-0 object-cover" />
        </div>
        <div
          className={cn(
            'absolute bottom-0 z-10 ',
            theme === 'red' ? '2xl:left-0 lg:-left-8' : '2xl:right-0 lg:-right-8',
          )}
        >
          <Image src={data.image3_synopsis} alt="synopsis" width={140} height={700} className="w-[140px]" />
        </div>
      </div>
    </Container>
  </section>
);
