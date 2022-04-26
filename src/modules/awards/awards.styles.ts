import styled, {css} from 'styled-components';
import {simpleTransition} from '../../app/styles/transitions';
import {fontSpectral} from '../../app/styles/fonts';

export const NewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;

  user-select: none;

  &:hover {
    cursor: pointer;
  }
`;

interface AwardProps {
  imageHeight: number;
}

export const Award = styled.div<AwardProps>`
  display: grid;
  grid-template-rows: ${({imageHeight}) => imageHeight}px 1fr;
  justify-content: center;
  align-items: center;

  text-align: center;

  width: 100%;
`;

export const NewImage = styled.div``;

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
  gap: ${({gap}) => gap}px;
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
  ${simpleTransition('max-height, opacity', 0.42)};

  overflow: hidden;

  opacity: ${({visible}) => visible ? 1 : 0};
  max-height: ${({visible}) => visible ? '300px' : 0};
`;

interface ParagraphProps {
  visible: boolean;
}

export const TextContainer = styled.p<ParagraphProps>`
  ${fontSpectral};
  font-size: 1.4em;
  line-height: 1.2em;
  margin: 0 3em;

  opacity: ${({visible}) => visible ? 1 : 0};
  height: ${({visible}) => visible ? '200px' : 0};
  //opacity: 0;
  //height: 0;

  ${simpleTransition('opacity, height', 0.4)};

  i {
    font-style: italic;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
