import styled from 'styled-components';
import {AlignKeys} from './section-title.component';
import {PADDING} from '../../constants';
import {fontFarmhouse} from '../../app/styles/fonts';

interface TitleProps {
  align: AlignKeys;
  color: string;
}

export const Title = styled.h2<TitleProps>`
  padding-bottom: calc(${PADDING}rem - 0.5rem);
  padding-left: ${PADDING}rem;

  color: ${({color}) => color};

  ${fontFarmhouse};
  font-size: 3em;

  text-align: ${({align}) => align};
`;
