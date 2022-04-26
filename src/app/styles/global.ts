import {createGlobalStyle} from 'styled-components';
import '@fontsource/montserrat/200.css';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/spectral/200.css';
import '@fontsource/spectral/300.css';
import {mediaQueries} from './breakpoints';

export const Global = createGlobalStyle`
  @font-face {
    font-family: Farmhouse;
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src: url('/fonts/Farmhouse-avec-accents.ttf') format('truetype');
  }

  html {
    overflow-y: scroll;

    ${mediaQueries.above.mobile} {
      font-size: 13px;
    }

    ${mediaQueries.above.tablet} {
      font-size: 14px;
    }

    ${mediaQueries.above.desktop} {
      font-size: 15px;
    }

    ${mediaQueries.above.widescreen} {
      font-size: 16px;
    }

    ${mediaQueries.above.fullhd} {
      font-size: 17px;
    }

    ${mediaQueries.above.qhd} {
      font-size: 18px;
    }
  }
`;
