import React, {ReactElement} from 'react';
import NavComponent from '../../components/nav/nav.component';
import {HeaderComponent} from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {Container} from './app.styles';
import {useAppLayout} from './hooks/use-app-layout';

interface AppLayoutProps {
  children?: ReactElement;
}

/**
 * Component for the app layout
 */
export function AppLayout({children}: AppLayoutProps): ReactElement {
  const {routes} = useAppLayout();

  return (
    <>
      {routes.length !== 0 && (
        <Container>
          <HeaderComponent />
          <NavComponent routes={routes} />
          {children}
          <FooterComponent />
        </Container>
      )}
    </>
  );
}
