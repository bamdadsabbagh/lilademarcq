import styled, {css} from 'styled-components';
import {simpleTransition} from '../../app/styles/transitions';
import {fontSpectral} from '../../app/styles/fonts';

interface CommonProps {
  gap: number;
}

const common = css<CommonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: ${({gap}) => gap}px;
`;

export const Images = styled.div<CommonProps>`
  ${common};
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const Texts = styled.div<CommonProps & {visible: boolean;}>`
  ${common};
  overflow: hidden;

  max-height: ${({visible}) => visible ? '300px' : 0};

  ${simpleTransition('max-height')}
`;

export const Text = styled.p`
  ${fontSpectral};
  font-size: 1.6em;
  line-height: 1.2em;

  text-align: center;
  width: 100%;
  padding: 0 4em;

  margin-top: 1em;

  i {
    font-style: italic;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 3em;
`;
