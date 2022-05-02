import styled from 'styled-components';
import {fontMontserrat, fontSpectral} from '../../app/styles/fonts';

export const ObjectDescription = styled.div`
  ${fontSpectral};
  font-size: 1.2em;
  font-weight: 200;

  width: 70%;
  max-width: 45rem;
  padding: 1rem 0 1rem 4rem;

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
`;

export const Banner = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1em 0;

  right: 50%;
  transform: translateX(100%);
  width: 50%;
`;

export const BannerImage = styled.div`
  position: absolute;
  transform: translate3d(-150px, calc(1em * 0.1), 0);
`;

export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  transform: translateX(-45px);

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
