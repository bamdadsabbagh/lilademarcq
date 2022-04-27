import styled from 'styled-components';
import {FadeInAnimation} from '../../app/styles/animations';

export const Footer = styled.footer`
  display: flex;
  justify-content: center;

  padding: 4em 0;
  //padding: 5% 0;

  font-style: italic;
  font-size: 0.9em;

  user-select: none;

  ${FadeInAnimation(1, 1.1)}
`;

export const Span = styled.span<{noAfter?: number;}>`
  &:after {
    margin: 0 ${(props) => props.noAfter ? 0 : '0.2em'};
    content: '${(props) => props.noAfter ? '' : '|'}';
  }
`;
