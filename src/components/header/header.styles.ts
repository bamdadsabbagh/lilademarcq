import styled from 'styled-components';
import {HEADER_HEIGHT} from '../../constants';
import {mediaQueries} from '../../app/styles/breakpoints';

export const Header = styled.header`
  height: ${HEADER_HEIGHT};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1.5rem;

  padding: 1.5rem;

  position: sticky;
  top: -8rem;

  z-index: 1000;

  transition: top 500ms ease-in-out;

  ${mediaQueries.below.mobile} {
    background: transparent;
  }

  ${mediaQueries.above.tablet} {
    background: ${({theme}) => theme.white};
  }
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 6em;

  display: flex;
  justify-content: center;
`;