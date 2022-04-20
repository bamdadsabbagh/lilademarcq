import styled from 'styled-components';
import {fontFarmhouse} from '../../app/styles/fonts';
import {AlignKeys} from './section-title.component';

interface TitleProps {
  align: AlignKeys;
  color: string;
  bottomPadding: number;
}

export const Title = styled.h2<TitleProps>`
  margin-bottom: ${({bottomPadding}) => bottomPadding}em;

  color: ${({color}) => color};

  ${fontFarmhouse};
  font-size: 4em;

  text-align: ${({align}) => align};
`;
