import styled from 'styled-components';

interface StyledContentProps {
  width: number;
  right: number;
}

export const Container = styled.div<StyledContentProps>`
  display: grid;
  justify-content: center;
  align-items: flex-start;
  //grid-template-columns: repeat(2, 43%);
  //grid-template-columns: repeat(2, 48%);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3em;

  line-height: 1.6em;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const TextWrapper = styled.div<StyledContentProps>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  font-family: Spectral, sans-serif;
  font-weight: 200;

  font-size: 1.2em;

  transform: translateY(-2px);

  //width: 75%;
  //min-width: 20em;
`;
