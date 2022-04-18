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
import {
  ContentTitleComponent,
} from '../components/content-title/content-title.component';
import {
  ImageTextComponent,
} from '../components/image-text/image-text.component';
import Portrait from '../../public/assets/images/portrait.jpg';
import Object01Image from '../../public/images/object-01.png';
import Object02Image from '../../public/images/object-02.png';
import Object03Image from '../../public/images/object-03.png';
import {
  ContentCenterComponent,
} from '../components/content-center/content-center.component';
import {
  SocialButtonComponent,
} from '../components/social-button/social-button.component';
import {getHtmlFromMarkdown} from '../utils/get-html-from-markdown';
import {MarkdownComponent} from '../components/markdown/markdown.component';
import {AProposMarkdown} from '../pages-styles/index.styles';
import {ProductsModule} from '../modules/products/products.module';

interface IndexProps {
  about: string;
}

export default function Index({about}: IndexProps): ReactElement {
  return (
    <>
      <ProductsModule />

      <SectionComponent backgroundColor={theme.salmonLight} verticalPadding={4}>
        <ContentTitleComponent align="center">
          Artiste, designer et poétesse
        </ContentTitleComponent>
        <ImageTextComponent
          alt="portrait"
          image={Portrait}
        >
          <AProposMarkdown>
            <MarkdownComponent content={about} />
          </AProposMarkdown>
        </ImageTextComponent>
      </SectionComponent>

      <SectionComponent verticalPadding={4}>
        <ContentTitleComponent align="right">
          Mes valeurs
        </ContentTitleComponent>
        <div>
          content
        </div>
      </SectionComponent>

      <SectionComponent backgroundColor={theme.salmonLight} verticalPadding={4}>
        <ContentTitleComponent align="left">
          Mes distinctions
        </ContentTitleComponent>
        <div>
          content
        </div>
      </SectionComponent>

      <SectionComponent verticalPadding={4}>
        <ContentCenterComponent>
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
        </ContentCenterComponent>
      </SectionComponent>

      <SectionComponent backgroundColor={theme.green} verticalPadding={4}>
        <FormComponent />
      </SectionComponent>

      <SectionComponent backgroundColor={theme.salmonLight} verticalPadding={4}>
        <ContactComponent />
      </SectionComponent>
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<IndexProps>> {
  return {
    props: {
      about: await getHtmlFromMarkdown('a-propos'),
    },
  };
}
