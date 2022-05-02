import React, {ReactElement} from 'react';
import Link from 'next/link';

interface LinkComponentProps {
  href: string;
  children: ReactElement | string;
}

export function LinkComponent({
  href,
  children,
}: LinkComponentProps): ReactElement {
  return (
    <>
      {href.startsWith('/') ? (
        <Link href={href}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>
            {children}
          </a>
        </Link>
      ) : (
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      )}
    </>
  );
}
