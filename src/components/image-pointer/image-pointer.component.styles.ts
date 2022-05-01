import styled, {css} from 'styled-components';

interface PointerLayerProps {
  gap: number;
  debug?: boolean;
}

const PointerLayerDebug = css`
  background: blue;

  &:before {
    background: red;
  }

  &:after {
    background: green;
  }
`;

export const PointerLayer = styled.div<PointerLayerProps>`
  position: absolute;
  display: flex;

  width: 100%;
  height: 100%;

  z-index: 1;

  // right
  cursor: pointer;

  // left
  &:before {
    content: '';
    width: ${({gap}) => gap}%;
    cursor: pointer;
  }

  // center
  &:after {
    content: '';
    width: ${({gap}) => 100 - gap * 2}%;
    cursor: zoom-in;
  }

  ${({debug}) => debug && PointerLayerDebug};
`;
