import styled, {css} from 'styled-components';
import {simpleTransition} from '../../../../app/styles/transitions';
import {mediaQueries} from '../../../../app/styles/breakpoints';

const HoverBox = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  color: white;
  ${simpleTransition('transform', 0.25)};
  transform: translateY(105%);
`;

const HoverBoxHalfSizes = (
  h3: number,
  span: number,
) => css`
  > h3 {
    font-size: ${h3}em;
  }

  > span {
    font-size: ${span}em;
  }
`;

export const HoverBoxHalf = styled(HoverBox)`
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
    padding: 0.8em 1em;
    ${HoverBoxHalfSizes(2, 1.5)};
  }

  ${mediaQueries.above.tablet} {
    padding: 0.5em 0.7em;
    ${HoverBoxHalfSizes(1.6, 1)};
  }

  ${mediaQueries.above.desktop} {
    padding: 0.7em 0.9em;
    ${HoverBoxHalfSizes(1.8, 1.2)};
  }

  ${mediaQueries.above.widescreen} {
    padding: 0.9em 1.1em;
    ${HoverBoxHalfSizes(2, 1.3)};
  }

  ${mediaQueries.above.fullhd} {
    padding: 0.9em 1em;
    ${HoverBoxHalfSizes(2.05, 1.35)};
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

export const HoverBoxFull = styled(HoverBoxHalf)`
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
