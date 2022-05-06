import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {fetchCatalog, LDCatalog} from '../utils/fetch-catalog';
import {FooterComponent} from '../components/footer/footer.component';
import {fetchSocials, LDSocial} from '../utils/fetch-socials';
import {fetchMyEvents, LDMyEvents} from '../utils/fetch-my-events';
import {EventsLayout} from '../layouts/events/events.layout';
import {REVALIDATE} from '../constants';
import {SeoComponent} from '../components/seo/seo.component';

interface Props {
  catalog: LDCatalog;
  socials: LDSocial[];
  myEvents: LDMyEvents;
}

export default function Evenements({
  catalog,
  socials,
  myEvents,
}: Props): ReactElement {
  return (
    <>
      <SeoComponent
        canonical="evenements"
        title={myEvents.seoTitle}
        description={myEvents.seoDescription}
        image={myEvents.seoImage?.url}
      />

      <EventsLayout events={myEvents} />

      <FooterComponent catalog={catalog} socials={socials} />
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const catalog = await fetchCatalog();
  const socials = await fetchSocials();
  const myEvents = await fetchMyEvents();

  return {
    props: {
      catalog,
      socials,
      myEvents,
    },
    revalidate: REVALIDATE,
  };
}
