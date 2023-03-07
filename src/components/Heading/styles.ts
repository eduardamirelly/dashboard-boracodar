import { styled } from "../../styles/stitches.config";

export const HeadingStyles = styled('span', {
  color: '$white',

  variants: {
    size: {
      24: {
        fontSize: '1.5rem',
      },
      32: {
        fontSize: '2rem',
      },
    },
    weight: {
      medium: {
        fontWeight: 500,
      },
      semibold: {
        fontWeight: 600,
      },
    },
  },
});
