import styled from 'styled-components';
import {mediaQueries} from '../../app/styles/breakpoints';

export const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GridBody = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;

  button {
    text-align: left;
  }

  ${mediaQueries.above.mobile} {
    grid-template-columns: repeat(2, 1fr);
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

export const GridTile = styled.div`
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

export const GridImage = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;
