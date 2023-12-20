import Image from 'next/image';
import styled, {css} from 'styled-components';
import {mediaQueries} from '../../../../app/styles/breakpoints';
import {simpleTransition} from '../../../../app/styles/transitions';

const size = 4;
const responsiveRatio = 0.6;

interface Props {
  visible: boolean;
  children: JSX.Element;
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
  grid-column: 1;
  grid-row: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  ${simpleTransition('transform, opacity')};

  height: ${size * responsiveRatio}rem;
  width: ${size * responsiveRatio}rem;

  ${mediaQueries.above.mobile} {
    height: ${size}rem;
    width: ${size}rem;
  }
`;

export const Front = styled.div<Props>`
  color: ${({theme}) => theme.salmon};
  ${Face};
  ${({visible}) => (visible ? FaceOn : FaceOff)};

  font-size: ${size * responsiveRatio}em;

  ${mediaQueries.above.mobile} {
    font-size: ${size}rem;
  }
`;

export const Back = styled.div<Props>`
  z-index: 1;
  ${Face};
  ${({visible}) => (visible ? BackOn : FaceOff)};
`;

export const StyledImage = styled(Image)`
  border-radius: 100%;
`;
