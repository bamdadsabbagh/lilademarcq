import styled from 'styled-components';

export const Container = styled.div<{padding: number;}>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10em;

  //width: 20vw;

  //padding: 4.35em 0 3.9em 0;
  padding: ${({padding}) => padding}em 0;
`;
