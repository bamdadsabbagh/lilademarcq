import styled from 'styled-components';
import {mediaQueries} from '../../app/styles/breakpoints';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: flex-start;
  gap: 1em;

  ${mediaQueries.above.mobile} {
    gap: 2em;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-self: flex-end;

  width: 100%;
  height: 100%;

  max-width: 20rem;

  img {
    object-fit: cover;
    min-width: 10em;
    min-height: 20em;
    object-position: 55% 0;
  }
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
