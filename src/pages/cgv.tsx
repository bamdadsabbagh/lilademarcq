import {GetStaticPropsResult} from 'next';
import React from 'react';
import {FooterComponent} from '../components/footer/footer.component';
import {SeoComponent} from '../components/seo/seo.component';
import {REVALIDATE} from '../constants';
import {SectionLayout} from '../layouts/section/section.layout';
import {fetchCatalog, LDCatalog} from '../utils/fetch-catalog';
import {fetchSection, LDSection} from '../utils/fetch-section';
import {fetchSocials, LDSocial} from '../utils/fetch-socials';

interface CgvProps {
  cgvSection: LDSection;
  catalog: LDCatalog;
  socials: LDSocial[];
}

export default function Cgv({
  cgvSection,
  catalog,
  socials,
}: CgvProps): JSX.Element {
  return (
    <>
      <SeoComponent
        canonical="cgv"
        title={cgvSection.seoTitle}
        description={cgvSection.seoDescription}
        image={cgvSection.seoImage}
      />

      <SectionLayout section={cgvSection} />

      <FooterComponent
        catalog={catalog}
        socials={socials}
      />
    </>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<CgvProps>
  > {
  const cgvSection = await fetchSection('cgv');
  const catalog = await fetchCatalog();
  const socials = await fetchSocials();

  return {
    props: {
      cgvSection,
      catalog,
      socials,
    },
    revalidate: REVALIDATE,
  };
}
