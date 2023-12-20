import styled, {css} from 'styled-components';
import {mediaQueries} from '../../app/styles/breakpoints';
import {fontFarmhouse} from '../../app/styles/fonts';
import {PADDING} from '../../constants';
import {AlignKeys} from './title.component';

const PaddingLeft = css`
  padding-left: ${PADDING};
`;

const PaddingBottomNull = css`
  padding-bottom: 0 !important;
`;

const Title = css<TitleProps>`
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

interface TitleProps {
  align: AlignKeys;
  color: string;
  paddingLeft: boolean;
  noPaddingBottom: boolean;
  children: JSX.Element | string;
}

export const PrimaryTitle = styled.h1<TitleProps>`
  ${Title};
`;

export const SecondaryTitle = styled.h2<TitleProps>`
  ${Title};
`;
