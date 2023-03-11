import { styled } from "../../styles/stitches.config";

export const CircleProgressContainer = styled('div', {

});

export const CircleProgressContent = styled('div', {
  position: 'relative',

  height: '200px',
  width: '200px',
  borderRadius: '50%',
  backgroundColor: '$violetLight',

  '& svg': {
    strokeDasharray: 200,
    strokeDashoffset: 0,
  }
});

export const CircleProgressValue = styled('span', {

});
