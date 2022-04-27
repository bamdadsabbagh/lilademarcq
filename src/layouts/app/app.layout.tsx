import React, {ReactElement} from 'react';
import NavComponent from '../../components/nav/nav.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {Children, Container} from './app.styles';
import {useAppLayout} from './hooks/use-app-layout';

interface AppLayoutProps {
  children: ReactElement[] | ReactElement;
}

export function AppLayout({
  children,
}: AppLayoutProps): ReactElement {
  const {isReady} = useAppLayout();

  return (
    <>
      {isReady && (
        <Container>
          <NavComponent />
          <Children>
            {children}
          </Children>
          <FooterComponent />
        </Container>
      )}
    </>
  );
}
