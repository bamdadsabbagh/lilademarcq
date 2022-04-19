import styled from 'styled-components';
import NextImage from 'next/image';

export const Wrapper = styled.div`
  overflow: hidden;
`;

export const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 52% 1fr;
  grid-gap: 2em;

  transform: translateX(3.5em);
`;

export const Image = styled(NextImage)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const TextContainer = styled.div`
  p {
    font-size: 1.4em;
    font-weight: 300;
  }

  hr {
    border: 0;
    height: 1em;
  }
`;
