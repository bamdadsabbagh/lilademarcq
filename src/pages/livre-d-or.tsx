import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {FooterComponent} from '../components/footer/footer.component';
import {CatalogInterface, fetchCatalog} from '../utils/fetch-catalog';
import {fetchSocials, LDSocial} from '../utils/fetch-socials';
import {fetchQuotes, LDMyQuotes} from '../utils/fetch-quotes';
import {QuotesLayout} from '../layouts/quotes/quotes.layout';
import {REVALIDATE} from '../constants';

interface Props {
  catalog: CatalogInterface;
  socials: LDSocial[];
  quotes: LDMyQuotes;
}

export default function LivreDOr({
  catalog,
  socials,
  quotes,
}: Props): ReactElement {
  return (
    <>
      <QuotesLayout myQuotes={quotes} />
      <FooterComponent catalog={catalog} socials={socials} />
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const catalog = await fetchCatalog();
  const socials = await fetchSocials();
  const quotes = await fetchQuotes();

  return {
    props: {
      catalog,
      socials,
      quotes,
    },
    revalidate: REVALIDATE,
  };
}
