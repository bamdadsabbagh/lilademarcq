import Link from 'next/link';
import React from 'react';

interface LinkComponentProps {
  href: string;
  children: JSX.Element | string;
}

export function LinkComponent({
  href,
  children,
}: LinkComponentProps): JSX.Element {
  return (
    <>
      {href.startsWith('/') ? (
        <Link href={href}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>{children}</a>
        </Link>
      ) : (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      )}
    </>
  );
}
