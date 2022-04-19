import {css, FlattenSimpleInterpolation} from 'styled-components';
import {tf, to} from './timers';

export const simpleTransition = (
  target: string,
  duration = 0.2,
): FlattenSimpleInterpolation => css`
  transition-property: ${target};
  transition-duration: calc((${duration}s + ${to}s) * ${tf});
  transition-timing-function: ease;
`;
