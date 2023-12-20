import React from 'react';
import {LogoComponent} from './components/logo/logo.component';
import {NavComponent} from './components/nav/nav.component';
import {Header, LogoContainer} from './header.component.styles';

export default function HeaderComponent(): JSX.Element {
  return (
    <Header>
      <LogoContainer>
        <LogoComponent />
      </LogoContainer>
      <NavComponent />
    </Header>
  );
}
