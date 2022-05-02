import styled, {css} from 'styled-components';
import {mediaQueries} from '../../app/styles/breakpoints';
import {MAX_WIDTH, PADDING} from '../../constants';
import {FullHeight} from '../../app/styles/common';

const PaddingFull = css`
  padding: ${PADDING} 0;
`;

const PaddingSmallTop = css`
  padding: calc(${PADDING} * 0.5) 0 ${PADDING} 0;
`;

const PositionRelative = css`
  position: relative;
`;

interface StyledSectionProps {
  backgroundColor: string;
  isHero: boolean;
  minHeight: string;
}

export const Section = styled.section<StyledSectionProps>`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  overflow: hidden;

  background: ${(props) => props.backgroundColor ? props.backgroundColor : 'none'};

  ${({isHero}) => isHero && FullHeight};
  ${({isHero}) => isHero && PositionRelative};

  min-height: ${({minHeight}) => minHeight};
`;

interface WrapperProps {
  isSmallTop: boolean;
  isHero: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  ${PaddingFull};
  ${({isSmallTop}) => isSmallTop && PaddingSmallTop};

  width: 90vw;

  ${mediaQueries.above.fullhd} {
    width: 80vw;
    max-width: ${MAX_WIDTH};
  }
`;
