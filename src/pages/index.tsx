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
  AlignKeys,
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
import {getMarkdown} from '../utils/get-markdown';
import {MarkdownComponent} from '../components/markdown/markdown.component';
import {AProposMarkdown} from '../pages-styles/index.styles';
import {ProductsModule, ProductTile} from '../modules/products/products.module';
import {ValuesModule} from '../modules/values/values.module';
import {AwardsModule, AwardsModuleProps} from '../modules/awards/awards.module';
import {convertMarkdownToHtml} from '../utils/convert-markdown-to-html';
import {getProductsProps} from '../utils/get-products-props';

interface IndexProps {
  about: string;
  awards: AwardsModuleProps;
  contact: string;
  products: ProductTile[];
}

export default function Index({
  about,
  awards,
  contact,
  products,
}: IndexProps): ReactElement {
  return (
    <>
      <ProductsModule products={products} />

      <SectionComponent backgroundColor={theme.salmonLight} verticalPadding={4}>
        <SectionTitleComponent align={AlignKeys.center}>
          Artiste, designer et poétesse
        </SectionTitleComponent>
        <ImageTextComponent
          imageAlt="portrait"
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
        <ContactComponent content={contact} />
      </SectionComponent>
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<IndexProps>> {
  const about = getMarkdown('a-propos');
  const aDesign = getMarkdown('dinstinctions-a-design');
  const houzz = getMarkdown('dinstinctions-houzz');
  const contact = getMarkdown('contact');

  return {
    props: {
      about: await convertMarkdownToHtml(about),
      awards: {
        aDesign: await convertMarkdownToHtml(aDesign),
        houzz: await convertMarkdownToHtml(houzz),
      },
      contact: await convertMarkdownToHtml(contact),
      products: getProductsProps(),
    },
  };
}
