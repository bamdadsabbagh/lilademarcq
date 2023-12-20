import styled from 'styled-components';

interface ImageProps {
  hasLink: boolean;
  children: JSX.Element;
  onClick: () => void;
}

export const ImageWrapper = styled.div<ImageProps>`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  img:hover {
    transform: scale(1.05);
    cursor: ${({hasLink}) => (hasLink ? 'pointer' : 'default')};
  }
`;

export const WaitingBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
`;
