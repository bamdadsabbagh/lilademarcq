import styled from 'styled-components';
import NextImage from 'next/image';
import {simpleTransition} from '../../../../app/styles/transitions';

export const Container = styled.div`
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

export const Image = styled(NextImage)`
  ${simpleTransition('filter')};
`;

export const Content = styled.div<{size: number;}>`
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  color: white;
  transform: translateY(105%);
  ${simpleTransition('transform', 0.25)};
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
