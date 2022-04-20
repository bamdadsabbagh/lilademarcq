import {createGlobalStyle} from 'styled-components';
import '@fontsource/montserrat';
import '@fontsource/spectral';

export const Global = createGlobalStyle`
  @font-face {
    font-family: Farmhouse;
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src: url('../data/fonts/Farmhouse-avec-accents.ttf') format('ttf');
  }
`;
