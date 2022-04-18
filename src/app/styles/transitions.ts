import {css, FlattenSimpleInterpolation} from 'styled-components';
import {tf, to} from './timers';

export const simpleTransition = (target: string): FlattenSimpleInterpolation => css`
  transition-property: ${target};
  transition-duration: calc((0.2s + ${to}s) * ${tf});
  transition-timing-function: ease;
`;
