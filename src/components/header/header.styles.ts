import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1.5em 1.5em;
  gap: 1.5em;

  background: ${({theme}) => theme.white};
  transition: top 500ms ease-in-out;

  top: -8em;

  z-index: 1000;
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 6em;

  display: flex;
  justify-content: center;
`;
