import React, {ReactElement} from 'react';
import instagramWithCircle
  from '@iconify/icons-entypo-social/instagram-with-circle';
import facebookIcon from '@iconify/icons-fa6-brands/facebook';
import linkedinWithCircle
  from '@iconify/icons-entypo-social/linkedin-with-circle';
import {GetStaticPropsResult} from 'next';
import {theme} from '../app/styles/theme';
import {FormComponent} from '../components/form/form.component';
import {ContactComponent} from '../components/contact/contact.component';
import {SectionComponent} from '../components/section/section.component';
import {TitleComponent} from '../components/title/title.component';
import {
  ImageTextComponent,
} from '../components/image-text/image-text.component';
import Object01Image from '../../public/images/object-01.png';
import Object02Image from '../../public/images/object-02.png';
import Object03Image from '../../public/images/object-03.png';
import PortraitImage from '../../public/images/portrait.jpg';
import {CenterComponent} from '../components/center/center.component';
import {
  SocialButtonComponent,
} from '../components/social-button/social-button.component';
import {getHtmlFromMarkdown} from '../utils/get-html-from-markdown';
import {MarkdownComponent} from '../components/markdown/markdown.component';
import {AProposMarkdown} from '../pages-styles/index.styles';
import {ProductsModule} from '../modules/products/products.module';

interface IndexProps {
  aPropos: string;
}

export default function Index({aPropos}: IndexProps): ReactElement {
  return (
    <>
      <ProductsModule />

      <SectionComponent backgroundColor={theme.salmonLight}>
        <TitleComponent align="center">
          Artiste, designer et poétesse
        </TitleComponent>
        <ImageTextComponent
          alt="portrait"
          image={PortraitImage}
        >
          <AProposMarkdown>
            <MarkdownComponent content={aPropos} />
          </AProposMarkdown>
        </ImageTextComponent>
      </SectionComponent>

      <SectionComponent>
        <TitleComponent align="right">
          Mes valeurs
        </TitleComponent>
        <div>
          content
        </div>
      </SectionComponent>

      <SectionComponent backgroundColor={theme.salmonLight}>
        <TitleComponent align="left">
          Mes distinctions
        </TitleComponent>
        <div>
          content
        </div>
      </SectionComponent>

      <SectionComponent>
        <CenterComponent>
          <SocialButtonComponent
            href="https://www.instagram.com/lila.demarcq"
            front={instagramWithCircle}
            back={Object01Image}
          />
          <SocialButtonComponent
            href="https://www.facebook.com/lilademarcq"
            front={facebookIcon}
            back={Object02Image}
          />
          <SocialButtonComponent
            href="https://www.linkedin.com/in/lila-demarcq"
            front={linkedinWithCircle}
            back={Object03Image}
          />
        </CenterComponent>
      </SectionComponent>

      <SectionComponent backgroundColor={theme.green}>
        <FormComponent />
      </SectionComponent>

      <SectionComponent backgroundColor={theme.salmonLight}>
        <ContactComponent />
      </SectionComponent>
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<IndexProps>> {
  return {
    props: {
      aPropos: await getHtmlFromMarkdown('a-propos'),
    },
  };
}
