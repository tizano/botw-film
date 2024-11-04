'use client';
import { Theme } from '@/data/data';
import { useState } from 'react';

export const useToggleTheme = () => {
  const [theme, setTheme] = useState<Theme | null>(null);

  const toggleTheme = (theme: Theme) => {
    if (theme) {
      setTheme(theme);
    } else {
      setTheme((prevTheme) => (prevTheme === 'blue' ? 'red' : 'blue'));
    }
  };

  return { theme, toggleTheme };
};
