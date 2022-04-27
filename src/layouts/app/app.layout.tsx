import React, {ReactElement} from 'react';
import NavComponent from '../../components/nav/nav.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {Children, Container} from './app.styles';

interface AppLayoutProps {
  children: ReactElement[] | ReactElement;
}

export function AppLayout({
  children,
}: AppLayoutProps): ReactElement {
  return (
    <>
      <Container>
        <NavComponent />
        <Children>
          {children}
        </Children>
        <FooterComponent />
      </Container>
    </>
  );
}
