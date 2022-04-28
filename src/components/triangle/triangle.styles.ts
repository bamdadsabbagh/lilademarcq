import styled, {css} from 'styled-components';
import {WiggleAnimation} from '../../app/styles/animations';
import {simpleTransition} from '../../app/styles/transitions';
import {mediaQueries} from '../../app/styles/breakpoints';

interface ContainerProps {
  isHover?: boolean;
}

export const Container = styled.span<ContainerProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  ${simpleTransition('transform', 0.1)};
  ${({isHover}) => WiggleAnimation(isHover ? 1.3 : 0)};

  &:hover {
    cursor: pointer;
    ${simpleTransition('transform', 0.1)};
    ${WiggleAnimation(1.3)}
  }
`;

interface TriangleProps {
  color: string;
  isRight?: boolean;
  isLeft?: boolean;
  isTop?: boolean;
  isBottom?: boolean;
}

const TriangleTransform = (scale = 1) => css<TriangleProps>`
  transform: scale(${scale}) translateY(${(props) => {
  if (props.isTop) {
    return 5;
  } else if (props.isBottom) {
    return -5;
  } else if (props.isLeft) {
    return 0;
  } else if (props.isRight) {
    return 0;
  } else {
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
  } else {
    return 0;
  }
}}deg);
`;

export const Triangle = styled.div<TriangleProps>`
  width: 0;
  height: 0;

  border: 15px solid transparent;
  border-top: 15px solid;
  border-right: 15px solid;
  border-radius: 3px;

  color: ${(props) => props.color};
  z-index: 1;
  pointer-events: none;

  ${simpleTransition('transform', 0.1)};

  ${TriangleTransform(1)};

  ${mediaQueries.below.mobile} {
    ${TriangleTransform(0.67)};
  }
`;
