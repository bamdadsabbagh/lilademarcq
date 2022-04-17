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
  grid-template-columns: 4em 7em 6em 5em 8em 5em 7em;
  justify-content: center;
  align-items: flex-start;
  grid-gap: 20px;

  height: 100%;
  width: 900px;

  font-family: Montserrat, sans-serif;

  font-size: 1em;

  ${mediaQueries.above.widescreen} {
    font-size: 1.2em;
  }
`;
