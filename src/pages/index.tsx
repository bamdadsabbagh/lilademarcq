import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {theme} from '../app/styles/theme';
import {FormModule} from '../modules/form/form.module';
import {SectionComponent} from '../components/section/section.component';
import {ObjectsModule} from '../modules/objects/objects.module';
import {AwardsModule} from '../modules/awards/awards.module';
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
import {LDObject} from '../utils/fetch-object';
import {fetchForm, FormInterface} from '../utils/fetch-form';
import {HeroComponent} from '../components/hero/hero.component';
import {ValuesModule} from '../modules/values/values.module';
import {fetchHero, RichImage} from '../utils/fetch-hero';
import {FooterComponent} from '../components/footer/footer.component';
import {CatalogInterface, fetchCatalog} from '../utils/fetch-catalog';
import {CarouselComponent} from '../components/carousel/carousel.component';

interface IndexProps {
  about: LDSection;
  awards: LDAward[];
  objects: LDObject[];
  contact: LDSection;
  socials: LDSocial[];
  values: LDValues;
  form: FormInterface;
  hero: RichImage[];
  catalog: CatalogInterface;
}

export default function Index({
  awards,
  objects,
  about,
  contact,
  socials,
  values,
  form,
  hero,
  catalog,
}: IndexProps): ReactElement {
  return (
    <>
      <MetaComponent description="Home" />

      <DefaultLayout customMeta>
        <HeroComponent>
          <CarouselComponent
            isFooter
            slides={hero.map((image) => ({
              src: image.image.url,
              alt: image.shortDescription,
              width: image.image.width,
              height: image.image.height,
              base64: image.image.base64,
            }))}
          />
        </HeroComponent>

        <ObjectsModule objects={objects} />

        <ImageTextColsComponent
          title={about.title}
          image={about.image}
          body={about.body}
        />

        <ValuesModule values={values} />

        <AwardsModule awards={awards} />

        <SectionComponent backgroundColor={theme.green}>
          <FormModule form={form} />
        </SectionComponent>

        <ContactModule contact={contact} />
      </DefaultLayout>

      <FooterComponent catalog={catalog} socials={socials} />
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
  const hero = await fetchHero();
  const catalog = await fetchCatalog();

  return {
    props: {
      about,
      contact,
      objects,
      awards,
      socials,
      values,
      form,
      hero,
      catalog,
    },
    revalidate: REVALIDATE,
  };
}
