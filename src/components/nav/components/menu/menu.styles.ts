import styled, {css} from 'styled-components';
import {tf, to} from '../../../../app/styles/timers';
import {SlideInAnimation} from '../../../../app/styles/animations';
import {simpleTransition} from '../../../../app/styles/transitions';

interface StyledContainerProps {
  index: number;
  noLeft?: number;
  noRight?: number;
}

const AnimationDelay = css<Pick<StyledContainerProps, 'index'>>`
  animation-delay: calc((0.7s + ${to}s * ${({index}) => index}) * ${tf});
`;

export const Cell = styled.div<StyledContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-left: -1px;
  border-left: ${({noLeft}) => noLeft ? 0 : '1px'} solid black;
  border-right: ${({noRight}) => noRight ? 0 : '1px'} solid black;

  z-index: 100;

  user-select: none;

  opacity: 0;

  animation: ${SlideInAnimation} calc(0.9s * ${tf}) forwards calc(0.5s * ${tf});
  ${AnimationDelay};
`;

interface StyledMainProps {
  isActive?: number;
  isOpen?: number;
  isLink?: boolean;
}

const handleMainColor = (props) => {
  const {theme, isActive, isOpen} = props;

  if (isActive) {
    return theme.salmonDark;
  } else if (isOpen) {
    return theme.grayDark;
  } else {
    return theme.black;
  }
};

export const Text = styled.div<StyledMainProps>`
  text-transform: uppercase;
  cursor: ${({isLink}) => isLink ? 'pointer' : 'default'};
  color: ${handleMainColor};
  ${simpleTransition('color', 0.1)};

  &:hover {
    color: ${handleMainColor};
  }
`;

export const Dropdown = styled.div<{display: number;}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.4em;

  width: 100%;
  max-height: ${(props) => props.display ? '200px' : '0'};

  z-index: 100;

  overflow: hidden;
  ${simpleTransition('max-height', 0.4)};

  color: ${(props) => props.theme.grayDark};
  background: white;

  font-size: 0.9em;
`;

export const DropdownItem = styled.span<{active?: boolean;}>`
  color: ${(props) => props.active ? props.theme.salmon : props.theme.grayDark};
  ${simpleTransition('color', 0.1)};

  &:hover {
    cursor: pointer;
    color: ${(props) => props.active ? props.theme.salmon : props.theme.grayLight};
  }
`;

export const DropdownEmptyItem = styled.span`
  height: 1.1em;
  width: 100%;
  cursor: default;
`;
