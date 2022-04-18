import styled from 'styled-components';
import NextImage from 'next/image';

export const Container = styled.div`
  height: 50em;
`;

export const Image = styled(NextImage)`
  transform: translateY(12em);
`;

export const Bubbles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  padding-top: 6em;

  z-index: 100;

  overflow: hidden;
`;
