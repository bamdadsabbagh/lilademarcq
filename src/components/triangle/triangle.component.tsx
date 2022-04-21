import React, {ReactElement} from 'react';
import {theme} from '../../app/styles/theme';
import {Container, Triangle} from './triangle.styles';

interface TriangleComponentProps {
  size?: number;
  color?: string;
  onClick?: () => void;
  isTop?: boolean;
  isBottom?: boolean;
  isRight?: boolean;
  isLeft?: boolean;
  isHover?: boolean;
}

const defaultProps = {
  size: 15,
  color: theme.white,
  onClick: () => undefined,
};

export function TriangleComponent({
  size = defaultProps.size,
  color = defaultProps.color,
  onClick = defaultProps.onClick,
  isTop,
  isBottom,
  isRight,
  isLeft,
  isHover,
}: TriangleComponentProps): ReactElement {
  return (
    <Container
      size={size}
      isHover={isHover}
      onClick={onClick}
    >
      <Triangle
        size={size}
        color={color}
        isTop={isTop}
        isBottom={isBottom}
        isRight={isRight}
        isLeft={isLeft}
      />
    </Container>
  );
}
