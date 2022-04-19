import React, {ReactElement} from 'react';
import {useAtom} from 'jotai';
import NavComponent from '../../components/nav/nav.component';
import {HeaderComponent} from '../../components/header/header.component';
import {appLoadedAtom} from '../../atoms/app-loaded';
import {useTimeout} from '../../hooks/use-timeout';
import {FooterComponent} from '../../components/footer/footer.component';
import {Container} from './app.styles';

interface AppLayoutProps {
  children?: ReactElement;
}

/**
 * Component for the app layout
 */
export function AppLayout({children}: AppLayoutProps): ReactElement {
  const [, setAppLoaded] = useAtom(appLoadedAtom);

  useTimeout(() => {
    setAppLoaded(true);
  }, 2100);

  return (
    <Container>
      <HeaderComponent />
      <NavComponent />
      {children}
      <FooterComponent />
    </Container>
  );
}
