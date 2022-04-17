import styled from 'styled-components';
import {mediaQueries} from '../../app/styles/breakpoints';
import {ContentSectionComponentProps} from './section.component';
import {FadeInHeroAnimation} from '../../app/styles/animations';
import {tf} from '../../app/styles/timers';

type StyledSectionProps =
  Pick<ContentSectionComponentProps, 'backgroundColor'>
  & {
  skipTransition: number;
};

export const Container = styled.section<StyledSectionProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.backgroundColor ? props.backgroundColor : 'none'};

  opacity: 0;
  animation: ${FadeInHeroAnimation} calc(1s * ${tf}) forwards calc(${({skipTransition}) => skipTransition ? 0 : 1.1}s * ${tf});
`;

type StyledContainerProps =
  Pick<ContentSectionComponentProps, 'width'>
  & Pick<ContentSectionComponentProps, 'verticalPadding'>

export const Content = styled.div<StyledContainerProps>`
  width: ${(props) => props.width ? props.width : 80}vw;
  padding: ${(props) => props.verticalPadding ? props.verticalPadding : 2}em 0;

  ${mediaQueries.above.mobile} {
    width: 90vw;
  }

  ${mediaQueries.above.tablet} {
    width: 90vw;
  }

  ${mediaQueries.above.desktop} {
    width: 90vw;
  }

  ${mediaQueries.above.widescreen} {
    width: 90vw;
  }

  ${mediaQueries.above.fullhd} {
    width: 80vw;
    max-width: 1200px;
  }

  ${mediaQueries.above.qhd} {
    width: 60vw;
  }
`;
