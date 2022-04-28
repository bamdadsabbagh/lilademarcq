import styled from 'styled-components';
import {mediaQueries} from '../../../../app/styles/breakpoints';

export const Container = styled.div`
  width: 90vw;

  font-size: 1.1em;

  ${mediaQueries.below.tablet} {
    height: 4rem;
  }

  ${mediaQueries.above.tablet} {
    height: 1rem;
  }
`;

export const Nav = styled.nav`
  ${mediaQueries.below.tablet} {
    display: none;
  }

  display: grid;
  justify-content: center;
  grid-template-columns: 5em 7em 6.5em 6em 9em 6em 8em;
  //grid-template-columns: 80px 112px 96px 96px 144px 96px 128px;
`;
