import styled from 'styled-components';
import {fontMontserrat, fontSpectral} from '../../app/styles/fonts';

export const RichTextContainer = styled.div`
  ${fontSpectral};
  width: 60%;
  //margin-left: 10%;
  line-height: 1.2em;

  p {
    text-indent: 2em;
    margin: 0;
  }

  hr {
    border: 0;
    margin-bottom: 1em;
  }
`;

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;

  grid-template-columns: 29% 5em 1fr;
  grid-gap: 2em;
`;

export const MadeIn = styled.div`
  ${fontMontserrat};
  font-size: 1.3em;
  font-weight: 300;

  b {
    font-weight: 400;
    margin-right: 0.3em;
  }

  p {
    margin: 0;
  }

  small {
    font-size: 1em;
  }
`;
