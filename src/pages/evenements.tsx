import {GetStaticPropsResult} from 'next';
import React from 'react';
import {FooterComponent} from '../components/footer/footer.component';
import {SeoComponent} from '../components/seo/seo.component';
import {REVALIDATE} from '../constants';
import {EventsLayout} from '../layouts/events/events.layout';
import {fetchCatalog, LDCatalog} from '../utils/fetch-catalog';
import {fetchMyEvents, LDMyEvents} from '../utils/fetch-my-events';
import {fetchSocials, LDSocial} from '../utils/fetch-socials';

interface Props {
  catalog: LDCatalog;
  socials: LDSocial[];
  myEvents: LDMyEvents;
}

export default function Evenements({
  catalog,
  socials,
  myEvents,
}: Props): JSX.Element {
  return (
    <>
      <SeoComponent
        canonical="evenements"
        title={myEvents.seoTitle}
        description={myEvents.seoDescription}
        image={myEvents.seoImage}
      />

      <EventsLayout events={myEvents} />

      <FooterComponent
        catalog={catalog}
        socials={socials}
      />
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
