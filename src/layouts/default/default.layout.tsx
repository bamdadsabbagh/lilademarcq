import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {useAppLayout} from './hooks/use-default-layout';
import {MetaComponent} from '../../components/meta/meta.component';
import NavComponent from '../../components/nav/nav.component';
import {FooterComponent} from '../../components/footer/footer.component';

const Wrapper = styled.div`
  width: 100%;
`;

interface DefaultLayoutProps {
  children: ReactElement | ReactElement[];
  customMeta?: boolean;
}

export function DefaultLayout({
  children,
  customMeta = false,
}: DefaultLayoutProps): ReactElement {
  const {isReady} = useAppLayout();

  return (
    <>
      {!customMeta && <MetaComponent />}
      {isReady && (
        <>
          <NavComponent />
          <Wrapper>
            {children}
          </Wrapper>
          <FooterComponent />
        </>
      )}
    </>
  );
}
