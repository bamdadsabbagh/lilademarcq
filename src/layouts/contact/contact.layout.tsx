import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import React, {useRef} from 'react';
import {theme} from '../../app/styles/theme';
import {SectionComponent} from '../../components/section/section.component';
import {
  AlignKeys,
  TitleComponent,
} from '../../components/title/title.component';
import {ContactModule} from '../../modules/contact/contact.module';
import {FormModule} from '../../modules/form/form.module';
import {FormInterface} from '../../utils/fetch-form';
import {LDMyContact} from '../../utils/fetch-my-contact';
import {LDSection} from '../../utils/fetch-section';
import {uncapitalizeFirstLetter} from '../../utils/uncapitalize-first-letter';
import {
  Author,
  Body,
  Quote,
  QuoteClose,
  QuoteOpen,
  Quotes,
} from './contact.layout.styles';

interface ContactLayoutProps {
  myContact: LDMyContact;
  form: FormInterface;
  contactSection: LDSection;
}

export function ContactLayout({
  myContact,
  form,
  contactSection,
}: ContactLayoutProps): JSX.Element {
  const quoteSize = useRef(100);

  return (
    <>
      <SectionComponent
        backgroundColor={theme.salmonLight}
        fullWidthMobile
      >
        <TitleComponent
          align={AlignKeys.center}
          noPaddingBottom
          isMain
        >
          {myContact.title}
        </TitleComponent>

        <Quotes>
          {myContact.quotesCollection.items.map((quote, key) => {
            const index = key;
            const color = key % 2 ? theme.white : theme.salmonLight;

            return (
              <Quote
                key={index}
                backgroundColor={color}
              >
                <QuoteOpen>
                  <Image
                    src="/icons/quote-open.svg"
                    alt=""
                    height={quoteSize.current}
                    width={quoteSize.current}
                  />
                </QuoteOpen>

                <Body>{documentToReactComponents(quote.body.json)}</Body>

                <Author>
                  {`${quote.author}, ${uncapitalizeFirstLetter(quote.job)}`}
                </Author>

                <QuoteClose>
                  <Image
                    src="/icons/quote-close.svg"
                    alt=""
                    height={quoteSize.current}
                    width={quoteSize.current}
                  />
                </QuoteClose>
              </Quote>
            );
          })}
        </Quotes>
      </SectionComponent>

      <FormModule
        form={form}
        text={myContact.formTitle}
      />

      <ContactModule contact={contactSection} />
    </>
  );
}
