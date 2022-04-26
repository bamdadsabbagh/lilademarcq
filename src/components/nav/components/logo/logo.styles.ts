import styled from 'styled-components';
import {SlideInAnimation} from '../../../../app/styles/animations';
import {tf} from '../../../../app/styles/timers';

export const Logo = styled.svg`
  height: 100%;
  width: 100%;

  animation: ${SlideInAnimation} calc(0.9s * ${tf}) forwards calc(0.4s * ${tf});
  opacity: 0;
`;
