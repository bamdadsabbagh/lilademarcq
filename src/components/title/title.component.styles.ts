import styled, {css} from 'styled-components';
import {AlignKeys} from './title.component';
import {PADDING} from '../../constants';
import {fontFarmhouse} from '../../app/styles/fonts';
import {mediaQueries} from '../../app/styles/breakpoints';

interface TitleProps {
  align: AlignKeys;
  color: string;
  paddingLeft: boolean;
  noPaddingBottom: boolean;
}

const PaddingLeft = css`
  padding-left: ${PADDING};
`;

const PaddingBottomNull = css`
  padding-bottom: 0 !important;
`;

export const Title = styled.h2<TitleProps>`
  padding-bottom: calc(${PADDING} * 0.7 - 0.4rem);

  color: ${({color}) => color};
  text-align: ${({align}) => align};

  ${fontFarmhouse};
  //font-size: 2.35em;
  //font-size: 2.3em;
  //padding-left: 1rem;

  font-size: 1.6em;
  padding-left: 1pt;

  ${mediaQueries.above.mobile} {
    padding-bottom: calc(${PADDING} * 0.8);

    ${({paddingLeft}) => paddingLeft && PaddingLeft}
    font-size: 1.8em;
  }

  ${mediaQueries.above.tablet} {
    font-size: 2.4em;
  }

  ${({noPaddingBottom}) => noPaddingBottom && PaddingBottomNull};
`;
