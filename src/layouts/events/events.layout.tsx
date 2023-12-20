import Image from 'next/image';
import React from 'react';
import {theme} from '../../app/styles/theme';
import {GridComponent} from '../../components/grid/grid.component';
import {HeroComponent} from '../../components/hero/hero.component';
import {SectionComponent} from '../../components/section/section.component';
import {
  AlignKeys,
  TitleComponent,
} from '../../components/title/title.component';
import {LDMyEvents} from '../../utils/fetch-my-events';
import {ImageWrapper, WaitingBody} from './events.layout.styles';
import {useEventsLayout} from './hooks/use-events-layout';

interface EventsLayoutProps {
  events: LDMyEvents;
}

export function EventsLayout({events}: EventsLayoutProps): JSX.Element {
  const {hasHeadline, hasHeadlineLink, hasPastEvents, handleClick} =
    useEventsLayout(events);

  return (
    <>
      {!hasHeadline && (
        <>
          <SectionComponent>
            <TitleComponent
              align={AlignKeys.center}
              isMain
            >
              {events.waitingTitle.toUpperCase()}
            </TitleComponent>
            <WaitingBody>
              <span>{events.waitingText}</span>
              <Image
                src={events.waitingImage.url}
                alt={events.waitingTitle}
                blurDataURL={events.waitingImage.base64}
                objectFit="cover"
                width={events.waitingImage.width}
                height={events.waitingImage.height}
                placeholder="blur"
              />
            </WaitingBody>
          </SectionComponent>
        </>
      )}

      {hasHeadline && (
        <>
          <SectionComponent>
            <TitleComponent
              align={AlignKeys.center}
              noPaddingBottom
              isMain
            >
              {events.headlineTitle}
            </TitleComponent>
          </SectionComponent>

          <HeroComponent>
            <ImageWrapper
              hasLink={hasHeadlineLink}
              onClick={() => {
                if (hasHeadlineLink) {
                  window.open(events.headlineEvent.eventLink);
                }
              }}
            >
              <Image
                src={events.headlineEvent.banner.url}
                alt={events.headlineEvent.title}
                blurDataURL={events.headlineEvent.banner.base64}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
              />
            </ImageWrapper>
          </HeroComponent>
        </>
      )}

      {hasPastEvents && (
        <SectionComponent backgroundColor={theme.salmonLight}>
          <TitleComponent align={AlignKeys.right}>
            {events.pastEventsTitle}
          </TitleComponent>

          <GridComponent
            isFull
            tiles={events.pastEventsCollection.items.map((event) => ({
              image: {
                src: event.thumbnail.url,
                blur: event.thumbnail.base64,
              },
              onClick: () => handleClick(event),
              h3: event.eventName,
              span: event.title,
              h4: event.eventLocation,
            }))}
          />
        </SectionComponent>
      )}
    </>
  );
}
