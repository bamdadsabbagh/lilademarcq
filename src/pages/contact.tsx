import {GetStaticPropsResult} from 'next';
import React from 'react';
import {FooterComponent} from '../components/footer/footer.component';
import {SeoComponent} from '../components/seo/seo.component';
import {REVALIDATE} from '../constants';
import {ContactLayout} from '../layouts/contact/contact.layout';
import {fetchCatalog, LDCatalog} from '../utils/fetch-catalog';
import {fetchForm, FormInterface} from '../utils/fetch-form';
import {fetchMyContact, LDMyContact} from '../utils/fetch-my-contact';
import {fetchSection, LDSection} from '../utils/fetch-section';
import {fetchSocials, LDSocial} from '../utils/fetch-socials';

interface Props {
  catalog: LDCatalog;
  socials: LDSocial[];
  myContact: LDMyContact;
  form: FormInterface;
  contact: LDSection;
}

export default function Contact({
  catalog,
  socials,
  myContact,
  form,
  contact,
}: Props): JSX.Element {
  return (
    <>
      <SeoComponent
        canonical="contact"
        title={myContact.seoTitle}
        description={myContact.seoDescription}
        image={myContact.seoImage}
      />

      <ContactLayout
        myContact={myContact}
        form={form}
        contactSection={contact}
      />

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
  const myContact = await fetchMyContact();
  const form = await fetchForm();
  const contact = await fetchSection('contact');

  return {
    props: {
      catalog,
      socials,
      myContact,
      form,
      contact,
    },
    revalidate: REVALIDATE,
  };
}
