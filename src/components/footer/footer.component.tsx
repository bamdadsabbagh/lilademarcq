import React, {ReactElement} from 'react';
import Link from 'next/link';
import {Section, Span} from './footer.styles';

export function FooterComponent(): ReactElement {
  return (
    <Section>
      <Link href="/mentions-legales">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          <Span>Mentions Légales</Span>
        </a>
      </Link>

      <Link href="/cgv">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          <Span>Conditions Générales de Vente</Span>
        </a>
      </Link>

      <Span>Catalogue 2022</Span>

      <Span noAfter={1}>Contact</Span>
    </Section>
  );
}
