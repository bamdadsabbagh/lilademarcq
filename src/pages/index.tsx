import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {theme} from '../app/styles/theme';
import {FormModule} from '../modules/form/form.module';
import {SectionComponent} from '../components/section/section.component';
import {ObjectsModule} from '../modules/objects/objects.module';
import {AwardsModule} from '../modules/awards/awards.module';
import {SocialsModule} from '../modules/socials/socials.module';
import {fetchObjects} from '../utils/fetch-objects';
import {fetchSection, LDSection} from '../utils/fetch-section';
import {fetchAwards, LDAward} from '../utils/fetch-awards';
import {fetchValues, LDValues} from '../utils/fetch-values';
import {fetchSocials, LDSocial} from '../utils/fetch-socials';
import {REVALIDATE} from '../constants';
import {MetaComponent} from '../components/meta/meta.component';
import {DefaultLayout} from '../layouts/default/default.layout';
import {
  ImageTextColsComponent,
} from '../components/image-text-cols/image-text-cols.component';
import {ContactModule} from '../modules/contact/contact.module';
import {fetchObject, LDObject} from '../utils/fetch-object';
import {fetchForm, FormInterface} from '../utils/fetch-form';
import {HeroComponent} from '../components/hero/hero.component';
import {ValuesModule} from '../modules/values/values.module';

interface IndexProps {
  about: LDSection;
  awards: LDAward[];
  objects: LDObject[];
  contact: LDSection;
  socials: LDSocial[];
  values: LDValues;
  form: FormInterface;
  object: LDObject;
}

export default function Index({
  awards,
  objects,
  about,
  contact,
  socials,
  values,
  form,
  object,
}: IndexProps): ReactElement {
  return (
    <>
      <MetaComponent description="Home" />
      <DefaultLayout customMeta>
        <HeroComponent images={object.imagesCollection.items} />

        <ObjectsModule objects={objects} />

        <ImageTextColsComponent
          title={about.title}
          image={about.image}
          body={about.body}
        />

        <ValuesModule values={values} />

        <AwardsModule awards={awards} />

        <SocialsModule socials={socials} />

        <SectionComponent backgroundColor={theme.green}>
          <FormModule form={form} />
        </SectionComponent>

        <ContactModule contact={contact} />
      </DefaultLayout>
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
  const form = await fetchForm();
  const object = await fetchObject('isiqu');

  return {
    props: {
      about,
      contact,
      objects,
      awards,
      socials,
      values,
      form,
      object,
    },
    revalidate: REVALIDATE,
  };
}
