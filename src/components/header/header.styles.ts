import styled from 'styled-components';
import {
  SlideInAnimation,
  SlideInWrapperAnimation,
} from '../../app/styles/animations';
import {tf} from '../../app/styles/timers';
import {mediaQueries} from '../../app/styles/breakpoints';

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${SlideInWrapperAnimation} calc(1.3s * ${tf}) forwards calc(0.4s * ${tf});

  margin: 2em;
`;

export const StyledImage = styled.svg`
  animation: ${SlideInAnimation} calc(0.9s * ${tf}) forwards calc(0.4s * ${tf});
  opacity: 0;

  height: 6.5em;

  ${mediaQueries.below.fullhd} {
    height: 5.5em;
  }
`;
