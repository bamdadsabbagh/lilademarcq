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
import {ObjectsModule, ObjectTile} from '../modules/objects/objects.module';
import {ValuesModule} from '../modules/values/values.module';
import {AwardsModule} from '../modules/awards/awards.module';
import {SocialsModule} from '../modules/socials/socials.module';
import {fetchObjects} from '../utils/fetch-objects';
import {fetchSection, LDSection} from '../utils/fetch-section';
import {fetchAwards, LDAward} from '../utils/fetch-awards';
import {fetchValues, LDValues} from '../utils/fetch-values';
import {fetchSocials, LDSocial} from '../utils/fetch-socials';
import {REVALIDATE} from '../constants';
import {MetaComponent} from '../components/meta/meta.component';

interface IndexProps {
  about: LDSection;
  awards: LDAward[];
  objects: ObjectTile[];
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
      <MetaComponent description="Home" />
      <ObjectsModule objects={objects} />

      <SectionComponent backgroundColor={theme.salmonLight}>
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

      <SectionComponent backgroundColor={theme.green}>
        <FormComponent />
      </SectionComponent>

      <SectionComponent backgroundColor={theme.salmonLight}>
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
