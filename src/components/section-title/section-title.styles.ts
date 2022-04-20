import styled from 'styled-components';
import {fontFarmhouse} from '../../app/styles/fonts';
import {AlignKeys} from './section-title.component';
import {mediaQueries} from '../../app/styles/breakpoints';

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

  ${mediaQueries.above.mobile} {
    font-size: 2.5em;
  }

  ${mediaQueries.above.tablet} {
    font-size: 2.8em;
  }

  ${mediaQueries.above.desktop} {
    font-size: 2.8em;
  }

  ${mediaQueries.above.widescreen} {
    font-size: 2.8em;
  }

  ${mediaQueries.above.fullhd} {
    font-size: 3em;
  }

  ${mediaQueries.above.qhd} {
    font-size: 4em;
  }
`;
