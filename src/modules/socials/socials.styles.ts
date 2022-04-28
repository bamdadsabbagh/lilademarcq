import styled from 'styled-components';
import {mediaQueries} from '../../app/styles/breakpoints';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 3rem 0;
  gap: 4rem;

  ${mediaQueries.below.mobile} {
    gap: 3rem;
    padding: 1rem 0;
  }
`;
