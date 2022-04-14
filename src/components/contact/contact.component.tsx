import React, {ReactElement} from 'react';
import ContactImage from '../../../public/images/contact.jpg';
import {StyledContainer, StyledContent, StyledImage} from './contact.styles';

export function ContactComponent(): ReactElement {
  return (
    <StyledContainer>
      <StyledImage
        alt="contact"
        src={ContactImage}
        placeholder="blur"
        objectFit="contain"
        width={640}
        height={480}
      />
      <StyledContent>
        <span>lila@demarcq.com</span>
        <br />
        <span>06 09 79 38 25</span>
        <br />
        <span />
        <br />
        <span>Lila Demarcq Design</span>
        <br />
        <span>3 rue Georges Teissier</span>
        <br />
        <span>42000, Saint-Etienne</span>
        <br />
        <span>FRANCE</span>
        <br />
        <span />
        <br />
        <span>Je répondrai avec</span>
        <br />
        <span> plaisir à vos questions !</span>
      </StyledContent>
    </StyledContainer>
  );
}
