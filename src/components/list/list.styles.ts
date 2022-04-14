import styled from 'styled-components';
import {mediaQueries} from '../../app/styles/breakpoints';

export const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2em;

  ${mediaQueries.below.fullhd} {
    grid-gap: 1em;
  }
`;
