import styled from 'styled-components';

export const Tile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    > div {
      transform: translateY(0);
    }
  }
`;

export const ImageContainer = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;
