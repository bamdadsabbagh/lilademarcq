import React, {ReactElement} from 'react';
import Image from 'next/image';
import {LDMyEvents} from '../../utils/fetch-events';
import {HeroComponent} from '../../components/hero/hero.component';
import {SectionComponent} from '../../components/section/section.component';
import {
  AlignKeys,
  TitleComponent,
} from '../../components/title/title.component';
import {theme} from '../../app/styles/theme';
import {GridComponent} from '../../components/grid/grid.component';
import {
  ImageContainer,
  Tile,
} from '../../modules/objects/objects.module.styles';
import {
  GridTileHoverBoxFull,
} from '../../components/grid/grid.component.styles';
import {ImageWrapper, LinkContainer, WaitingBody} from './events.layout.styles';
import {useEventsLayout} from './hooks/use-events-layout';

interface EventsLayoutProps {
  events: LDMyEvents;
}

export function EventsLayout({
  events,
}: EventsLayoutProps): ReactElement {
  const {
    hasHeadline,
    hasHeadlineLink,
    hasPastEvents,
    handleClick,
  } = useEventsLayout(events);

  return (
    <>
      {!hasHeadline && (
        <>
          <SectionComponent>
            <TitleComponent align={AlignKeys.center}>
              {events.waitingTitle.toUpperCase()}
            </TitleComponent>
            <WaitingBody>
              <span>
                {events.waitingText}
              </span>
              <Image
                src={events.waitingImage.url}
                blurDataURL={events.waitingImage.base64}
                objectFit="cover"
                width={events.waitingImage.width}
                height={events.waitingImage.height}
              />
            </WaitingBody>
          </SectionComponent>
        </>
      )}

      {hasHeadline && (
        <>
          <SectionComponent>
            <TitleComponent align={AlignKeys.center} noPaddingBottom>
              {events.headlineTitle.toUpperCase()}
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
                blurDataURL={events.headlineEvent.banner.base64}
                width={events.headlineEvent.banner.width}
                height={events.headlineEvent.banner.width * 0.5625}
                objectFit="cover"
                placeholder="blur"
              />
            </ImageWrapper>
          </HeroComponent>

          <SectionComponent>
            <TitleComponent
              noPaddingBottom
              align={AlignKeys.center}
              color={theme.black}
            >
              <LinkContainer>
                <button
                  type="button"
                  onClick={() => handleClick(events.headlineEvent)}
                >
                  {events.headlineButtonText}
                </button>
              </LinkContainer>
            </TitleComponent>
          </SectionComponent>

          {hasPastEvents && (
            <SectionComponent backgroundColor={theme.salmonLight}>
              <TitleComponent align={AlignKeys.right}>
                {events.pastEventsTitle}
              </TitleComponent>

              <GridComponent>
                {events.pastEventsCollection.items.map((event) => (
                  <button
                    type="button"
                    key={event.slug}
                    onClick={() => handleClick(event)}
                  >
                    <Tile>
                      <ImageContainer>
                        <Image
                          src={event.thumbnail.url}
                          alt={event.title}
                          blurDataURL={event.thumbnail.base64}
                          placeholder="blur"
                          layout="responsive"
                          width="100%"
                          height="100%"
                        />
                      </ImageContainer>
                      <GridTileHoverBoxFull>
                        <h3>{event.eventName}</h3>
                        <span>{event.title}</span>
                        <h4>{event.eventLocation}</h4>
                      </GridTileHoverBoxFull>
                    </Tile>
                  </button>
                ))}
              </GridComponent>
            </SectionComponent>
          )}
        </>
      )}
    </>
  );
}
