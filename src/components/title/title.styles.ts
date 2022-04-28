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
  padding-left: ${PADDING}rem;
`;

export const Title = styled.h2<TitleProps>`
  padding-bottom: calc(${PADDING}rem - 0.5rem);
  ${({paddingLeft}) => paddingLeft && PaddingLeft}

  color: ${({color}) => color};

  ${fontFarmhouse};
  font-size: 3em;

  text-align: ${({align}) => align};
`;
