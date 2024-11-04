export type Theme = 'blue' | 'red';

export interface FilmData {
  title: string;
  description: string;
  synopsis: string;
  image1: string;
  image2: string;
  image3: string;
}

export type FilmDataWithTheme = Record<Theme, FilmData>;

export const filmsData: FilmDataWithTheme = {
  blue: {
    title: 'To Every You I Have Loved Before',
    description: 'A story about love',
    synopsis: 'A story about love',
    image1: '/hero-blue.png',
    image2: '/image-blue.png',
    image3: '/image-blue.png',
  },
  red: {
    title: 'To Me, The One Who Loved You',
    description: 'A story about love',
    synopsis: 'A story about love',
    image1: '/hero-red.png',
    image2: '/image-red.png',
    image3: '/image-red.png',
  },
};
