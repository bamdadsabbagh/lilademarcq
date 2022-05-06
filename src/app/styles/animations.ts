import {css, FlattenSimpleInterpolation, keyframes} from 'styled-components';
import {tf} from './timers';

const SlideLeftOpenKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const SlideLeftOpenAnimation = (start = 0.9, finish = 0.4): FlattenSimpleInterpolation => css`
  animation: ${SlideLeftOpenKeyframes} calc(${start}s * ${tf}) forwards calc(${finish}s * ${tf});
`;

const SlideLeftCloseKeyframes = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-10%);
  }
`;

export const SlideLeftCloseAnimation = (start = 0.9, finish = 0.4): FlattenSimpleInterpolation => css`
  animation: ${SlideLeftCloseKeyframes} calc(${start}s * ${tf}) forwards calc(${finish}s * ${tf});
`;

const WiggleKeyframes = keyframes`
  0% {
    transform: translateY(-5%);
  }
  50% {
    transform: translateY(5%);
  }
  100% {
    transform: translateY(-5%);
  }
`;

export const WiggleAnimation = (start = 1.3): FlattenSimpleInterpolation => css`
  animation: ${WiggleKeyframes} calc(${start}s * ${tf}) ease infinite;
`;
