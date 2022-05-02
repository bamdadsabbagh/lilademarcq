import styled from 'styled-components';
import {fontMontserrat} from '../../app/styles/fonts';
import {FOOTER_HEIGHT, HEADER_HEIGHT} from '../../constants';

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
  min-height: calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT});
`;
