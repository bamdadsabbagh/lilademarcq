import styled from 'styled-components';

export const Nav = styled.nav`
  position: sticky;
  top: calc(-8em - 1.5rem);
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
  height: 8em;
  width: 100%;
`;

export const MenuContainer = styled.div`
  margin: 0 -1em;
  width: 100%;

  display: grid;
  justify-content: center;
  grid-template-columns: 5em 7em 6em 6em 9em 6em 8em;
`;
