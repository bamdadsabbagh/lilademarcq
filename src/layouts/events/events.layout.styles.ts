import styled from 'styled-components';
import {PulseAnimation} from '../../app/styles/animations';

interface ImageProps {
  hasLink: boolean;
}

export const ImageWrapper = styled.div<ImageProps>`
  width: 100%;
  height: 100%;

  display: flex;

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

export const LinkContainer = styled.div`
  ${PulseAnimation};
`;
