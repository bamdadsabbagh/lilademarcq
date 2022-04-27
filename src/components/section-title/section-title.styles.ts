import styled, {css} from 'styled-components';
import {AlignKeys} from './section-title.component';
import {PADDING} from '../../constants';
import {fontFarmhouse} from '../../app/styles/fonts';

interface TitleProps {
  align: AlignKeys;
  color: string;
  paddingLeft: boolean;
}

const paddingLeftStyle = css`
  padding-left: ${PADDING}rem;
`;

export const Title = styled.h2<TitleProps>`
  padding-bottom: calc(${PADDING}rem - 0.5rem);
  ${({paddingLeft}) => paddingLeft && paddingLeftStyle}

  color: ${({color}) => color};

  ${fontFarmhouse};
  font-size: 3em;

  text-align: ${({align}) => align};
`;
