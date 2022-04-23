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
  const {isReady} = useAppLayout();

  return (
    <>
      {isReady && (
        <Container>
          <HeaderComponent />
          <NavComponent />
          {children}
          <FooterComponent />
        </Container>
      )}
    </>
  );
}
