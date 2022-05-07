import styled from 'styled-components';
import {fontSpectral} from '../../app/styles/fonts';
import {mediaQueries} from '../../app/styles/breakpoints';
import {SECTION_SPACE_AROUND} from '../../constants';

export const Body = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);

  ${mediaQueries.above.tablet} {
    grid-template-rows: none;
    grid-template-columns: ${SECTION_SPACE_AROUND} repeat(2, 1fr) ${SECTION_SPACE_AROUND};
    align-items: flex-start;
    gap: 2rem;
  }

  ${mediaQueries.above.desktop} {
    gap: 3rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
`;

export const Text = styled.div`
  margin-top: 3rem;

  ${fontSpectral};
  font-weight: 300;
  font-size: 1.2em;
  line-height: 1.3em;

  h2 {
    display: none;
  }

  p {
    margin-top: -2px;
    margin-bottom: 1rem;
  }

  ${mediaQueries.above.tablet} {
    margin-top: 0;
  }
`;
