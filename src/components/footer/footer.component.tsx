import React, {ReactElement} from 'react';
import {StyledSection} from './footer.styles';

export function FooterComponent(): ReactElement {
  return (
    <StyledSection>
      <div>
        <span>Mentions Légales</span>
        <span>Conditions Générales de Vente</span>
        <span>Catalogue 2020</span>
        <span>Contact</span>
      </div>
    </StyledSection>
  );
}
