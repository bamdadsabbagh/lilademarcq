import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {fontMontserrat} from '../../app/styles/fonts';
import NavComponent from '../../components/nav/nav.component';
import {FooterComponent} from '../../components/footer/footer.component';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${fontMontserrat};
`;

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
        {children}
        <FooterComponent />
      </Container>
    </>
  );
}
