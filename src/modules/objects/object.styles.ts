import styled from 'styled-components';
import {mediaQueries} from '../../app/styles/breakpoints';
import {simpleTransition} from '../../app/styles/transitions';

export const GridContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GridBody = styled.div`
  display: grid;

  ${mediaQueries.below.mobile} {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  ${mediaQueries.above.mobile} {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  ${mediaQueries.above.tablet} {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }

  ${mediaQueries.above.desktop} {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

  ${mediaQueries.above.fullhd} {
  }
`;

export const Tile = styled.div`
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

interface HoverBoxProps {
  size: number;
}

export const HoverBox = styled.div<HoverBoxProps>`
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
    font-size: 2.5em;
  }

  > span {
    font-weight: 300;
    font-size: 1.667em;
  }
`;
