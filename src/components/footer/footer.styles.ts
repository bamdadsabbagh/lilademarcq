import styled from 'styled-components';
import {FadeInAnimation} from '../../app/styles/animations';
import {FOOTER_HEIGHT} from '../../constants';

export const Footer = styled.div`
  height: ${FOOTER_HEIGHT};

  display: flex;
  justify-content: center;
  align-items: center;

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
