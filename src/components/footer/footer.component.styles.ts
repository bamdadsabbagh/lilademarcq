import styled, {css} from 'styled-components';
import {FOOTER_HEIGHT} from '../../constants';
import {mediaQueries} from '../../app/styles/breakpoints';

export const Footer = styled.div`
  flex-direction: column;

  span:after {
    display: none;
  }

  ${mediaQueries.above.mobile} {
    height: calc(${FOOTER_HEIGHT} - 1rem);
    font-size: 0.9em;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    font-style: italic;

    user-select: none;
  }
`;

interface SpanProps {
  noAfter?: boolean;
}

const SpanAfter = css`
  &:after {
    margin: 0 0.2em;
    content: '|';
  }
`;

export const Span = styled.span<SpanProps>`
  ${({noAfter}) => !noAfter && SpanAfter};
`;
