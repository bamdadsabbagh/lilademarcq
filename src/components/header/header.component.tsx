import React, {ReactElement} from 'react';
import {Header, LogoContainer} from './header.styles';
import {NavComponent} from './components/nav/nav.component';
import {LogoComponent} from './components/logo/logo.component';

export default function HeaderComponent(): ReactElement {
  return (
    <Header>
      <LogoContainer>
        <LogoComponent />
      </LogoContainer>
      <NavComponent />
    </Header>
  );
}
