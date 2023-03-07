import { styled } from "../../styles/stitches.config";

export const TextStyles = styled('span', {
  color: '$white',

  variants: {
    size: {
      14: {
        fontSize: '.875rem',
      },
      16: {
        fontSize: '1rem',
      },
    },
    weight: {
      regular: {
        fontWeight: 400,
      },
      medium: {
        fontWeight: 500,
      },
    },
  },
});
