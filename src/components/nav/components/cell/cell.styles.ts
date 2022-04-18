import styled, {css} from 'styled-components';
import {tf, to} from '../../../../app/styles/timers';
import {SlideInAnimation} from '../../../../app/styles/animations';

interface StyledContainerProps {
  index: number;
  noLeft?: number;
  noRight?: number;
}

export const AnimationDelay = css<Pick<StyledContainerProps, 'index'>>`
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
  transition: color calc((0.1s + ${to}s) * ${tf}) ease;
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
  transition: color calc((0.1s + ${to}s) * ${tf}) ease;

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
  cursor: pointer;

  overflow: hidden;
  transition: max-height calc((0.4s + ${to}s) * ${tf}) ease;

  color: ${(props) => props.theme.grayDark};
  background: white;

  font-size: 0.9em;
`;

export const DropdownItem = styled.span<{active?: boolean;}>`
  color: ${(props) => props.active ? props.theme.salmon : props.theme.grayDark};
  transition: color calc((0.1s + ${to}s) * ${tf}) ease;

  &:hover {
    color: ${(props) => props.active ? props.theme.salmon : props.theme.grayLight};
  }
`;

export const DropdownEmptyItem = styled.span`
  height: 1.1em;
  width: 100%;
  cursor: default;
`;
