import styled, {css} from 'styled-components';
import {AlignKeys} from './title.component';
import {PADDING} from '../../constants';
import {fontFarmhouse} from '../../app/styles/fonts';
import {mediaQueries} from '../../app/styles/breakpoints';

interface TitleProps {
  align: AlignKeys;
  color: string;
  paddingLeft: boolean;
}

const PaddingLeft = css`
  padding-left: ${PADDING};
`;

export const Title = styled.h2<TitleProps>`
  padding-bottom: calc(${PADDING} - 0.5rem);
  color: ${({color}) => color};
  text-align: ${({align}) => align};

  ${fontFarmhouse};
  //font-size: 2.35em;
  font-size: 2.3em;

  ${mediaQueries.above.mobile} {
    ${({paddingLeft}) => paddingLeft && PaddingLeft}
    font-size: 2.4em;
  }

  ${mediaQueries.above.tablet} {
    font-size: 2.6em;
  }
`;