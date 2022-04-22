import React, {ReactElement} from 'react';
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
import {getMarkdown} from '../utils/get-markdown';
import {MarkdownComponent} from '../components/markdown/markdown.component';
import {AProposMarkdown} from '../pages-styles/index.styles';
import {ProductsModule, ProductTile} from '../modules/products/products.module';
import {ValuesModule} from '../modules/values/values.module';
import {AwardsModule, AwardsModuleProps} from '../modules/awards/awards.module';
import {convertMarkdownToHtml} from '../utils/convert-markdown-to-html';
import {getProducts} from '../utils/get-products';
import {SocialsModule} from '../modules/socials/socials.module';

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

      <SocialsModule />

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
      products: getProducts(),
    },
  };
}
