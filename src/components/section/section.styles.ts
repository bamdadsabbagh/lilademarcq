import styled from 'styled-components';
import {mediaQueries} from '../../app/styles/breakpoints';
import {ContentSectionComponentProps} from './section.component';
import {FadeInHeroAnimation} from '../../app/styles/animations';
import {tf} from '../../app/styles/timers';

type StyledSectionProps =
  Pick<ContentSectionComponentProps, 'backgroundColor'>
  & {
  appLoaded: number;
};

export const StyledSection = styled.section<StyledSectionProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.backgroundColor ? props.backgroundColor : 'none'};

  opacity: 0;
  animation: ${FadeInHeroAnimation} calc(1s * ${tf}) forwards calc(${({appLoaded}) => !appLoaded ? 1.1 : 0}s * ${tf});
`;

type StyledContainerProps =
  Pick<ContentSectionComponentProps, 'width'>
  & Pick<ContentSectionComponentProps, 'verticalPadding'>

export const StyledContainer = styled.div<StyledContainerProps>`
  width: ${(props) => props.width ? props.width : 80}vw;
  padding: ${(props) => props.verticalPadding ? props.verticalPadding : 4}em 0;

  ${mediaQueries.above.tablet} {
    width: 92vw;
  }

  ${mediaQueries.above.desktop} {
    width: 90vw;
  }

  ${mediaQueries.above.widescreen} {
    width: 80vw;
  }

  ${mediaQueries.above.fullhd} {
    width: 60vw;
  }

  ${mediaQueries.above.qhd} {
    width: 45vw;
  }
`;
