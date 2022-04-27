import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {fontMontserrat} from '../../app/styles/fonts';

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
        {children}
      </Container>
    </>
  );
}
