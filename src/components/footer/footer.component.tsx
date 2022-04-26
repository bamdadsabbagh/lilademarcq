import React, {ReactElement} from 'react';
import {Footer, Span} from './footer.styles';
import {LinkComponent} from '../link/link.component';

export function FooterComponent(): ReactElement {
  return (
    <Footer>
      <LinkComponent href="/mentions-legales">
        <Span>Mentions Légales</Span>
      </LinkComponent>

      <LinkComponent href="/cgv">
        <Span>Conditions Générales de Vente</Span>
      </LinkComponent>

      <Span>Catalogue 2022</Span>

      <Span noAfter={1}>Contact</Span>
    </Footer>
  );
}
