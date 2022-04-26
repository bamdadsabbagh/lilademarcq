import styled from 'styled-components';
import {mediaQueries} from '../../../../app/styles/breakpoints';

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2em;

  ${mediaQueries.below.fullhd} {
    gap: 1em;
  }
`;
