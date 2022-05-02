import styled, {css} from 'styled-components';
import {FOOTER_HEIGHT} from '../../constants';
import {mediaQueries} from '../../app/styles/breakpoints';

export const Footer = styled.div`
  ${mediaQueries.below.mobile} {
    height: calc(${FOOTER_HEIGHT} * 0.7);
    font-size: 0.6em;
  }

  height: ${FOOTER_HEIGHT};
  font-size: 0.9em;

  display: flex;
  justify-content: center;
  align-items: center;

  font-style: italic;

  user-select: none;
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
