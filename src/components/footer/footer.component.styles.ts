import styled, {css} from 'styled-components';
import {mediaQueries} from '../../app/styles/breakpoints';

export const Footer = styled.footer`
  width: 100%;

  display: flex;
  flex-direction: column;

  user-select: none;
`;

export const Socials = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 1em;
  padding-top: 2em;

  ${mediaQueries.above.mobile} {
    gap: 1.5em;
  }
`;

export const Links = styled.div`
  width: 100%;
  padding: 2em 0;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  font-size: 0.9em;
  font-style: italic;

  & span:after {
    display: none;
  }

  ${mediaQueries.above.mobile} {
    flex-direction: row;

    & span:after {
      display: inline-block;
    }
  }
`;

interface SpanProps {
  noAfter?: boolean;
}

const SpanAfter = css`
  &:after {
    margin: 0 2pt;
    content: '|';
  }
`;

export const Span = styled.span<SpanProps>`
  ${({noAfter}) => !noAfter && SpanAfter};
`;
