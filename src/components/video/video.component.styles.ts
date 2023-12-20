import {Ref} from 'react';
import styled from 'styled-components';

interface ContainerProps {
  width: number;
  height: number;
  children: JSX.Element;
  ref: Ref<HTMLDivElement>;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  margin-top: 2rem;
`;
