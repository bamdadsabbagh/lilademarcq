import {keyframes} from 'styled-components';

export const SlideInWrapperAnimation = keyframes`
  0% {
    transform: translateY(-1%);
  }
  100% {
    transform: translateY(0%);
  }
`;

export const SlideInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FadeInHeroAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(1%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
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

export const WiggleAnimation = keyframes`
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
