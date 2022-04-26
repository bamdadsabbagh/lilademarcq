import styled from 'styled-components';
import {fontMontserrat, fontSpectral} from '../../app/styles/fonts';

export const RichTextContainer = styled.div`
  ${fontSpectral};
  width: 60%;
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

export const Banner = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 2em 0;

  right: 50%;
  transform: translateX(50%);
`;

export const BannerImage = styled.div`
  position: absolute;
  transform: translateX(-200px);
`;

export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  transform: translateX(-100px);

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
