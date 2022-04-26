import React, {ReactElement} from 'react';
import Link from 'next/link';

interface LinkComponentProps {
  href: string;
  children: ReactElement;
}

export function LinkComponent({
  href,
  children,
}: LinkComponentProps): ReactElement {
  return (
    <>
      <Link href={href}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          {children}
        </a>
      </Link>
    </>
  );
}
