import styled from 'styled-components';
import Image from 'next/image';

export const StyledWrapper = styled.div`
  overflow: hidden;
`;

export const StyledContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 52% 1fr;
  grid-gap: 3em;

  transform: translateX(3.5em);
`;

export const StyledImage = styled(Image)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const StyledContent = styled.p`
  font-size: 1.45em;
  font-weight: 300;
  line-height: 1.4em;
  transform: translateY(-0.05em);
`;
