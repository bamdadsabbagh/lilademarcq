import styled, {css} from 'styled-components';
import {fontSpectral} from '../../app/styles/fonts';
import {mediaQueries} from '../../app/styles/breakpoints';
import {SECTION_SPACE_AROUND} from '../../constants';

const BodyMobile = css`
  display: block;
`;

export const Body = styled.div`
  ${BodyMobile};
  padding: 0 ${SECTION_SPACE_AROUND};

  ${mediaQueries.above.tablet} {
    display: grid;
    grid-template-columns: ${SECTION_SPACE_AROUND} repeat(2, 1fr) ${SECTION_SPACE_AROUND};
    align-items: flex-start;
    gap: 3rem;
  }
`;

export const Text = styled.div`
  ${fontSpectral};
  font-weight: 200;
  font-size: 1.2em;
  line-height: 1.3em;

  h2 {
    display: none;
  }

  p {
    margin-top: -2px;
    margin-bottom: 1rem;
  }
`;

const ImageContainerBig = css`
  img {
    border-radius: 0;
  }

  width: 100%;
  margin-right: 0;
`;

export const ImageContainer = styled.div`
  img {
    border-radius: 50%;
  }

  float: left;
  width: 8em;
  margin-right: 1.5em;
  transform: translateY(0.5em);

  ${mediaQueries.above.tablet} {
    ${ImageContainerBig};
  }
`;
