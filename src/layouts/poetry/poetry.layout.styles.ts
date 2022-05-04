import styled from 'styled-components';
import {fontSpectral} from '../../app/styles/fonts';
import {simpleTransition} from '../../app/styles/transitions';
import {mediaQueries} from '../../app/styles/breakpoints';
import {TextWidthMobile} from '../../app/styles/common';

export const Body = styled.div`
  ${fontSpectral};
  font-size: 1.2em;
  padding: 0 1.2em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

interface TextContainerProps {
  isExpanded: boolean;
}

export const TextContainer = styled.div<TextContainerProps>`
  margin-top: calc(-1em - 4px);
  max-height: ${({isExpanded}) => isExpanded ? '20em' : '5em'};
  ${simpleTransition('max-height', 0.4)};
  overflow: hidden;
  ${TextWidthMobile};

  ${mediaQueries.above.tablet} {
    width: 80%;
    height: auto;

    padding-left: 6em;
    max-height: 100%;
  }

  ${mediaQueries.above.desktop} {
    padding-left: 10em;
  }

  ${mediaQueries.above.widescreen} {
    padding-left: 14em;
  }
`;

export const TriangleContainer = styled.div`
  margin-bottom: -1.5em;

  ${mediaQueries.above.tablet} {
    display: none;
  }
`;

export const Pictures = styled.div`
  display: grid;
  grid-template-columns: 42% 58%;

  width: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Illustration = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Poem = styled.div`
  //
`;

export const IllustrationWrapper = styled.div`
  background: green;
  width: 80%;
  max-width: 400px;
  height: 100%;
`;
