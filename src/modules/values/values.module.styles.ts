import styled from 'styled-components';
import NextImage from 'next/image';
import {mediaQueries} from '../../app/styles/breakpoints';

export const Image = styled(NextImage)`
  transform: translateY(6em);

  ${mediaQueries.above.mobile} {
    transform: translateY(calc(8em + 4px));
  }

  ${mediaQueries.above.tablet} {
    transform: translateY(9em);
  }
`;

export const Bubbles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  position: absolute;
  inset: 0;

  padding-top: 3em;

  z-index: 1;

  transform: translate3d(15%, 7%, 0) scale(1.05);

  & > :nth-child(2),
  & > :nth-child(3),
  & > :nth-child(5),
  & > :nth-child(6) {
    visibility: hidden;
  }

  ${mediaQueries.above.mobile} {
    overflow: hidden;
    transform: none;

    & > :nth-child(2),
    & > :nth-child(5) {
      visibility: visible;
    }
  }

  ${mediaQueries.above.tablet} {
    overflow: hidden;
    transform: none;

    & > :nth-child(2),
    & > :nth-child(3),
    & > :nth-child(5),
    & > :nth-child(6) {
      visibility: visible;
    }
  }
`;
