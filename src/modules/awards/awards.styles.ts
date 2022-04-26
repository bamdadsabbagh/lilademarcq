import styled from 'styled-components';
import {simpleTransition} from '../../app/styles/transitions';
import {fontSpectral} from '../../app/styles/fonts';

export const Container = styled.div`
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

interface ParagraphProps {
  visible: boolean;
}

export const TextContainer = styled.span<ParagraphProps>`
  ${fontSpectral};
  font-size: 1.4em;
  line-height: 1.2em;
  margin: 0 3em;

  opacity: ${({visible}) => visible ? 1 : 0};
  height: ${({visible}) => visible ? '10rem' : 0};

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
