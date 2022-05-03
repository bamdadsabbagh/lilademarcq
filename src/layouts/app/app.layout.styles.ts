import styled from 'styled-components';
import {fontMontserrat} from '../../app/styles/fonts';
import {MainHeight, MainHeightMobile} from '../../app/styles/common';
import {mediaQueries} from '../../app/styles/breakpoints';

export const App = styled.div`
  ${fontMontserrat};
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  ${MainHeightMobile};

  ${mediaQueries.above.mobile} {
    ${MainHeight};
  }
`;
