import styled, {css} from 'styled-components';
import {simpleTransition} from '../../../../app/styles/transitions';

const size = '1.3rem';

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
  children: JSX.Element[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  user-select: none;

  height: ${({hasChildren, isOpen}) => (hasChildren && isOpen ? '100%' : size)};

  ${simpleTransition('height', 0.3)};

  transform: translate(0);

  background: ${({theme}) => theme.white};
`;

interface BorderProps {
  isOpen: boolean;
}

const Border = css<BorderProps>`
  width: 100%;
  height: ${({isOpen}) => (isOpen ? '100%' : size)};
  ${simpleTransition('height', 0.3)};
  position: absolute;
  pointer-events: none;
`;

export const BorderLeft = styled.div<BorderProps>`
  ${Border};
  border-left: 1px solid black;
`;

export const BorderRight = styled.div<BorderProps>`
  ${Border};
  border-right: 1px solid black;
`;

interface ItemProps {
  isOpen: boolean;
  isActive: boolean;
  children: string;
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
  children: (JSX.Element | JSX.Element[])[];
}

export const Dropdown = styled.div<DropdownContainerProps>`
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface DropdownItemProps {
  isActive: boolean;
  children: string;
}

export const DropdownItem = styled.span<DropdownItemProps>`
  font-size: 0.9em;
  line-height: 1.4em;

  ${simpleTransition('color')};
  color: ${(props) =>
    props.isActive ? props.theme.salmon : props.theme.grayDark};

  &:hover {
    cursor: pointer;
    color: ${(props) =>
    props.isActive ? props.theme.salmon : props.theme.grayLight};
  }
`;

export const DropdownSpacer = styled.span`
  min-height: 0.5em;
  width: 100%;
`;
