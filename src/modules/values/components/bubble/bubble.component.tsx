import React, {ReactElement} from 'react';
import styled, {css} from 'styled-components';

interface ContainerProps {
  size: number;
  fontSize: number;
  x: number;
  y: number;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 0.5em;

  //width: 100%;
  //height: 100%;
  width: ${({size}) => size}rem;
  height: ${({size}) => size}rem;
  font-size: ${({fontSize}) => fontSize}em;
    // padding: ${({size}) => size * 0.05}rem;

  position: relative;
  left: ${({x}) => x}%;
  top: ${({y}) => y}%;

  border-radius: 100%;

  background: rgba(105, 140, 115, 0.8);
  color: white;

  overflow: hidden;
`;

const translate = css`
  width: 80%;
  padding: 0 1.2em;
  //transform: translateX(17%);
  //width: 60%;
`;

const Title = styled.span`
  ${translate};
  font-weight: 600;
`;

const Text = styled.span`
  ${translate};
`;

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
