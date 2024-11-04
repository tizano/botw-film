'use client';
import { Hero } from '@/components/hero';
import { Intro } from '@/components/intro';
import { Synopsis } from '@/components/synopsis';
import { useToggleTheme } from '@/components/toggle-theme';
import { useEffect, useState } from 'react';

import { FilmData, filmsData } from '@/data/data';

export default function Home() {
  const { theme, toggleTheme } = useToggleTheme();
  const [data, setData] = useState<FilmData>({
    title: '',
    description: '',
    synopsis: '',
    image1: '',
    image2: '',
    image3: '',
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
        <main className="min-h-screen" style={{ backgroundColor: theme }}>
          <header>
            <h1>{data.title}</h1>
            <nav>
              <button onClick={() => toggleTheme('blue')}>Blue</button>
              <button onClick={() => toggleTheme('red')}>Red</button>
            </nav>
          </header>
          <article>
            <Hero imageUrl={data.image1} />
            <video src="/video.mp4" controls></video>
            <Synopsis />
          </article>
        </main>
      )}
    </>
  );
}
