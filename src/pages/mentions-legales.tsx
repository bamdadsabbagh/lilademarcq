import {GetStaticPropsResult} from 'next';
import React from 'react';
import {FooterComponent} from '../components/footer/footer.component';
import {SeoComponent} from '../components/seo/seo.component';
import {REVALIDATE} from '../constants';
import {SectionLayout} from '../layouts/section/section.layout';
import {fetchCatalog, LDCatalog} from '../utils/fetch-catalog';
import {fetchSection, LDSection} from '../utils/fetch-section';
import {fetchSocials, LDSocial} from '../utils/fetch-socials';

interface MentionsLegalesProps {
  mentionsLegalesSection: LDSection;
  catalog: LDCatalog;
  socials: LDSocial[];
}

export default function MentionsLegales({
  mentionsLegalesSection,
  catalog,
  socials,
}: MentionsLegalesProps): JSX.Element {
  return (
    <>
      <SeoComponent
        canonical="mentions-legales"
        title={mentionsLegalesSection.seoTitle}
        description={mentionsLegalesSection.seoDescription}
        image={mentionsLegalesSection.seoImage}
      />

      <SectionLayout section={mentionsLegalesSection} />

      <FooterComponent
        catalog={catalog}
        socials={socials}
      />
    </>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<MentionsLegalesProps>
  > {
  const mentionsLegalesSection = await fetchSection('mentions-legales');
  const catalog = await fetchCatalog();
  const socials = await fetchSocials();

  return {
    props: {
      mentionsLegalesSection,
      catalog,
      socials,
    },
    revalidate: REVALIDATE,
  };
}
