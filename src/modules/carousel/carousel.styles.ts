import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const gap = 30;

export const PointerLayer = styled.div`
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
    width: ${gap}%;
    cursor: pointer;
  }

  // center
  &:after {
    // nothing
  }
`;

export const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  user-select: none;
`;
