import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
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
import {AProposMarkdown} from '../pages-styles/index.styles';
import {ProductsModule, ProductTile} from '../modules/products/products.module';
import {ValuesModule} from '../modules/values/values.module';
import {AwardsModule} from '../modules/awards/awards.module';
import {SocialsModule} from '../modules/socials/socials.module';
import {fetchObjects} from '../utils/fetch-objects';
import {fetchSection, LDSection} from '../utils/fetch-section';
import {fetchAwards, LDAward} from '../utils/fetch-awards';
import {fetchValues, LDValues} from '../utils/fetch-values';
import {fetchSocials, LDSocial} from '../utils/fetch-socials';
import {REVALIDATE} from '../constants';

interface IndexProps {
  about: LDSection;
  awards: LDAward[];
  objects: ProductTile[];
  contact: LDSection;
  socials: LDSocial[];
  values: LDValues;
}

export default function Index({
  awards,
  objects,
  about,
  contact,
  socials,
  values,
}: IndexProps): ReactElement {
  return (
    <>
      <SectionComponent backgroundColor={theme.green} verticalPadding={4}>
        <FormComponent />
      </SectionComponent>

      <ProductsModule products={objects} />

      <SectionComponent backgroundColor={theme.salmonLight} verticalPadding={4}>
        <SectionTitleComponent align={AlignKeys.center}>
          {about.title}
        </SectionTitleComponent>
        <ImageTextComponent
          imageAlt="portrait"
          image={about.image.url}
        >
          <AProposMarkdown>
            {documentToReactComponents(about.body.json)}
          </AProposMarkdown>
        </ImageTextComponent>
      </SectionComponent>

      <ValuesModule values={values} />

      <AwardsModule awards={awards} />

      <SocialsModule socials={socials} />

      <SectionComponent backgroundColor={theme.green} verticalPadding={4}>
        <FormComponent />
      </SectionComponent>

      <SectionComponent backgroundColor={theme.salmonLight} verticalPadding={4}>
        <ContactComponent contact={contact} />
      </SectionComponent>
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<IndexProps>> {
  const objects = await fetchObjects();
  const about = await fetchSection('about');
  const contact = await fetchSection('contact');
  const awards = await fetchAwards();
  const socials = await fetchSocials();
  const values = await fetchValues();

  return {
    props: {
      about,
      contact,
      objects,
      awards,
      socials,
      values,
    },
    revalidate: REVALIDATE,
  };
}
