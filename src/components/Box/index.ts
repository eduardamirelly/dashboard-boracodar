import { styled } from "../../styles/stitches.config";

export const Box = styled('div', {
  display: 'flex',

  variants: {
    direction: {
      column: {
        flexDirection: 'column',
      },
    },
    justify: {
      center: {
        justifyContent: 'center',
      },
      between: {
        justifyContent: 'space-between',
      },
    },
    align: {
      center: {
        alignItems: 'center',
      },
      stretch: {
        alignItems: 'stretch',
      },
    },
    wrap: {
      wrap: {
        flexWrap: 'wrap',
      },
    },
    gap: {
      6: {
        gap: '.375rem',
      },
      10: {
        gap: '.625rem',
      },
      16: {
        gap: '1rem',
      },
      20: {
        gap: '1.25rem',
      },
      32: {
        gap: '2rem',
      },
      60: {
        gap: '3.75rem',
      },
    },
  },
});
