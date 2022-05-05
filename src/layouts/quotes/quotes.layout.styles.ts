import styled from 'styled-components';
import {fontSpectral} from '../../app/styles/fonts';
import {mediaQueries} from '../../app/styles/breakpoints';

interface QuoteProps {
  backgroundColor: string;
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
`;

export const QuoteClose = styled.div`
  grid-column: 3;
  grid-row: 3;
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

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  padding: 0 1em;
`;

export const BannerImage = styled.div`
  width: 8em;

  ${mediaQueries.above.mobile} {
    width: 12em;
  }
`;

export const BannerText = styled.div`
  width: 100%;

  font-size: 0.6em;

  ${mediaQueries.above.mobile} {
    font-size: 0.8em;
  }
`;
