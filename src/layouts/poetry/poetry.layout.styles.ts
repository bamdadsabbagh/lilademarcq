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
  gap: 2em;
`;

interface TextContainerProps {
  isExpanded: boolean;
}

export const TextContainer = styled.div<TextContainerProps>`
  margin-top: -1em;
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
  margin-bottom: -2em;

  ${mediaQueries.above.tablet} {
    display: none;
  }
`;
