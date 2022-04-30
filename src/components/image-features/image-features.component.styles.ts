import styled, {css} from 'styled-components';
import {simpleTransition} from '../../app/styles/transitions';
import {fontMontserrat} from '../../app/styles/fonts';

const footerHeight = '1.5rem';

const PositionRight = css`
  right: 0;
`;

const BorderRadiusRight = css`
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
`;

const BorderRadiusLeft = css`
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
`;

const MarginBottom = css`
  margin-bottom: ${footerHeight};
`;

const DefaultCaption = css`
  span {
    padding: 0 1.5em;
  }
`;

const BigCaption = css`
  font-size: 2em;

  span {
    padding: 1.5em 3em;
  }
`;

interface FeaturesProps {
  isBig: boolean;
}

export const Features = styled.div<FeaturesProps>`
  display: flex;
  align-items: flex-end;

  position: absolute;

  width: 100%;
  height: 100%;
`;

interface DotsProps {
  isReverse: boolean;
  hasFooter: boolean;
}

export const Dots = styled.div<DotsProps>`
  display: flex;
  gap: 0.3em;

  position: absolute;
  ${({isReverse}) => isReverse && PositionRight};

  padding: 1.5em 1.6em;
  pointer-events: none;

  ${({hasFooter}) => hasFooter && MarginBottom};
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

  z-index: 2;

  &:hover {
    cursor: pointer;
    background: red;
  }
`;

interface CaptionProps {
  hide: boolean;
  isReverse: boolean;
  hasFooter: boolean;
  isBig: boolean;
}

export const Caption = styled.div<CaptionProps>`
  display: flex;

  position: absolute;
  ${({isReverse}) => !isReverse && PositionRight};
  ${({hasFooter}) => hasFooter && MarginBottom};

  width: fit-content;
  padding: 1em 0;

  overflow: hidden;

  ${({isBig}) => isBig ? BigCaption : DefaultCaption};

  span {
    user-select: none;
    z-index: 3;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    height: 2.5em;

    ${({isReverse}) => isReverse ? BorderRadiusRight : BorderRadiusLeft};

    background: rgba(255, 255, 255, 0.8);

    transform: translateX(${({hide}) => hide ? 120 : 0}%);
    ${simpleTransition('transform', 0.3)};

    ${fontMontserrat};
    font-size: 0.8em;
  }
`;

export const Footer = styled.div`
  height: ${footerHeight};
  width: 100%;
  background: ${({theme}) => theme.green};
  display: flex;
  justify-content: center;
  align-items: center;
`;
