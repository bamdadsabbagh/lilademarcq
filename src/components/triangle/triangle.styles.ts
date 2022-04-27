import styled from 'styled-components';
import {WiggleAnimation} from '../../app/styles/animations';
import {simpleTransition} from '../../app/styles/transitions';

export const Container = styled.span<{size: number; isHover?: boolean;}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
    // width: ${({size}) => size * 3}px;
    // height: ${({size}) => size * 3}px;

  ${simpleTransition('transform', 0.1)};
  ${({isHover}) => WiggleAnimation(isHover ? 1.3 : 0)};
  //transform: translateY(5px);

  &:hover {
    cursor: pointer;
    ${simpleTransition('transform', 0.1)};
    ${WiggleAnimation(1.3)}
  }
`;

interface TriangleProps {
  size: number;
  color: string;
  isRight?: boolean;
  isLeft?: boolean;
  isTop?: boolean;
  isBottom?: boolean;
}

export const Triangle = styled.div<TriangleProps>`
  width: 0;
  height: 0;

  border: ${({size}) => size}px solid transparent;
  border-top: ${({size}) => size}px solid;
  border-right: ${({size}) => size}px solid;
  border-radius: 3px;

  color: ${(props) => props.color};
  z-index: 100;
  pointer-events: none;

  ${simpleTransition('transform', 0.1)};

  transform: translateY(${(props) => {
    if (props.isTop) {
      return 5;
    } else if (props.isBottom) {
      return -5;
    } else if (props.isLeft) {
      return 0;
    } else if (props.isRight) {
      return 0;
    }
  }}px) rotateZ(${(props) => {
  if (props.isRight) {
    return 45;
  } else if (props.isLeft) {
    return -135;
  } else if (props.isTop) {
    return -45;
  } else if (props.isBottom) {
    return 135;
  }
}}deg);
`;
