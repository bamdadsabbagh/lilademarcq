import styled from 'styled-components';
import NextImage from 'next/image';

export const Image = styled(NextImage)`
  transform: translateY(10em);
`;

export const Bubbles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  position: absolute;
  inset: 0;

  padding-top: 3em;

  z-index: 1;

  overflow: hidden;
`;
