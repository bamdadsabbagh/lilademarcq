import {GetStaticPropsResult} from 'next';
import React from 'react';
import {FooterComponent} from '../components/footer/footer.component';
import {SeoComponent} from '../components/seo/seo.component';
import {REVALIDATE} from '../constants';
import {AboutLayout} from '../layouts/about/about.layout';
import {fetchCatalog, LDCatalog} from '../utils/fetch-catalog';
import {fetchSection, LDSection} from '../utils/fetch-section';
import {fetchSocials, LDSocial} from '../utils/fetch-socials';

interface AProposProps {
  aboutSection: LDSection;
  catalog: LDCatalog;
  socials: LDSocial[];
}

export default function APropos({
  aboutSection,
  catalog,
  socials,
}: AProposProps): JSX.Element {
  return (
    <>
      <SeoComponent
        canonical="a-propos"
        title={aboutSection.seoTitle}
        description={aboutSection.seoDescription}
        image={aboutSection.seoImage}
      />

      <AboutLayout aboutSection={aboutSection} />

      <FooterComponent
        catalog={catalog}
        socials={socials}
      />
    </>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<AProposProps>
  > {
  const aboutSection = await fetchSection('about');
  const catalog = await fetchCatalog();
  const socials = await fetchSocials();

  return {
    props: {
      aboutSection,
      catalog,
      socials,
    },
    revalidate: REVALIDATE,
  };
}
