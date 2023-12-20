import styled from 'styled-components';
import {mediaQueries} from '../../app/styles/breakpoints';
import {fontSpectral} from '../../app/styles/fonts';

export const Quotes = styled.div`
  display: block;

  ${mediaQueries.above.tablet} {
    background: ${({theme}) => theme.salmonLight};

    display: grid;
    grid-template-columns: repeat(auto-fill, 1fr);
    grid-template-rows: repeat(auto-fill, 1fr);
    gap: 1em;

    & > * {
      background: transparent !important;
    }

    & > :nth-child(1) {
      grid-row: 1 / span 3;
      grid-column: 1 / span 8;
    }

    & > :nth-child(2) {
      grid-row: 2 / span 3;
      grid-column: 8 / span 8;
    }

    & > :nth-child(3) {
      grid-row: 4 / span 3;
      grid-column: 2 / span 8;
    }

    & > :nth-child(4) {
      grid-row: 7 / span 3;
      grid-column: 6 / span 8;
    }
  }
`;

interface QuoteProps {
  backgroundColor: string;
  children: JSX.Element[];
}

export const Quote = styled.div<QuoteProps>`
  ${fontSpectral};

  display: grid;
  grid-template-columns: 3em 1fr 3em;
  grid-template-rows: 3em 1fr 3em auto;
  gap: 0.5em;

  align-items: center;

  padding: 3em 3em;

  background: ${(props) => props.backgroundColor};
`;

export const QuoteOpen = styled.div`
  grid-column: 1;
  grid-row: 1;

  user-select: none;
`;

export const QuoteClose = styled.div`
  grid-column: 3;
  grid-row: 3;

  user-select: none;
`;

export const Body = styled.div`
  grid-column: 2;
  grid-row: 1 / 4;
  font-weight: 200;
`;

export const Author = styled.h3`
  grid-column: 2;
  grid-row: 4;
  font-weight: 300;
  text-align: right;
  padding-right: 1pt;
`;
