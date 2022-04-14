import React, {ReactElement} from 'react';
import {theme} from '../../app/styles/theme';
import {StyledContainer, StyledTriangle} from './triangle.styles';

interface TriangleComponentProps {
  size?: number;
  color?: string;
  onClick?: () => void;
  isTop?: boolean;
  isBottom?: boolean;
  isRight?: boolean;
  isLeft?: boolean;
}

const defaultProps = {
  size: 15,
  color: theme.white,
  onClick: () => undefined,
};

export function TriangleComponent({
  size,
  color,
  onClick,
  isTop,
  isBottom,
  isRight,
  isLeft,
}: TriangleComponentProps): ReactElement {
  return (
    <StyledContainer
      size={size ? size : defaultProps.size}
      onClick={onClick ? onClick : defaultProps.onClick}
    >
      <StyledTriangle
        size={size ? size : defaultProps.size}
        color={color ? color : defaultProps.color}
        isTop={isTop ? isTop : false}
        isBottom={isBottom ? isBottom : false}
        isRight={isRight ? isRight : false}
        isLeft={isLeft ? isLeft : false}
      />
    </StyledContainer>
  );
}
