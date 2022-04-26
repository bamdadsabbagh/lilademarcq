import styled from 'styled-components';

export const Container = styled.div<{padding: number;}>`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 12rem;

  padding: ${({padding}) => padding}em 0;
`;
