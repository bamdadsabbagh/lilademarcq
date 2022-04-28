import React, {ReactElement} from 'react';
import {theme} from '../../app/styles/theme';
import {Container, Triangle} from './triangle.styles';

interface TriangleComponentProps {
  color?: string;
  onClick?: () => void;
  isTop?: boolean;
  isBottom?: boolean;
  isRight?: boolean;
  isLeft?: boolean;
  isHover?: boolean;
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
}: TriangleComponentProps): ReactElement {
  return (
    <Container
      isHover={isHover}
      onClick={onClick}
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
