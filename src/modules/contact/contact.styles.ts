import styled from 'styled-components';
import {mediaQueries} from '../../app/styles/breakpoints';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;

  ${mediaQueries.above.mobile} {
    gap: 2rem;
  }

  ${mediaQueries.above.tablet} {
    gap: 3rem;
  }

  ${mediaQueries.above.desktop} {
    gap: 4rem;
  }

  ${mediaQueries.above.widescreen} {
    gap: 5rem;
  }
`;

export const ImageContainer = styled.div`
  justify-self: flex-end;
  max-width: 20rem;
  width: 100%;
  height: 100%;
`;

export const TextContainer = styled.div`
  font-weight: 300;

  p {
    margin-top: 0;
  }

  hr {
    border: 0;
    height: 0.5em;
  }

  font-size: 1.3em;

  ${mediaQueries.above.mobile} {
    font-size: 1.4em;
  }
`;
