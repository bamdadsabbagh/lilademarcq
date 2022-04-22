import styled, {css} from 'styled-components';
import {simpleTransition} from '../../app/styles/transitions';
import {fontSpectral} from '../../app/styles/fonts';

export const Container = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

interface CommonProps {
  gap: number;
}

const common = css<CommonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: ${({gap}) => gap}px;
  user-select: none;
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
  ${simpleTransition('max-height, opacity', 0.25)};

  overflow: hidden;

  opacity: ${({visible}) => visible ? 1 : 0};
  max-height: ${({visible}) => visible ? '300px' : 0};
`;

export const TextContainer = styled.div`
  width: 100%;

  p {
    ${fontSpectral};
    font-size: 1.4em;
    line-height: 1.2em;

    text-align: center;
    padding: 0 4em;

    margin-top: 1em;
  }

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
