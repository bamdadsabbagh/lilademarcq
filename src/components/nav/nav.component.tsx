import React, {ReactElement} from 'react';
import {LogoContainer, MenuContainer, Nav} from './nav.styles';
import {MenuComponent} from './components/menu/menu.component';
import {LogoComponent} from './components/logo/logo.component';
import {useNavComponent} from './hooks/use-nav-component';

export default function NavComponent(): ReactElement {
  const {navRef} = useNavComponent();

  return (
    <Nav ref={navRef}>
      <LogoContainer>
        <LogoComponent />
      </LogoContainer>
      <MenuContainer>
        <MenuComponent />
      </MenuContainer>
    </Nav>
  );
}
