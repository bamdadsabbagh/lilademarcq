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

export const Banners = styled.div`
  display: grid;
  gap: 1em;

  grid-template-rows: repeat(2, 1fr);

  ${mediaQueries.above.tablet} {
    grid-template-rows: none;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    justify-items: center;
  }
`;

export const BannerItem = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 2em;

  grid-template-columns: 40% 60%;

  & :nth-child(1) {
    justify-self: flex-end;
  }

  ${mediaQueries.above.tablet} {
    grid-template-columns: auto 1fr;
  }
`;

export const BannerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  ${fontMontserrat};
  font-size: 1em;
  font-weight: 300;

  ${mediaQueries.above.mobile} {
    font-size: 1.2em;
  }

  & > b {
    max-width: 20rem;
    font-weight: 400;
    margin-right: 0.3em;
  }

  & > small {
    font-size: 1em;
    margin-left: 1em;
  }
`;
