import styled, {css} from 'styled-components';
import {FOOTER_HEIGHT} from '../../constants';
import {mediaQueries} from '../../app/styles/breakpoints';

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: calc(${FOOTER_HEIGHT} - 1rem);
  font-size: 0.9em;

  font-style: italic;

  user-select: none;

  span:after {
    display: none;
  }

  ${mediaQueries.above.mobile} {
    flex-direction: row;

    span:after {
      display: inline-block;
    }
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
