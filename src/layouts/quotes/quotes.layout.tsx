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
  Banner,
  BannerImage,
  BannerText,
  Body,
  Quote,
  QuoteClose,
  QuoteOpen,
  Quotes,
} from './quotes.layout.styles';
import {LinkComponent} from '../../components/link/link.component';

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

      <SectionComponent
        backgroundColor={theme.salmonLight}
        fullWidthMobile
      >
        <Quotes>
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
        </Quotes>
      </SectionComponent>

      <SectionComponent backgroundColor={theme.green}>
        <TitleComponent
          color={theme.white}
          align={AlignKeys.center}
          noPaddingBottom
        >
          <Banner>
            <BannerImage>
              <Image
                src={myQuotes.bannerImage.url}
                width={myQuotes.bannerImage.width}
                height={myQuotes.bannerImage.height}
                blurDataURL={myQuotes.bannerImage.base64}
                placeholder="blur"
              />
            </BannerImage>
            <LinkComponent href={myQuotes.bannerLink}>
              <BannerText>
                {myQuotes.bannerText}
              </BannerText>
            </LinkComponent>
          </Banner>
        </TitleComponent>
      </SectionComponent>
    </>
  );
}
