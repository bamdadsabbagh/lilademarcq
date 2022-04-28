import styled, {css} from 'styled-components';
import Image from 'next/image';
import {simpleTransition} from '../../../../app/styles/transitions';
import {mediaQueries} from '../../../../app/styles/breakpoints';

const size = 7;
const responsiveRatio = 0.6;

interface Props {
  visible: boolean;
}

export const Container = styled.div`
  display: grid;
`;

const FaceOn = css`
  transform: scale(1);
  opacity: 1;
`;

const BackOn = css`
  transform: scale(1.4);
  opacity: 1;
`;

const FaceOff = css`
  transform: scale(0);
  opacity: 0;
`;

const Face = css<Props>`
  ${mediaQueries.below.mobile} {
    height: ${size * responsiveRatio}rem;
    width: ${size * responsiveRatio}rem;
  }

  height: ${size}rem;
  width: ${size}rem;

  grid-column: 1;
  grid-row: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  ${simpleTransition('transform, opacity')};
`;

export const Front = styled.div<Props>`
  ${mediaQueries.below.mobile} {
    font-size: ${size * responsiveRatio}rem;
  }

  font-size: ${size}rem;

  color: ${({theme}) => theme.salmon};
  ${Face};
  ${({visible}) => visible ? FaceOn : FaceOff};
`;

export const Back = styled.div<Props>`
  z-index: 1;
  ${Face};
  ${({visible}) => visible ? BackOn : FaceOff};
`;

export const StyledImage = styled(Image)`
  border-radius: 100%;
`;
