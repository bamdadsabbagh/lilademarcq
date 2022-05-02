import styled from 'styled-components';
import {mediaQueries} from '../../app/styles/breakpoints';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 3rem;
  padding: 1rem 0;

  ${mediaQueries.above.mobile} {
    gap: 4rem;
    padding: 3rem 0;
  }
`;
