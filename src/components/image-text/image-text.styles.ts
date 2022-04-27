import styled from 'styled-components';
import {fontSpectral} from '../../app/styles/fonts';

interface ContainerProps {
  width: number;
  right: number;
  gap: number;
}

export const Container = styled.div<ContainerProps>`
  display: grid;
  justify-content: center;
  align-items: flex-start;
  //grid-template-columns: repeat(2, 43%);
  //grid-template-columns: repeat(2, 48%);
  grid-template-columns: repeat(2, 1fr);
  gap: ${({gap}) => gap}em;

  line-height: 1.6em;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-self: flex-end;

  max-width: 90%;
`;

interface TextWrapperProps {
  width: number;
  right: number;
  textVerticalCenter: boolean;
}

export const TextWrapper = styled.div<TextWrapperProps>`
  display: flex;
  justify-content: flex-start;
  align-items: ${({textVerticalCenter}) => textVerticalCenter ? 'center' : 'flex-start'};

  height: 100%;

  ${fontSpectral};
  font-weight: 200;

  font-size: 1.2em;

  transform: translateY(-2px);

  //width: 75%;
  //min-width: 20em;
`;
