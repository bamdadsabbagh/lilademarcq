import styled, {css} from 'styled-components';
import {mediaQueries} from '../../app/styles/breakpoints';
import {MAX_WIDTH} from '../../constants';

interface EmblaProps {
  height?: number;
}

export const Embla = styled.div<EmblaProps>`
  position: relative;
  //padding: 20px;
  //max-width: 670px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: ${({height}) => height ? `${height}px` : 'auto'};
`;

export const EmblaViewport = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const EmblaContainer = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  //margin-left: -10px;
  margin-left: -11px;
  height: 100%;
`;

interface EmblaSlideProps {
  hasLoaded: boolean;
}

const EmblaSlideInnerLoaded = css`
  opacity: 1;
`;

export const EmblaSlide = styled.div<EmblaSlideProps>`
  padding-left: 10px;
  min-width: 100%;
  height: 100%;
  position: relative;

  ${({hasLoaded}) => hasLoaded && EmblaSlideInnerLoaded};
`;

export const EmblaSlideInner = styled.div<EmblaSlideProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  //height: 190px;
  height: 100%;
  overflow: hidden;

  span {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    min-height: 100%;
    min-width: 100%;
    max-width: none;
    opacity: 0;
    transform: translate(-50%, -50%);
    transition: opacity 0.2s ease-in-out;
    object-fit: cover;
    //width: auto;
    width: 0;

    ${({hasLoaded}) => hasLoaded && EmblaSlideInnerLoaded};
  }
`;

const EmblaButtonDisabled = css`
  cursor: default;
  opacity: 0.3;
`;

const EmblaButton = styled.div<{disabled: boolean;}>`
  outline: 0;
  cursor: pointer;
  background-color: transparent;
  touch-action: manipulation;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  border: 0;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  //fill: #1bcacd;
  fill: ${({theme}) => theme.white};
  padding: 0;

  svg {
    width: 100%;
    height: 100%;
  }

  ${({disabled}) => disabled && EmblaButtonDisabled};
`;

export const EmblaButtonPrev = styled(EmblaButton)`
  left: 27px;
`;

export const EmblaButtonNext = styled(EmblaButton)`
  right: 27px;
`;

export const Features = styled.div`
  position: absolute;
  pointer-events: none;
  inset: 0;
`;

export const Badge = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;

  pointer-events: none;
  user-select: none;

  width: 125%;
  top: -55px;
  transform: scale(0.5);

  ${mediaQueries.above.mobile} {
    width: min(90%, ${MAX_WIDTH});
    top: -60px;
    transform: scale(1);
  }
`;
