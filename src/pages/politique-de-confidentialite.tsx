import {GetStaticPropsResult} from 'next';
import React from 'react';
import {FooterComponent} from '../components/footer/footer.component';
import {SeoComponent} from '../components/seo/seo.component';
import {REVALIDATE} from '../constants';
import {SectionLayout} from '../layouts/section/section.layout';
import {fetchCatalog, LDCatalog} from '../utils/fetch-catalog';
import {fetchSection, LDSection} from '../utils/fetch-section';
import {fetchSocials, LDSocial} from '../utils/fetch-socials';

interface PolitiqueDeConfidentialiteProps {
  privacyPolicySection: LDSection;
  catalog: LDCatalog;
  socials: LDSocial[];
}

export default function PolitiqueDeConfidentialite({
  privacyPolicySection,
  catalog,
  socials,
}: PolitiqueDeConfidentialiteProps): JSX.Element {
  return (
    <>
      <SeoComponent
        canonical="politique-de-confidentialite"
        title={privacyPolicySection.seoTitle}
        description={privacyPolicySection.seoDescription}
        image={privacyPolicySection.seoImage}
      />

      <SectionLayout section={privacyPolicySection} />

      <FooterComponent
        catalog={catalog}
        socials={socials}
      />
    </>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<PolitiqueDeConfidentialiteProps>
  > {
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
