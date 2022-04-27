import styled from 'styled-components';
import {SlideInAnimation} from '../../../../app/styles/animations';

export const Logo = styled.svg`
  height: 100%;

  ${SlideInAnimation(0.9, 0.4)}
  opacity: 0;
`;
