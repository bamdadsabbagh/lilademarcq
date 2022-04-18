import React, {ReactElement} from 'react';
import instagramWithCircle
  from '@iconify/icons-entypo-social/instagram-with-circle';
import facebookIcon from '@iconify/icons-fa6-brands/facebook';
import linkedinWithCircle
  from '@iconify/icons-entypo-social/linkedin-with-circle';
import {GetStaticPropsResult} from 'next';
import {theme} from '../app/styles/theme';
import {FormComponent} from '../components/form/form.component';
import {
  ContactComponent,
  ContactComponentProps,
} from '../components/contact/contact.component';
import {SectionComponent} from '../components/section/section.component';
import {
  SectionTitleComponent,
} from '../components/section-title/section-title.component';
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
import {ValuesModule} from '../modules/values/values.module';
import {AwardsModule, AwardsModuleProps} from '../modules/awards/awards.module';

interface IndexProps {
  about: string;
  awards: AwardsModuleProps;
  contact: ContactComponentProps;
}

export default function Index({
  about,
  awards,
  contact,
}: IndexProps): ReactElement {
  return (
    <>
      <ProductsModule />

      <SectionComponent backgroundColor={theme.salmonLight} verticalPadding={4}>
        <SectionTitleComponent align="center">
          Artiste, designer et poétesse
        </SectionTitleComponent>
        <ImageTextComponent
          alt="portrait"
          image={Portrait}
        >
          <AProposMarkdown>
            <MarkdownComponent content={about} />
          </AProposMarkdown>
        </ImageTextComponent>
      </SectionComponent>

      <ValuesModule />

      <AwardsModule aDesign={awards.aDesign} houzz={awards.houzz} />

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
        <ContactComponent content={contact.content} />
      </SectionComponent>
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<IndexProps>> {
  return {
    props: {
      about: await getHtmlFromMarkdown('a-propos'),
      awards: {
        aDesign: await getHtmlFromMarkdown('dinstinctions-a-design'),
        houzz: await getHtmlFromMarkdown('dinstinctions-houzz'),
      },
      contact: {
        content: await getHtmlFromMarkdown('contact'),
      },
    },
  };
}
