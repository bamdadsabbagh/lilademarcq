import styled from 'styled-components';
import {mediaQueries} from '../../app/styles/breakpoints';

export const Nav = styled.nav`
  height: 2em;
  margin: 0 2em 1em 2em;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 5em 7em 6em 6em 9em 6em 8em;
  justify-content: center;
  align-items: flex-start;

  height: 100%;
  width: 900px;

  font-family: Montserrat, sans-serif;

  font-size: 1em;

  ${mediaQueries.above.widescreen} {
    font-size: 1.2em;
  }
`;
