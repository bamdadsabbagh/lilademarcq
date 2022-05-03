import styled from 'styled-components';
import {HEADER_HEIGHT} from '../../constants';
import {mediaQueries} from '../../app/styles/breakpoints';

export const headerGap = '1.75rem';
export const headerGapMobile = '2em';
export const marginBottomMobile = '3em';

export const Header = styled.header`
  height: ${HEADER_HEIGHT};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1.5rem;

  position: sticky;
  //top: -8rem;
  top: calc(${HEADER_HEIGHT} * -1 + ${headerGap} * 2);

  z-index: 1000;

  transition: top 500ms ease-in-out;
  gap: ${headerGapMobile};
  margin-bottom: ${marginBottomMobile};

  ${mediaQueries.above.tablet} {
    background: ${({theme}) => theme.white};
    gap: ${headerGap};
    margin-bottom: calc(${headerGap} / 3);
  }
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 6em;

  display: flex;
  justify-content: center;
`;
