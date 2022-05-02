import styled from 'styled-components';
import {mediaQueries} from '../../app/styles/breakpoints';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2.2em;
  padding: 1em 0;

  ${mediaQueries.above.mobile} {
    gap: 4em;
    padding: 3em 0;
  }
`;
