import styled from 'styled-components';
import {mediaQueries} from '../../../../app/styles/breakpoints';

export const Container = styled.div`
  width: 90vw;

  font-size: 1.1em;

  height: 4em;

  ${mediaQueries.above.tablet} {
    height: 0.5em;
  }
`;

export const Nav = styled.nav`
  display: none;

  ${mediaQueries.above.tablet} {
    display: grid;
    justify-content: center;
    grid-template-columns: 5em 7em 6.5em 6em 9em 6em 8em;
    //grid-template-columns: 80px 112px 96px 96px 144px 96px 128px;
  }
`;
