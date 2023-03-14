import { styled } from "../../styles/stitches.config";

export const CircleProgressContainer = styled('div', {
  position: 'relative',

  height: '200px',
  width: '200px',
  borderRadius: '50%',
  backgroundColor: '$violetLight',
});

export const CircleProgressContent = styled('div', {
  position: 'absolute',

  height: '200px',
  width: '200px',
  borderRadius: '50%',
});

export const CircleProgressPercentage = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  height: '150px',
  width: '150px',
  borderRadius: '50%',
  backgroundColor: '$violetDark',
});

export const CircleProgressValue = styled('span', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});
