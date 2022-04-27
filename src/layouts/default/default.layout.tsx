import React, {ReactElement} from 'react';
import {useAppLayout} from './hooks/use-default-layout';
import {MetaComponent} from '../../components/meta/meta.component';
import NavComponent from '../../components/nav/nav.component';
import {Children} from '../app/app.styles';
import {FooterComponent} from '../../components/footer/footer.component';

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
          <Children>
            {children}
          </Children>
          <FooterComponent />
        </>
      )}
    </>
  );
}
