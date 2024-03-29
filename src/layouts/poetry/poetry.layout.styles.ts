import {ReactNode} from 'react';
import styled from 'styled-components';
import {mediaQueries} from '../../app/styles/breakpoints';
import {TextWidthMobile} from '../../app/styles/common';
import {fontSpectral} from '../../app/styles/fonts';
import {simpleTransition} from '../../app/styles/transitions';

interface BodyProps {
  children: JSX.Element[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

export const Body = styled.div<BodyProps>`
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
  children: ReactNode;
}

export const TextContainer = styled.div<TextContainerProps>`
  margin-top: calc(-1em - 4px);
  max-height: ${({isExpanded}) => (isExpanded ? '60em' : '5em')};
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
  grid-template-rows: repeat(2, auto);

  ${mediaQueries.above.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
