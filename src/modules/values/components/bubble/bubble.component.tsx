import React, {ReactElement} from 'react';
import {Container, Text, Title} from './bubble.styles';

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
}: BubbleComponentProps): ReactElement {
  return (
    <Container size={size} fontSize={fontSize} x={x} y={y}>
      {title && (
        <Title>{title}</Title>
      )}
      {text && (
        <Text>{text}</Text>
      )}
    </Container>
  );
}
