import styled, {css} from 'styled-components';
import {Dispatch, SetStateAction} from 'react';
import {mediaQueries} from '../../../../app/styles/breakpoints';
import {simpleTransition} from '../../../../app/styles/transitions';
import {
  SlideLeftCloseAnimation,
  SlideLeftOpenAnimation,
} from '../../../../app/styles/animations';

const size = '4rem';
const lineSize = 22;
const t = 0.3;

const getTime = (closing: boolean) => ({
  menu: closing ? 0 : 0.35,
  line: closing ? 0.35 : 0.3,
  circle: closing ? 0.9 : 0,
});

export const BurgerContainer = styled.div`
  ${mediaQueries.above.tablet} {
    display: none;
  }

  position: absolute;

  &:hover {
    cursor: pointer;
  }

  font-size: 1.5em;
  height: ${size};
  min-width: 80%;
  overflow-x: clip;

  z-index: -2;
  isolation: isolate;
  pointer-events: none;
`;

interface BurgerProps {
  close: boolean;
}

const CircleClose = css`
  cursor: pointer;
  transform: rotate3d(0, 0, 1, -90deg);
`;

interface BNavTitleProps {
  active: boolean;
}

export const BNavTitle = styled.span<BNavTitleProps>`
  position: absolute;
  z-index: 1;

  width: auto;
  height: ${size};

  left: 51pt;

  text-transform: uppercase;
  pointer-events: ${({active}) => active ? 'auto' : 'none'};

  display: flex;
  justify-content: flex-start;
  align-items: center;

  opacity: ${({active}) => active ? 1 : 0};
  ${simpleTransition('opacity')};
  transition-delay: ${({active}) => active ? 0.67 : 0}s;
`;

export const Circle = styled.div<BurgerProps>`
  z-index: 3;
  pointer-events: auto;

  width: ${size};
  height: ${size};

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

interface ExpandableLineProps {
  close?: boolean;
  size: number;
}

const LineFirstClosed = css`
  height: ${lineSize}px;
  transform: translateY(0);
`;

export const ExpandableLine = styled(Line)<ExpandableLineProps>`
  height: ${({size}) => size * 0.89}px;
  transform: translateY(${({size}) => ((size * 0.89 - lineSize) * 0.5)}px);

  ${({close}) => close && LineFirstClosed};

  ${simpleTransition('height, transform', t)};
  transition-delay: ${({close}) => getTime(close).line}s;
`;

interface BNavProps {
  open: boolean;
  firstRender: boolean;
  setFirstRender: Dispatch<SetStateAction<boolean>>;
}

const BNavOpen = css<BNavProps>`
  ${SlideLeftOpenAnimation(t * 2, t)};
  animation-delay: ${({open}) => getTime(open).menu}s;
`;

const BNavClose = css`
  ${SlideLeftCloseAnimation(t * 2, t * 0.3)};
`;

const BNavFirstRender = css`
  opacity: 0;
`;

export const BNav = styled.nav<BNavProps>`
  margin-left: calc(3rem - 4px);

  position: absolute;
  pointer-events: ${({open}) => !open ? 'none' : 'auto'};

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

  ${({open, firstRender, setFirstRender}) => {
    if (!open && firstRender) {
      return BNavFirstRender;
    }

    if (open) {
      if (firstRender) {
        setFirstRender(false);
      }
      return BNavOpen;
    } else {
      return BNavClose;
    }
  }};

  top: -1px;
`;

interface BNavItemProps {
  active: boolean;
}

export const BNavItem = styled.span<BNavItemProps>`
  text-transform: uppercase;
  ${simpleTransition('color')};

  color: ${({theme, active}) => active ? theme.salmonDark : theme.black};

  &:hover {
    cursor: pointer;
    color: ${({theme}) => theme.salmon}
  }
`;
