import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {FormModule} from '../modules/form/form.module';
import {ObjectsModule} from '../modules/objects/objects.module';
import {AwardsModule} from '../modules/awards/awards.module';
import {fetchMyObjects, LDMyObjects} from '../utils/fetch-my-objects';
import {fetchSection, LDSection} from '../utils/fetch-section';
import {fetchAwards, LDAward} from '../utils/fetch-awards';
import {fetchValues, LDValues} from '../utils/fetch-values';
import {fetchSocials, LDSocial} from '../utils/fetch-socials';
import {REVALIDATE} from '../constants';
import {DefaultLayout} from '../layouts/default/default.layout';
import {
  ImageTextColsComponent,
} from '../components/image-text-cols/image-text-cols.component';
import {ContactModule} from '../modules/contact/contact.module';
import {fetchForm, FormInterface} from '../utils/fetch-form';
import {HeroComponent} from '../components/hero/hero.component';
import {ValuesModule} from '../modules/values/values.module';
import {fetchMyHome, LDMyHome} from '../utils/fetch-my-home';
import {FooterComponent} from '../components/footer/footer.component';
import {fetchCatalog, LDCatalog} from '../utils/fetch-catalog';
import {CarouselComponent} from '../components/carousel/carousel.component';
import {SeoComponent} from '../components/seo/seo.component';

interface IndexProps {
  myHome: LDMyHome;
  about: LDSection;
  awards: LDAward[];
  objects: LDMyObjects;
  contact: LDSection;
  socials: LDSocial[];
  values: LDValues;
  form: FormInterface;
  catalog: LDCatalog;
}

export default function Index({
  myHome,
  awards,
  objects,
  about,
  contact,
  socials,
  values,
  form,
  catalog,
}: IndexProps): ReactElement {
  return (
    <>
      <SeoComponent
        canonical=""
        title={myHome.seoTitle}
        description={myHome.seoDescription}
        image={myHome.seoImage}
      />

      <DefaultLayout>
        <HeroComponent>
          <CarouselComponent
            isFooter
            slides={myHome.heroImagesCollection.items.map((image) => ({
              src: image.url,
              alt: image.description,
              width: image.width,
              height: image.height,
              base64: image.base64,
            }))}
          />
        </HeroComponent>

        <ObjectsModule myObjects={objects} />

        <ImageTextColsComponent
          title={about.title}
          image={about.image}
          body={about.body}
        />

        <ValuesModule values={values} />

        <AwardsModule awards={awards} />

        <FormModule form={form} />

        <ContactModule contact={contact} />
      </DefaultLayout>

      <FooterComponent catalog={catalog} socials={socials} />
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<IndexProps>> {
  const myHome = await fetchMyHome();
  const objects = await fetchMyObjects();
  const about = await fetchSection('about');
  const contact = await fetchSection('contact');
  const awards = await fetchAwards();
  const socials = await fetchSocials();
  const values = await fetchValues();
  const form = await fetchForm();
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
      myHome,
      catalog,
    },
    revalidate: REVALIDATE,
  };
}
