import styled from 'styled-components';
import {mediaQueries} from '../../app/styles/breakpoints';
import {FadeInHeroAnimation} from '../../app/styles/animations';
import {tf} from '../../app/styles/timers';

interface StyledSectionProps {
  backgroundColor: string;
  skipTransition: boolean;
}

export const Section = styled.section<StyledSectionProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  background: ${(props) => props.backgroundColor ? props.backgroundColor : 'none'};

  opacity: 0;
  animation: ${FadeInHeroAnimation} calc(1s * ${tf}) forwards calc(${({skipTransition}) => skipTransition ? 0 : 1.1}s * ${tf});
`;

export const Wrapper = styled.div`
  padding: 4rem 0;

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
