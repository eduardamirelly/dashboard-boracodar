import { styled } from "../../styles/stitches.config";

export const BoardContainer = styled('div', {
  backgroundColor: '$violetMedium',
  borderRadius: '1rem',
  boxShadow: '3px 4px 26px rgba(0, 0, 0, 0.25)',

  paddingBlock: '3rem',
  paddingInline: '2rem',

  width: '296px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '2rem',

  variants: {
    align: {
      center: {
        alignItems: 'center',
      },
      start: {
        alignItems: 'flex-start',
      },
    },
  },
});
