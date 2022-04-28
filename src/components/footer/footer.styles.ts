import styled from 'styled-components';
import {FadeInAnimation} from '../../app/styles/animations';
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

  ${FadeInAnimation(1, 1.1)};
`;

export const Span = styled.span<{noAfter?: number;}>`
  &:after {
    margin: 0 ${(props) => props.noAfter ? 0 : '0.2em'};
    content: '${(props) => props.noAfter ? '' : '|'}';
  }
`;
