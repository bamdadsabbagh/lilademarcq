import React, {ReactElement} from 'react';
import {useAtom} from 'jotai';
import NavComponent from '../../components/nav/nav.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {Children, Container} from './app.styles';
import {setIsFirstDrawAtom} from '../../atoms/is-first-draw';
import {useTimeout} from '../../hooks/use-timeout';
import {FIRST_DRAW_TIMEOUT} from '../../constants';

interface AppLayoutProps {
  children: ReactElement[] | ReactElement;
}

export function AppLayout({
  children,
}: AppLayoutProps): ReactElement {
  const [, setIsFirstDraw] = useAtom(setIsFirstDrawAtom);

  useTimeout(() => {
    setIsFirstDraw(false);
  }, FIRST_DRAW_TIMEOUT);

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
