import React from 'react';
import HeaderComponent from '../../components/header/header.component';
import {App, Main} from './app.layout.styles';

interface AppLayoutProps {
  children: JSX.Element | JSX.Element[];
}

export function AppLayout({children}: AppLayoutProps): JSX.Element {
  return (
    <>
      <App>
        <HeaderComponent />
        <Main>{children}</Main>
      </App>
    </>
  );
}
