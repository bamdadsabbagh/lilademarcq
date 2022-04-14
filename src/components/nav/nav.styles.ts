import styled, {css} from 'styled-components';
import {tf, to} from '../../app/styles/timers';
import {mediaQueries} from '../../app/styles/breakpoints';
import {
  NavSpacerAnimationKeyframes,
  SlideInAnimation,
} from '../../app/styles/animations';

export const AnimationDelay = css<{k: number;}>`
  animation-delay: calc((0.7s + ${to}s * ${({k}) => k}) * ${tf});
`;

export const StyledSection = styled.section`
  height: 2em;
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  grid-gap: 1px;

  height: 100%;

  font-family: Montserrat, sans-serif;

  font-size: 1em;

  ${mediaQueries.above.widescreen} {
    font-size: 1.2em;
  }
`;

export const StyledSpacer = styled.span<{k: number;}>`
  border-left: 1px solid ${({theme}) => theme.black};
  height: 1em;
  opacity: 0;
  animation: ${NavSpacerAnimationKeyframes} calc(0.9s * ${tf}) forwards calc(0.5s * ${tf});
  ${AnimationDelay};
`;

export const StyledItem = styled.li<{k: number; active?: boolean;}>`
  opacity: 0;
  transition: color calc((0.1s + ${to}s) * ${tf}) ease;
  animation: ${SlideInAnimation} calc(0.9s * ${tf}) forwards calc(0.5s * ${tf});
  ${AnimationDelay};
`;
