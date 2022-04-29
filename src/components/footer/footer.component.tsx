import React, {ReactElement} from 'react';
import {Footer, Span} from './footer.styles';
import {LinkComponent} from '../link/link.component';

export function FooterComponent(): ReactElement {
  return (
    <Footer>

      <LinkComponent href="/cgv">
        <Span>CGV</Span>
      </LinkComponent>

      <LinkComponent href="/politique-de-confidentialite">
        <Span>Politique de Confidentialité</Span>
      </LinkComponent>

      <LinkComponent href="/mentions-legales">
        <Span>Mentions Légales</Span>
      </LinkComponent>

      <Span noAfter>Catalogue 2022</Span>
    </Footer>
  );
}
