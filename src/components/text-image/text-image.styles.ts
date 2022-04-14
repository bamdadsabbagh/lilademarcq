import styled from 'styled-components';

interface StyledContentProps {
  width: number;
  right: number;
}

export const StyledContent = styled.div<StyledContentProps>`
  display: grid;
  justify-content: center;
  align-items: flex-start;
  //grid-template-columns: repeat(2, 43%);
  //grid-template-columns: repeat(2, 48%);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3em;

  line-height: 1.6em;
`;

export const StyledImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const StyledText = styled.p<StyledContentProps>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  margin: 0;

  transform: translateY(-0.2em);

  font-family: Spectral, sans-serif;
  font-weight: 200;

  font-size: 1.21em;
  width: 75%;
  min-width: 20em;
`;
