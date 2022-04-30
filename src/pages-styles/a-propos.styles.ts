import styled from 'styled-components';
import {fontSpectral} from '../app/styles/fonts';

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: flex-start;
  grid-template-columns: 1fr 1fr;
  gap: 3em;
`;

export const ImageContainer = styled.div`
  display: block;
  justify-self: flex-end;
  width: 90%;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  height: 100%;

  ${fontSpectral};
  font-weight: 200;
  font-size: 1.2em;

  transform: translateY(-2px);
`;

export const TextWrapper = styled.div`
  h2 {
    font-size: 1.4em;
    margin-bottom: 1.6em;
    margin-left: -1em;
  }

  p {
    margin-left: 1em;
  }
`;
