import styled from 'styled-components';

export const Nav = styled.nav`
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

export const MenuContainer = styled.div`
  width: 90vw;

  display: grid;
  justify-content: center;
  grid-template-columns: 5em 7em 6.5em 6em 9em 6em 8em;
  //grid-template-columns: 80px 112px 96px 96px 144px 96px 128px;

  font-size: 1.1em;
  height: 1rem;
`;
