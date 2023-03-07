import { createStitches } from "@stitches/react";

import { globalCss } from "@stitches/react";

const globalStyles = globalCss({
  '@import': ["url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap')"],
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
});

globalStyles();

export const { css, styled, theme } = createStitches({
  theme: {
    fonts: {
      primary: 'Inter, sans-serif',
    },
    colors: {
      violetDark: '#292738',
      violetMedium: '#363447',
      white: '#ffffff',
    },
  },
});
