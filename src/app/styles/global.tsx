import React, {ReactElement} from 'react';
import {createGlobalStyle} from 'styled-components';
import '@fontsource/montserrat/200.css';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/spectral/200.css';
import '@fontsource/spectral/300.css';
import {mediaQueries} from './breakpoints';
import {simpleTransition} from './transitions';

const GlobalJSX = () => (
  <style jsx global>{`
    @font-face {
      font-family: Farmhouse;
      font-style: normal;
      font-display: swap;
      font-weight: 400;
      src: url('/fonts/Farmhouse-avec-accents.ttf') format('truetype');
    }
  `}</style>
);

export const GlobalStyled = createGlobalStyle`
  html {
    overflow-y: scroll;

    img:not(.pswp__img) {
      ${simpleTransition('', 0.1)};
    }

    .grecaptcha-badge {
      visibility: hidden;
    }

    font-size: 14px;

    ${mediaQueries.above.desktop} {
      font-size: 15px;
    }

    ${mediaQueries.above.widescreen} {
      font-size: 16px;
    }

    ${mediaQueries.above.fullhd} {
      font-size: 17px;
    }
  }
`;

export const Global = (): ReactElement => (
  <>
    <GlobalJSX />
    <GlobalStyled />
  </>
);
