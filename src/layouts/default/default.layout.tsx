import React, {ReactElement} from 'react';
import {MetaComponent} from '../../components/meta/meta.component';
import {useDefaultLayout} from './hooks/use-default-layout';

interface DefaultLayoutProps {
  children: ReactElement | ReactElement[];
  customMeta?: boolean;
}

export function DefaultLayout({
  children,
  customMeta = false,
}: DefaultLayoutProps): ReactElement {
  useDefaultLayout();

  return (
    <>
      {!customMeta && <MetaComponent />}
      {children}
    </>
  );
}
