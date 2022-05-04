import styled, {css} from 'styled-components';
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
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;

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

const GridTileHoverBox = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  color: white;
  ${simpleTransition('transform', 0.25)};
  transform: translateY(105%);
`;

const HoverBoxMobile = css`
  padding: 0.8em 1em;

  > h3 {
    font-size: 2em;
  }

  > span {
    font-size: 1.5em;
  }
`;

const HoverBoxTablet = css`
  padding: 0.5em 0.7em;

  > h3 {
    font-size: 1.6em;
  }

  > span {
    font-size: 1em;
  }
`;

const HoverBoxDesktop = css`
  padding: 0.7em 0.9em;

  > h3 {
    font-size: 1.8em;
  }

  > span {
    font-size: 1.2em;
  }
`;

const HoverBoxWidescreen = css`
  padding: 0.9em 1.1em;

  > h3 {
    font-size: 2em;
  }

  > span {
    font-size: 1.3em;
  }
`;

const HoverBoxFullhd = css`
  padding: 0.9em 1em;

  > h3 {
    font-size: 2.05em;
  }

  > span {
    font-size: 1.35em;
  }
`;

export const GridTileHoverBoxHalf = styled(GridTileHoverBox)`
  padding: 0.4em 0.5em;

  > h3 {
    text-transform: uppercase;
    font-size: 1.5em;
  }

  > span {
    font-weight: 300;
    font-size: 1.1em;
  }

  ${mediaQueries.above.mobile} {
    ${HoverBoxMobile};
  }

  ${mediaQueries.above.tablet} {
    ${HoverBoxTablet};
  }

  ${mediaQueries.above.desktop} {
    ${HoverBoxDesktop};
  }

  ${mediaQueries.above.widescreen} {
    ${HoverBoxWidescreen};
  }

  ${mediaQueries.above.fullhd} {
    ${HoverBoxFullhd};
  }
`;

const HoverBoxFullSizes = (
  h3: number,
  h4: number,
  span: number,
) => css`
  > h3 {
    font-size: ${h3}em;
  }

  > h4 {
    font-size: ${h4}em;
  }

  > span {
    font-size: ${span}em;
  }
`;

export const GridTileHoverBoxFull = styled(GridTileHoverBoxHalf)`
  height: 100%;
  transform: translateY(105%);

  padding: 0.5em 0.6em;
  text-align: left;

  display: grid;
  grid-template-rows: auto 1fr auto;
  align-items: flex-start;
  gap: 0.5em;

  > h3 {
    text-transform: none;
    font-weight: 500;
    max-width: 80%;
  }

  > span {
    font-style: italic;
    font-weight: 300;
  }

  ${HoverBoxFullSizes(0.6, 0.6, 0.9)};

  ${mediaQueries.above.mobile} {
    padding: 1em 1em;
    ${HoverBoxFullSizes(1.2, 1.2, 2)};
  }

  ${mediaQueries.above.tablet} {
    padding: 0.5em 0.5em;
    ${HoverBoxFullSizes(0.8, 0.8, 1.2)};
  }

  ${mediaQueries.above.desktop} {
    ${HoverBoxFullSizes(1, 1, 1.4)};
  }

  ${mediaQueries.above.widescreen} {
    padding: 0.6em 0.7em;
    gap: 1em;
    ${HoverBoxFullSizes(1.1, 1.1, 1.6)};
  }
`;
