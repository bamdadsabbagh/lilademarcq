import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {fetchSection, LDSection} from '../utils/fetch-section';
import {REVALIDATE} from '../constants';
import {SectionLayout} from '../layouts/section/section.layout';
import {fetchCatalog, LDCatalog} from '../utils/fetch-catalog';
import {fetchSocials, LDSocial} from '../utils/fetch-socials';
import {FooterComponent} from '../components/footer/footer.component';
import {SeoComponent} from '../components/seo/seo.component';

interface PolitiqueDeConfidentialiteProps {
  privacyPolicySection: LDSection;
  catalog: LDCatalog;
  socials: LDSocial[];
}

export default function PolitiqueDeConfidentialite({
  privacyPolicySection,
  catalog,
  socials,
}: PolitiqueDeConfidentialiteProps): ReactElement {
  return (
    <>
      <SeoComponent
        canonical="politique-de-confidentialite"
        title={privacyPolicySection.seoTitle}
        description={privacyPolicySection.seoDescription}
        image={privacyPolicySection.seoImage}
      />

      <SectionLayout section={privacyPolicySection} />

      <FooterComponent catalog={catalog} socials={socials} />
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<PolitiqueDeConfidentialiteProps>> {
  const privacyPolicySection = await fetchSection('privacy-policy');
  const catalog = await fetchCatalog();
  const socials = await fetchSocials();

  return {
    props: {
      privacyPolicySection,
      catalog,
      socials,
    },
    revalidate: REVALIDATE,
  };
}
