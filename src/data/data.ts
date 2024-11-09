export type Theme = 'blue' | 'red';

export interface FilmData {
  title: string;
  title_hero: string;
  title_synopsis: string;
  synopsis: string;
  video: string;
  image_hero: string;
  image1_synopsis: string;
  image2_synopsis: string;
  image3_synopsis: string;
}

export type FilmDataWithTheme = Record<Theme, FilmData>;

export const filmsData: FilmDataWithTheme = {
  blue: {
    title: 'To Every You I Have Loved Before',
    title_hero: 'Where each path chosen reveals a different truth',
    title_synopsis: 'Dive back into a world reimagined.',
    synopsis:
      'This film takes place in a world where traveling to parallel worlds is a common and everyday occurrence.<br /><br />The story focuses on Koyomi Takasaki, a boy who lives with his mother after his parents divorce. He tries to make friends at his preparatory school, but his social awkwardness combined with an atmosphere focused on studying causes him to fail.<br /><br />One day, his classmate Kazune Takigawa approaches him and tells him that she actually comes from World Line 85, where she and Koyomi are a couple.',
    image_hero: '/hero-blue.webp',
    image1_synopsis: '/char-blue.png',
    image2_synopsis: '/synopsis-blue.webp',
    video: 'https://www.youtube.com/embed/MvzmBuIeJmU',
    image3_synopsis: '/char-blue-2.png',
  },
  red: {
    title: 'To Me, The One Who Loved You',
    title_hero: 'Their story begins where choices converge',
    title_synopsis: 'Dive back into a world reimagined.',
    synopsis:
      "This film takes place in a world where traveling to parallel worlds is a common and everyday occurrence.<br /><br />The story focuses on Koyomi Hidaka, a boy who lives with his father after his parents' divorce. One day, he meets a girl named Shiori Satō in his father's research lab. After this encounter, they start a relationship that slowly turns into love.<br /><br />However, everything changes when their parents decide to get married. To continue their love, Koyomi and Shiori choose to move to a parallel world where they are not step-siblings.",

    image_hero: '/hero-red.webp',
    image1_synopsis: '/char-red.png',
    image2_synopsis: '/synopsis-red.webp',
    image3_synopsis: '/char-red-2.png',
    video: 'https://www.youtube.com/embed/kLbN4JtzLbU',
  },
};
