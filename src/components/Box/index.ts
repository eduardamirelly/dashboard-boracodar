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
    },
    gap: {
      32: {
        gap: '2rem',
      },
      60: {
        gap: '3.75rem',
      },
    },
  },
});
