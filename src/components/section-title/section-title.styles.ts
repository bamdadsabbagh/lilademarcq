import styled from 'styled-components';
import {fontFarmhouse} from '../../app/styles/fonts';
import {fontSizes} from '../../app/styles/font-sizes';
import {AlignKeys} from './section-title.component';

interface TitleProps {
  align: AlignKeys;
  color: string;
}

export const Title = styled.h2<TitleProps>`
  //margin-bottom: 1em;
  margin-bottom: 0.9em;

  color: ${({color}) => color};

  ${fontFarmhouse};
    // font-size: ${fontSizes.fiftyTwo};
  font-size: 4em;
  //font-size: 52pt;

  text-align: ${({align}) => align};
`;
