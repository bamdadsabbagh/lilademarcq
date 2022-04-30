import styled, {css} from 'styled-components';
import {AlignKeys} from './title.component';
import {PADDING} from '../../constants';
import {fontFarmhouse} from '../../app/styles/fonts';

interface TitleProps {
  align: AlignKeys;
  color: string;
  paddingLeft: boolean;
}

const PaddingLeft = css`
  padding-left: ${PADDING};
`;

export const Title = styled.h2<TitleProps>`
  //margin-top: -4px;
  padding-bottom: calc(${PADDING} - 0.5rem);
  ${({paddingLeft}) => paddingLeft && PaddingLeft}

  color: ${({color}) => color};

  ${fontFarmhouse};
  font-size: 3em;

  text-align: ${({align}) => align};
`;
