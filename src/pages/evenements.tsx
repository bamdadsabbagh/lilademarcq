import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {CatalogInterface, fetchCatalog} from '../utils/fetch-catalog';
import {FooterComponent} from '../components/footer/footer.component';
import {fetchSocials, LDSocial} from '../utils/fetch-socials';
import {fetchEvents, LDMyEvents} from '../utils/fetch-events';
import {EventsLayout} from '../layouts/events/events.layout';

interface Props {
  catalog: CatalogInterface;
  socials: LDSocial[];
  events: LDMyEvents;
}

export default function Evenements({
  catalog,
  socials,
  events,
}: Props): ReactElement {
  return (
    <>
      <EventsLayout events={events} />
      <FooterComponent catalog={catalog} socials={socials} />
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const catalog = await fetchCatalog();
  const socials = await fetchSocials();
  const events = await fetchEvents();

  return {
    props: {
      catalog,
      socials,
      events,
    },
  };
}
