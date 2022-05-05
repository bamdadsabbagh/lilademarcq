import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {FooterComponent} from '../components/footer/footer.component';
import {CatalogInterface, fetchCatalog} from '../utils/fetch-catalog';
import {fetchSocials, LDSocial} from '../utils/fetch-socials';
import {fetchQuotes, LDMyQuotes} from '../utils/fetch-quotes';
import {ContactLayout} from '../layouts/contact/contact.layout';
import {REVALIDATE} from '../constants';
import {fetchForm, FormInterface} from '../utils/fetch-form';
import {fetchSection, LDSection} from '../utils/fetch-section';

interface Props {
  catalog: CatalogInterface;
  socials: LDSocial[];
  quotes: LDMyQuotes;
  form: FormInterface;
  contact: LDSection;
}

export default function Contact({
  catalog,
  socials,
  quotes,
  form,
  contact,
}: Props): ReactElement {
  return (
    <>
      <ContactLayout myQuotes={quotes} form={form} contact={contact} />
      <FooterComponent catalog={catalog} socials={socials} />
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const catalog = await fetchCatalog();
  const socials = await fetchSocials();
  const quotes = await fetchQuotes();
  const form = await fetchForm();
  const contact = await fetchSection('contact');

  return {
    props: {
      catalog,
      socials,
      quotes,
      form,
      contact,
    },
    revalidate: REVALIDATE,
  };
}
