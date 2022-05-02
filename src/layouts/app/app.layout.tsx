import React, {ReactElement} from 'react';
import HeaderComponent from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {App, Main, Wrapper} from './app.layout.styles';

interface AppLayoutProps {
  children: ReactElement[] | ReactElement;
}

export function AppLayout({
  children,
}: AppLayoutProps): ReactElement {
  return (
    <>
      <App>
        <HeaderComponent />
        <Wrapper>
          <Main>
            {children}
          </Main>
          <FooterComponent />
        </Wrapper>
      </App>
    </>
  );
}
