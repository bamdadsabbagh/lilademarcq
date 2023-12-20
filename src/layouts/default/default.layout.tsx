import React from 'react';

interface DefaultLayoutProps {
  children: JSX.Element | JSX.Element[];
}

export function DefaultLayout({children}: DefaultLayoutProps): JSX.Element {
  return <>{children}</>;
}
