import React, {ReactElement} from 'react';
import {useAtom} from 'jotai';
import {Footer, Span} from './footer.styles';
import {LinkComponent} from '../link/link.component';
import {catalogAtom} from '../../atoms/catalog.atom';

export function FooterComponent(): ReactElement {
  const [catalog] = useAtom(catalogAtom);

  return (
    <Footer>

      <LinkComponent href="/cgv">
        <Span>CGV</Span>
      </LinkComponent>

      <LinkComponent href="/politique-de-confidentialite">
        <Span>Politique de Confidentialité</Span>
      </LinkComponent>

      <LinkComponent href="/mentions-legales">
        <Span noAfter={catalog === null}>
          Mentions Légales
        </Span>
      </LinkComponent>

      {catalog && (
        <Span noAfter>
          <LinkComponent href={catalog.pdf.url}>
            {catalog.name}
          </LinkComponent>
        </Span>
      )}
    </Footer>
  );
}
