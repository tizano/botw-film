'use client';
import { Hero } from '@/components/hero';
import { Intro } from '@/components/intro';
import { Synopsis } from '@/components/synopsis';
import { useToggleTheme } from '@/components/toggle-theme';
import { useEffect, useState } from 'react';

import { Header } from '@/components/header';
import { Video } from '@/components/video';
import { FilmData, filmsData } from '@/data/data';
import { cn } from '@/lib/utils';

export default function Home() {
  const { theme, toggleTheme } = useToggleTheme();
  const [data, setData] = useState<FilmData>({
    title: '',
    title_hero: '',
    title_synopsis: '',
    synopsis: '',
    image_hero: '',
    image1_synopsis: '',
    image2_synopsis: '',
    image3_synopsis: '',
    video: '',
  });

  useEffect(() => {
    if (theme) {
      setData(filmsData[theme]);
    }
  }, [theme]);

  return (
    <>
      <Intro theme={theme} toggleTheme={toggleTheme} />

      {theme && (
        <main className={cn('min-h-screen pt-[80px]', theme === 'blue' ? 'bg-primary-400' : 'bg-secondary-400')}>
          <Header title={data.title} toggleTheme={toggleTheme} theme={theme} />
          <article>
            <Hero theme={theme} title={data.title_hero} imageUrl={data.image_hero} />
            <Video videoUrl={data.video} theme={theme} className="pt-16" />
            <Synopsis data={data} theme={theme} className="pt-16 pb-40" />
          </article>
        </main>
      )}
    </>
  );
}
