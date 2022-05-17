import styled from 'styled-components';
import {fontSpectral} from '../../app/styles/fonts';
import {mediaQueries} from '../../app/styles/breakpoints';

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: flex-start;
  gap: 3em;
  grid-template-rows: repeat(2, auto);

  ${mediaQueries.above.tablet} {
    grid-template-rows: none;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ImageContainer = styled.div`
  display: block;
  justify-self: flex-end;
  width: 100%;

  ${mediaQueries.above.tablet} {
    width: 90%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  height: 100%;

  ${fontSpectral};
  font-weight: 200;
  font-size: 1.2em;

  transform: translateY(-2px);
`;

export const TextWrapper = styled.div`
  h1 {
    font-size: 1.4em;
    margin-bottom: 1.5em;
  }

  ${mediaQueries.above.tablet} {
    h1 {
      margin-bottom: 1em;
      margin-left: -0.7em;
    }

    p {
      margin-left: 0.7em;
    }
  }

  ${mediaQueries.above.desktop} {
    h1 {
      margin-bottom: 1.5em;
      margin-left: -1em;
    }

    p {
      margin-left: 1em;
    }
  }
`;
