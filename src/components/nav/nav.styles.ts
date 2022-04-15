import styled from 'styled-components';
import {mediaQueries} from '../../app/styles/breakpoints';

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
