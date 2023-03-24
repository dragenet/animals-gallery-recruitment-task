import { Theme } from '~/theme/types';

export const theme: Theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000',
    indigo: '#0282c4',
    mint: '#5ad6a7',
  },
  gradients: {
    backgroundDefault: 'linear-gradient(45deg, rgba(90,214,167,1) 0%, rgba(2,130,196,1) 100%)',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
};

export type Colors = keyof typeof theme.colors;
