import {css, FlattenSimpleInterpolation, keyframes} from 'styled-components';
import {tf, to} from './timers';

export const SoftSlideInKeyframes = keyframes`
  0% {
    transform: translateY(-1%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const SlideInKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SlideInAnimation = (start = 0.9, finish = 0.4): FlattenSimpleInterpolation => css`
  animation: ${SlideInKeyframes} calc(${start}s * ${tf}) forwards calc(${finish}s * ${tf});
  opacity: 0;
`;

export const DelayAnimation = (i: number): FlattenSimpleInterpolation => css`
  animation-delay: calc((0.7s + ${to}s * ${i}) * ${tf});
`;

const SlideLeftKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const SlideLeftAnimation = (start = 0.9, finish = 0.4): FlattenSimpleInterpolation => css`
  animation: ${SlideLeftKeyframes} calc(${start}s * ${tf}) forwards calc(${finish}s * ${tf});
  opacity: 0;
`;

const SlideLeftOutKeyframes = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-10%);
  }
`;

export const SlideLeftOutAnimation = (start = 0.9, finish = 0.4): FlattenSimpleInterpolation => css`
  animation: ${SlideLeftOutKeyframes} calc(${start}s * ${tf}) forwards calc(${finish}s * ${tf});
  opacity: 1;
`;

const FadeInKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: translateY(1%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const FadeInAnimation = (start = 1, finish = 1.1): FlattenSimpleInterpolation => css`
  animation: ${FadeInKeyframes} calc(${start}s * ${tf}) forwards calc(${finish}s * ${tf});
  opacity: 0;
`;

export const NavSpacerAnimationKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10%);
  }
  100% {
    opacity: 1;
    transform: translateY(0.1em);
  }
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
