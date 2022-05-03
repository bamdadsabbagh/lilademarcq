import styled from 'styled-components';
import {FullHeight} from '../../app/styles/common';
import {mediaQueries} from '../../app/styles/breakpoints';

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  user-select: none;

  height: 18em;
  max-height: 500px;

  ${mediaQueries.above.mobile} {
    ${FullHeight};
  }

  ${mediaQueries.above.desktop} {
    max-height: none;
  }
`;
