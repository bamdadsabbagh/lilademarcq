import styled from 'styled-components';
import {simpleTransition} from '../../app/styles/transitions';
import {fontMontserrat} from '../../app/styles/fonts';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const gap = 30;

export const PointerLayer = styled.div`
  position: absolute;
  display: flex;

  width: 100%;
  height: 100%;

  z-index: 10;

  // right
  cursor: pointer;

  // left
  &:before {
    content: '';
    width: ${gap}%;
    cursor: pointer;
  }

  // center
  &:after {
    content: '';
    width: ${100 - 2 * gap}%;
    cursor: zoom-in;
  }
`;

export const Images = styled.div`
  position: relative;
  //overflow: hidden;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

const ImageSide = styled(ImageContainer)`
  position: absolute;
  opacity: 0.3;
  filter: grayscale(100%);
`;

export const ImagePrevious = styled(ImageSide)`
  transform: translate3d(-102%, 0, 0);
`;

export const ImageCurrent = styled(ImageContainer)`
`;

export const ImageNext = styled(ImageSide)`
  transform: translate3d(102%, -100%, 0);
`;

export const Features = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  position: absolute;

  width: 100%;
  height: 100%;

  pointer-events: none;
`;

export const Dots = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 0.3em;

  position: absolute;

  padding: 1.4em 2em;
`;

interface DotProps {
  active: boolean;
}

export const Dot = styled.span<DotProps>`
  display: block;

  width: 0.8em;
  height: 0.8em;

  border-radius: 100%;

  background: ${(props) => props.active ? props.theme.antracite : props.theme.white};
  opacity: 0.9;

  ${simpleTransition('background')};

  pointer-events: fill;

  z-index: 20;

  &:hover {
    cursor: pointer;
    background: red;
  }
`;

interface CaptionProps {
  hide: boolean;
}

export const Caption = styled.div<CaptionProps>`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  position: absolute;

  width: 100%;
  padding: 1em 0;

  overflow: hidden;

  span {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    height: 2.5em;

    padding: 0 0.8em;

    border-top-left-radius: 0.5em;
    border-bottom-left-radius: 0.5em;

    background: rgba(255, 255, 255, 0.85);

    transform: translateX(${({hide}) => hide ? 120 : 0}%);
    ${simpleTransition('transform', 0.3)};

    ${fontMontserrat};
    font-size: 0.8em;
  }
`;
