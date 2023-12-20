import styled, {css, StyledComponent} from 'styled-components';
import {simpleTransition} from '../../app/styles/transitions';
import {fontMontserrat} from '../../app/styles/fonts';

const footerHeight = '0.8em';

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
  margin-bottom: 0.5em;
`;

export const Features = styled.div`
  display: flex;
  align-items: flex-end;

  position: absolute;

  width: 100%;
  height: 100%;

  pointer-events: none;
`;

interface CaptionProps {
  hasFooter: boolean;
  isReverse?: boolean;
  children: JSX.Element;
}

export const Caption = styled.div<CaptionProps>`
  display: flex;

  position: absolute;
  ${({hasFooter}) => hasFooter && MarginBottom};
  ${({isReverse}) => !isReverse && PositionRight};

  width: fit-content;
  padding: 1em 0;

  overflow: hidden;
`;

interface CaptionBodyProps {
  active: boolean;
  isReverse?: boolean;
  children: string;
}

export const CaptionBody = styled.div<CaptionBodyProps>`
  user-select: none;
  z-index: 3;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  height: 2.5em;
  padding: 0 1.5em;

  ${({isReverse}) => isReverse ? BorderRadiusRight : BorderRadiusLeft};

  background: rgba(255, 255, 255, 0.8);

  transform: translateX(${({active}) => active ? 0 : 120}%);
  ${simpleTransition('transform', 0.3)};

  ${fontMontserrat};
  font-size: 0.8em;
`;

export const Footer = styled.div`
  height: ${footerHeight};
  width: 100%;
  background: ${({theme}) => theme.green};
  display: flex;
  justify-content: center;
  align-items: center;
`;
