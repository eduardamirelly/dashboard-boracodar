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
    },
    align: {
      center: {
        alignItems: 'center',
      },
    },
  },
});
