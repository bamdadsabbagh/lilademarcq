import React, {ReactElement, useRef} from 'react';
import Image from 'next/image';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {LDMyQuotes} from '../../utils/fetch-quotes';
import {SectionComponent} from '../../components/section/section.component';
import {
  AlignKeys,
  TitleComponent,
} from '../../components/title/title.component';
import {theme} from '../../app/styles/theme';
import {uncapitalizeFirstLetter} from '../../utils/uncapitalize-first-letter';
import {
  Author,
  Body,
  Quote,
  QuoteClose,
  QuoteOpen,
} from './quotes.layout.styles';

interface QuotesLayoutProps {
  myQuotes: LDMyQuotes;
}

export function QuotesLayout({
  myQuotes,
}: QuotesLayoutProps): ReactElement {
  const quoteSize = useRef(100);

  return (
    <>
      <SectionComponent>
        <TitleComponent align={AlignKeys.center} noPaddingBottom>
          {myQuotes.title}
        </TitleComponent>
      </SectionComponent>

      {myQuotes.quotesCollection.items.map((quote, key) => {
        const index = key;
        const color = key % 2 ? theme.white : theme.salmonLight;

        return (
          <Quote key={index} backgroundColor={color}>
            <QuoteOpen>
              <Image
                src="/icons/quote-open.svg"
                height={quoteSize.current}
                width={quoteSize.current}
              />
            </QuoteOpen>

            <Body>
              {documentToReactComponents(quote.body.json)}
            </Body>

            <Author>
              {`${quote.author}, ${uncapitalizeFirstLetter(quote.job)}`}
            </Author>

            <QuoteClose>
              <Image
                src="/icons/quote-close.svg"
                height={quoteSize.current}
                width={quoteSize.current}
              />
            </QuoteClose>
          </Quote>
        );
      })}
    </>
  );
}
