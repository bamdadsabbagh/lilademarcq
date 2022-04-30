import styled from 'styled-components';
import {mediaQueries} from '../../app/styles/breakpoints';
import {simpleTransition} from '../../app/styles/transitions';

export const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GridBody = styled.div`
  display: grid;
  width: 100%;

  ${mediaQueries.below.mobile} {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  ${mediaQueries.above.tablet} {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }

  ${mediaQueries.above.desktop} {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
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

export const ImageContainer = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;

export const HoverBox = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  color: white;
  transform: translateY(105%);
  ${simpleTransition('transform', 0.25)};

  > h3 {
    text-transform: uppercase;
  }

  > span {
    font-weight: 300;
  }

  ${mediaQueries.below.mobile} {
    padding: 0.8em 1em;

    > h3 {
      font-size: 2.1em;
    }

    > span {
      font-size: 1.5em;
    }
  }

  ${mediaQueries.above.tablet} {
    padding: 0.5em 0.7em;

    > h3 {
      font-size: 1.6em;
    }

    > span {
      font-size: 1em;
    }
  }

  ${mediaQueries.above.desktop} {
    padding: 0.7em 0.9em;

    > h3 {
      font-size: 1.8em;
    }

    > span {
      font-size: 1.2em;
    }
  }

  ${mediaQueries.above.widescreen} {
    padding: 0.9em 1.1em;

    > h3 {
      font-size: 2em;
    }

    > span {
      font-size: 1.3em;
    }
  }

  ${mediaQueries.above.fullhd} {
    padding: 0.9em 1em;

    > h3 {
      font-size: 2.05em;
    }

    > span {
      font-size: 1.35em;
    }
  }
`;
