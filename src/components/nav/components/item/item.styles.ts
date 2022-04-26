import styled, {css} from 'styled-components';
import {SlideInAnimation} from '../../../../app/styles/animations';
import {tf, to} from '../../../../app/styles/timers';
import {simpleTransition} from '../../../../app/styles/transitions';

const getColor = (props) => {
  const {theme, isActive, isOpen} = props;

  if (isActive) {
    return theme.salmonDark;
  } else if (isOpen) {
    return theme.grayDark;
  } else {
    return theme.black;
  }
};

interface ContainerProps {
  index: number;
  hasChildren?: boolean;
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  user-select: none;

  opacity: 0;

  height: ${({
    hasChildren,
    isOpen,
  }) => hasChildren && isOpen ? '100%' : '1.2em'};
  ${simpleTransition('height', 0.3)};

  animation: ${SlideInAnimation} calc(0.9s * ${tf}) forwards calc(0.5s * ${tf});
  animation-delay: calc((0.7s + ${to}s * ${({index}) => index}) * ${tf});

  background: ${({theme}) => theme.white};
`;

interface BorderProps {
  isOpen: boolean;
}

const Border = css<BorderProps>`
  //height: 1.2em;
  width: 100%;
  height: ${({isOpen}) => isOpen ? '100%' : '1.2em'};
  ${simpleTransition('height', 0.3)};
  position: absolute;
  pointer-events: none;
`;

export const BorderLeft = styled.div<{isOpen: boolean;}>`
  ${Border};
  border-left: 1px solid black;
`;

export const BorderRight = styled.div<{isOpen: boolean;}>`
  ${Border};
  border-right: 1px solid black;
`;

interface ItemProps {
  isOpen: boolean;
  isActive: boolean;
}

export const Item = styled.div<ItemProps>`
  text-transform: uppercase;
  color: ${getColor};
  ${simpleTransition('color')};

  &:hover {
    color: ${getColor};
  }
`;

interface DropdownContainerProps {
  isOpen: boolean;
}

export const Dropdown = styled.div<DropdownContainerProps>`
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface DropdownItemProps {
  isActive: boolean;
}

export const DropdownItem = styled.span<DropdownItemProps>`
  font-size: 0.9em;
  line-height: 1.4em;

  ${simpleTransition('color')};
  color: ${(props) => props.isActive ? props.theme.salmon : props.theme.grayDark};

  &:hover {
    cursor: pointer;
    color: ${(props) => props.isActive ? props.theme.salmon : props.theme.grayLight};
  }
`;

export const DropdownSpacer = styled.span`
  min-height: 0.5em;
  width: 100%;
`;
