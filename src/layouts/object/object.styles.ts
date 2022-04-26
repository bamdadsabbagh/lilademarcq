import styled from 'styled-components';

export const ObjectDescription = styled.div`
  font-family: Spectral, sans-serif;
  font-size: 1.2em;
  font-weight: 200;
  line-height: 1.3em;

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
  //transform: translateX(50%);
  transform: translateX(100%);
  width: 50%;
`;

export const BannerImage = styled.div`
  position: absolute;
  transform: translate3d(-155px, calc(1em * 0.1), 0);
`;

export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  transform: translateX(-50px);

  font-family: Montserrat, sans-serif;
  font-size: 1.2em;
  font-weight: 300;

  b {
    font-weight: 400;
    margin-right: 0.3em;
  }

  p {
    max-width: 20rem;
    margin: 0;
  }

  span {
    font-size: 1em;
    margin-left: 1em;
  }
`;
