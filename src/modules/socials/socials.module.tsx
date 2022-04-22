import React, {ReactElement} from 'react';
import instagramWithCircle
  from '@iconify/icons-entypo-social/instagram-with-circle';
import facebookIcon from '@iconify/icons-fa6-brands/facebook';
import linkedinWithCircle
  from '@iconify/icons-entypo-social/linkedin-with-circle';
import {SectionComponent} from '../../components/section/section.component';
import {
  ContentCenterComponent,
} from '../../components/content-center/content-center.component';
import {
  SocialButtonComponent,
} from '../../components/social-button/social-button.component';
import Tile1
  from '../../../public/objets/indlu/thumbnail/indlu-lila-demarcq-design-acier-souvenir-portant-createur-espace-CARRE.jpg';
import Tile2
  from '../../../public/objets/isiqu/thumbnail/isiqu-square-lila-demarcq1.jpg';
import Tile3
  from '../../../public/objets/isihla/thumbnail/lila-demarcq-design-biennale-saint-etienne-ceramique-store-CARRE.jpg';

export function SocialsModule(): ReactElement {
  return (
    <>
      <SectionComponent verticalPadding={4}>
        <ContentCenterComponent>
          <SocialButtonComponent
            href="https://www.instagram.com/lila.demarcq"
            front={instagramWithCircle}
            back={Tile1}
          />
          <SocialButtonComponent
            href="https://www.facebook.com/lilademarcq"
            front={facebookIcon}
            back={Tile2}
          />
          <SocialButtonComponent
            href="https://www.linkedin.com/in/lila-demarcq"
            front={linkedinWithCircle}
            back={Tile3}
          />
        </ContentCenterComponent>
      </SectionComponent>
    </>
  );
}
