import React, {ReactElement} from 'react';
import {MetaComponent} from '../../components/meta/meta.component';

interface DefaultLayoutProps {
  children: ReactElement | ReactElement[];
  customMeta?: boolean;
}

export function DefaultLayout({
  children,
  customMeta = false,
}: DefaultLayoutProps): ReactElement {
  return (
    <>
      {!customMeta && <MetaComponent />}
      {children}
    </>
  );
}
