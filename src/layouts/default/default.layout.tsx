import React, {ReactElement} from 'react';

interface DefaultLayoutProps {
  children: ReactElement | ReactElement[];
}

export function DefaultLayout({
  children,
}: DefaultLayoutProps): ReactElement {
  return (
    <>
      {children}
    </>
  );
}
