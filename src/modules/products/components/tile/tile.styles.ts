import styled from 'styled-components';
import Image from 'next/image';
import {tf, to} from '../../../../app/styles/timers';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    > div {
      transform: translateY(0);
    }
  }
`;

export const StyledImage = styled(Image)`
  transition: filter calc((0.2s + ${to}s) * ${tf}) ease;
`;

export const StyledContent = styled.div<{size: number;}>`
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  color: white;
  transform: translateY(105%);
  transition: transform calc((0.2s + ${to}s) * ${tf}) ease;
  padding: 1.1em;

  font-size: ${({size}) => size * 0.3}%;

  > h3 {
    text-transform: uppercase;
    margin-bottom: 0.3em;
    font-size: 2.5em;
  }

  > span {
    font-weight: 300;
    font-size: 1.667em;
  }
`;
