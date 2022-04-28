import React, {ReactElement, useCallback} from 'react';
import instagramWithCircle
  from '@iconify/icons-entypo-social/instagram-with-circle';
import facebookIcon from '@iconify/icons-fa6-brands/facebook';
import linkedinWithCircle
  from '@iconify/icons-entypo-social/linkedin-with-circle';
import {SectionComponent} from '../../components/section/section.component';
import {
  SocialButtonComponent,
} from './components/social-button/social-button.component';
import {LDSocial} from '../../utils/fetch-socials';
import {Container} from './socials.styles';

interface SocialsModuleProps {
  socials: LDSocial[];
}

export function SocialsModule({socials}: SocialsModuleProps): ReactElement {
  const getIcon = useCallback((slug: string) => {
    if (slug === 'instagram') {
      return instagramWithCircle;
    } else if (slug === 'facebook') {
      return facebookIcon;
    } else if (slug === 'linkedin') {
      return linkedinWithCircle;
    }
  }, []);

  return (
    <>
      <SectionComponent>
        <Container>
          {socials.map((social) => (
            <SocialButtonComponent
              key={social.slug}
              href={social.link}
              front={getIcon(social.slug)}
              back={social.image.url}
            />

          ))}
        </Container>
      </SectionComponent>
    </>
  );
}
