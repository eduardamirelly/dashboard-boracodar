import { styled } from "../../styles/stitches.config";

export const Content = styled('div', {
  maxWidth: '1440px',
  margin: '0 auto',

  paddingInline: '2rem',
  paddingBlock: '3rem',

  '@lg': {
    paddingInline: '5rem',
    paddingBlock: '4rem',
  },
});
