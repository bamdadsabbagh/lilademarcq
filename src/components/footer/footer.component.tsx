import instagramWithCircle from '@iconify/icons-entypo-social/instagram-with-circle';
import linkedinWithCircle from '@iconify/icons-entypo-social/linkedin-with-circle';
import facebookIcon from '@iconify/icons-fa6-brands/facebook';
import React, {useCallback} from 'react';
import {LDCatalog} from '../../utils/fetch-catalog';
import {LDSocial} from '../../utils/fetch-socials';
import {LinkComponent} from '../link/link.component';
import {SocialButtonComponent} from './components/social-button/social-button.component';
import {Footer, Links, Socials, Span} from './footer.component.styles';

interface FooterComponentProps {
  catalog: LDCatalog;
  socials: LDSocial[];
}

export function FooterComponent({
  catalog,
  socials,
}: FooterComponentProps): JSX.Element {
  const getSocialIcon = useCallback((slug: string) => {
    if (slug === 'instagram') {
      return instagramWithCircle;
    } else if (slug === 'facebook') {
      return facebookIcon;
    } else if (slug === 'linkedin') {
      return linkedinWithCircle;
    }
  }, []);

  return (
    <Footer>
      <Socials>
        {socials.map((social) => (
          <SocialButtonComponent
            key={social.slug}
            href={social.link}
            alt={social.slug}
            front={getSocialIcon(social.slug)}
            back={social.image}
          />
        ))}
      </Socials>

      <Links>
        <LinkComponent href="/cgv">
          <Span>CGV</Span>
        </LinkComponent>

        <LinkComponent href="/politique-de-confidentialite">
          <Span>Politique de Confidentialité</Span>
        </LinkComponent>

        <LinkComponent href="/mentions-legales">
          <Span>Mentions Légales</Span>
        </LinkComponent>

        <Span noAfter>
          <LinkComponent href={catalog.pdf.url}>{catalog.name}</LinkComponent>
        </Span>
      </Links>
    </Footer>
  );
}
