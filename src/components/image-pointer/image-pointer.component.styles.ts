import styled, {css} from 'styled-components';
import {simpleTransition} from '../../app/styles/transitions';

interface PointerLayerProps {
  gap: number;
  debug?: boolean;
}

const PointerLayerDebug = css`
  & :nth-child(1) {
    background: rgba(255, 0, 0, 0.5);
  }

  & :nth-child(2) {
    background: rgba(0, 255, 0, 0.5);
  }

  & :nth-child(3) {
    background: rgba(0, 0, 255, 0.5);
  }
`;

export const Layers = styled.div<PointerLayerProps>`
  position: absolute;

  width: 100%;
  height: 100%;

  z-index: 1;

  display: grid;
  grid-template-columns: ${({gap}) => gap}% 1fr ${({gap}) => gap}%;

  ${({debug}) => debug && PointerLayerDebug};
`;

export const LayerCenter = styled.div`
  width: 100%;
  height: 100%;

  &:hover {
    cursor: zoom-in;
  }
`;

const LayerSide = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  padding: 2em;

  opacity: 0;

  ${simpleTransition('opacity')};

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export const LayerLeft = styled(LayerSide)`
  justify-content: flex-start;
`;

export const LayerRight = styled(LayerSide)`
  justify-content: flex-end;
`;
