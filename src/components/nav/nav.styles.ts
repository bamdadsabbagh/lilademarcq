import styled from 'styled-components';

const logoSize = '108px';

export const Nav = styled.nav`
  position: sticky;
  top: calc(-${logoSize} - 1.5rem);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1.5rem 2rem;
  background-color: ${({theme}) => theme.white};
  transition: top 500ms ease-in-out;
  gap: 1.5rem;

  z-index: 1000;
`;

export const LogoContainer = styled.div`
  height: ${logoSize};
  width: 100%;
`;

export const MenuContainer = styled.div`
  margin: 0 -1em;
  width: 100%;

  display: grid;
  justify-content: center;
  //grid-template-columns: 5em 7em 6em 6em 9em 6em 8em;
  grid-template-columns: 80px 112px 96px 96px 144px 96px 128px;

  height: 1.1em;
`;
