import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary400: 'blue',
      primary500: 'blue',
      warn400: 'yellow',
      gray100: 'gainsboro',
      gray200: 'lightgray',
      gray300: 'lightgray',
      gray600: 'lightgray',
      gray900: 'lightgray',
    },
  },
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
  },
});

export const globalStyles = globalCss({
  body: { margin: 0 },
});