import styled from 'styled-components';
import {fontSizes} from '../../app/styles/font-sizes';

export const Footer = styled.footer`
  display: flex;
  justify-content: center;

  padding: 2em 0;

  font-style: italic;
  font-size: ${fontSizes.twelve};

  user-select: none;
`;

export const Span = styled.span<{noAfter?: number;}>`
  &:after {
    margin: 0 ${(props) => props.noAfter ? 0 : '0.2em'};
    content: '${(props) => props.noAfter ? '' : '|'}';
  }
`;
