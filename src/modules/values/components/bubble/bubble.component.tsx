import React from 'react';
import {Body, Container, Title} from './bubble.component.styles';

interface BubbleComponentProps {
  title?: string;
  text?: string;
  size?: number;
  fontSize?: number;
  x?: number;
  y?: number;
}

export function BubbleComponent({
  title,
  text,
  size = 8,
  fontSize = 1,
  x = 0,
  y = 0,
}: BubbleComponentProps): JSX.Element {
  return (
    <Container
      size={size}
      fontSize={fontSize}
      x={x}
      y={y}
    >
      {title && <Title>{title}</Title>}
      {text && <Body paddingLeft={typeof title !== 'undefined'}>{text}</Body>}
    </Container>
  );
}
