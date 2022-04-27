import React, {ReactElement} from 'react';
import {Header, LogoContainer} from './header.styles';
import {NavComponent} from './components/nav/nav.component';
import {LogoComponent} from './components/logo/logo.component';
import {useNavComponent} from './hooks/use-nav-component';

export default function HeaderComponent(): ReactElement {
  const {navRef} = useNavComponent();

  return (
    <Header ref={navRef}>
      <LogoContainer>
        <LogoComponent />
      </LogoContainer>
      <NavComponent />
    </Header>
  );
}
