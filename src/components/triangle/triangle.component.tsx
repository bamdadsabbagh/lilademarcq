import React from 'react';
import {theme} from '../../app/styles/theme';
import {Container, Triangle} from './triangle.component.styles';

interface TriangleComponentProps {
  color?: string;
  onClick?: () => void;
  isTop?: boolean;
  isBottom?: boolean;
  isRight?: boolean;
  isLeft?: boolean;
  isHover?: boolean;
  noWiggle?: boolean;
}

const defaultProps = {
  color: theme.white,
  onClick: () => undefined,
};

export function TriangleComponent({
  color = defaultProps.color,
  onClick = defaultProps.onClick,
  isTop,
  isBottom,
  isRight,
  isLeft,
  isHover,
  noWiggle,
}: TriangleComponentProps): JSX.Element {
  return (
    <Container
      isHover={isHover}
      onClick={onClick}
      noWiggle={noWiggle}
    >
      <Triangle
        color={color}
        isTop={isTop}
        isBottom={isBottom}
        isRight={isRight}
        isLeft={isLeft}
      />
    </Container>
  );
}
