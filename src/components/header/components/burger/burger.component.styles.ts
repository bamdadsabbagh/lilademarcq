import {Ref} from 'react';
import styled, {css} from 'styled-components';
import {
  SlideLeftCloseAnimation,
  SlideLeftOpenAnimation,
} from '../../../../app/styles/animations';
import {mediaQueries} from '../../../../app/styles/breakpoints';
import {simpleTransition} from '../../../../app/styles/transitions';

const burgerSize = '4rem';
const lineSize = 22;
const t = 0.3;

const getTime = (closing: boolean) => ({
  menu: closing ? 0 : 0.35,
  line: closing ? 0.35 : 0.3,
  circle: closing ? 0.9 : 0,
});

interface BurgerContainerProps {
  children: JSX.Element[];
  ref: Ref<HTMLDivElement>;
}

export const BurgerContainer = styled.div<BurgerContainerProps>`
  ${mediaQueries.above.tablet} {
    display: none;
  }

  position: absolute;

  &:hover {
    cursor: pointer;
  }

  font-size: 1.5em;
  height: ${burgerSize};
  min-width: 80%;
  overflow-x: clip;

  z-index: -2;
  isolation: isolate;
  pointer-events: none;
`;

const CircleClose = css`
  cursor: pointer;
  transform: rotate3d(0, 0, 1, -90deg);
`;

interface BNavTitleProps {
  active: boolean;
  children: string;
  onClick: () => void;
}

export const BNavTitle = styled.span<BNavTitleProps>`
  position: absolute;
  z-index: 1;

  width: auto;
  height: ${burgerSize};

  left: 51pt;

  text-transform: uppercase;
  pointer-events: ${({active}) => (active ? 'auto' : 'none')};

  display: flex;
  justify-content: flex-start;
  align-items: center;

  opacity: ${({active}) => (active ? 1 : 0)};
  ${simpleTransition('opacity')};
  transition-delay: ${({active}) => (active ? 0.67 : 0)}s;
`;

interface CircleProps {
  close: boolean;
  children: JSX.Element[];
  onClick: () => void;
}

export const Circle = styled.div<CircleProps>`
  z-index: 3;
  pointer-events: auto;

  width: ${burgerSize};
  height: ${burgerSize};

  position: absolute;

  border-radius: 50%;

  background-color: ${({theme}) => theme.grayBlue};

  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;

  gap: 8px;

  ${simpleTransition('transform', t)};
  transition-delay: ${({close}) => getTime(close).circle}s;

  ${({close}) => close && CircleClose};
`;

export const Line = styled.div`
  height: ${lineSize}px;
  width: 2px;

  border: 1px solid ${({theme}) => theme.black};
  border-radius: 5px;
  background: ${({theme}) => theme.black};
`;

const LineFirstClosed = css`
  height: ${lineSize}px;
  transform: translateY(0);
`;

interface ExpandableLineProps {
  close?: boolean;
  size: number;
}

export const ExpandableLine = styled(Line)<ExpandableLineProps>`
  height: ${({size}) => size * 0.89}px;
  transform: translateY(${({size}) => (size * 0.89 - lineSize) * 0.5}px);

  ${({close}) => close && LineFirstClosed};

  ${simpleTransition('height, transform', t)};
  transition-delay: ${({close}) => getTime(close).line}s;
`;

const BNavOpen = css<BNavProps>`
  ${SlideLeftOpenAnimation(t * 2, t)};
  animation-delay: ${({animation}) =>
    animation === 'open' && getTime(true).menu}s;
`;

const BNavClose = css`
  ${SlideLeftCloseAnimation(t * 2, t * 0.3)};
`;

const BNavFirstRender = css`
  opacity: 0;
`;

export interface BNavProps {
  animation: 'first-render' | 'open' | 'close';
  children: JSX.Element[];
  ref: Ref<HTMLDivElement>;
  onClick: () => void;
}

export const BNav = styled.nav<BNavProps>`
  margin-left: calc(3rem - 4px);

  position: absolute;
  pointer-events: ${({animation}) => (animation === 'open' ? 'auto' : 'none')};

  background: ${({theme}) => theme.white};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;

  border-radius: 10px;

  padding: 12pt 1.3em;

  height: fit-content;

  z-index: 1;

  ${({animation}) => {
    if (animation === 'first-render') {
      return BNavFirstRender;
    } else if (animation === 'open') {
      return BNavOpen;
    } else {
      return BNavClose;
    }
  }};

  top: -1px;
`;

interface BNavItemProps {
  active: boolean;
  children: string;
}

export const BNavItem = styled.span<BNavItemProps>`
  text-transform: uppercase;
  ${simpleTransition('color')};

  color: ${({theme, active}) => (active ? theme.salmonDark : theme.black)};

  &:hover {
    cursor: pointer;
    color: ${({theme}) => theme.salmon};
  }
`;
