import styled from 'styled-components';
import {mediaQueries} from '../../app/styles/breakpoints';
import {PADDING} from '../../constants';

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

  transform: translate(0);
`;

export const Wrapper = styled.div`
  padding: ${PADDING}rem 0;

  ${mediaQueries.below.mobile} {
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
`;
