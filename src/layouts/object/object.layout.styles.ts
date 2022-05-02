import styled from 'styled-components';
import {fontMontserrat, fontSpectral} from '../../app/styles/fonts';
import {mediaQueries} from '../../app/styles/breakpoints';

export const ObjectDescription = styled.div`
  ${fontSpectral};
  font-size: 1.2em;
  font-weight: 200;

  max-width: 45rem;

  p {
    text-indent: 2em;
    margin: 0;
  }

  b {
    font-weight: 300;
  }

  i {
    font-style: italic;
  }

  hr {
    border: 0;
    padding-bottom: 2em;
  }

  width: 100%;
  padding: 0 1rem;

  ${mediaQueries.above.mobile} {
    width: 70%;
    padding: 1rem 0 1rem 4rem;
  }
`;

export const Banner = styled.div`
  align-items: center;
  gap: 1em;

  display: grid;
  grid-template-columns: 1fr 1fr;
  transform: translateX(-2em);

  ${mediaQueries.above.mobile} {
    gap: 2em;
  }
`;

export const BannerImage = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  ${fontMontserrat};
  font-size: 1.2em;
  font-weight: 300;

  b {
    max-width: 20rem;
    font-weight: 400;
    margin-right: 0.3em;
  }

  span {
    font-size: 1em;
    margin-left: 1em;
  }
`;
