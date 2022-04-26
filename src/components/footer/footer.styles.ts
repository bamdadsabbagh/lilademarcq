import styled from 'styled-components';
import {FadeInHeroAnimation} from '../../app/styles/animations';
import {tf} from '../../app/styles/timers';

export const Footer = styled.footer`
  display: flex;
  justify-content: center;

  padding: 4em 0;
  //padding: 5% 0;

  font-style: italic;
  font-size: 0.9em;

  user-select: none;

  opacity: 0;
  animation: ${FadeInHeroAnimation} calc(1s * ${tf}) forwards calc(1.1s * ${tf});
`;

export const Span = styled.span<{noAfter?: number;}>`
  &:after {
    margin: 0 ${(props) => props.noAfter ? 0 : '0.2em'};
    content: '${(props) => props.noAfter ? '' : '|'}';
  }
`;
