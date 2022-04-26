import styled from 'styled-components';
import {AlignKeys} from './section-title.component';

interface TitleProps {
  align: AlignKeys;
  color: string;
}

export const Title = styled.h2<TitleProps>`
  padding-bottom: calc(4rem - 0.5rem);
  padding-left: 4rem;

  color: ${({color}) => color};

  font-family: Farmhouse, sans-serif;
  font-size: 3em;

  text-align: ${({align}) => align};
`;
