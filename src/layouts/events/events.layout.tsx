/* eslint-disable import/no-unresolved */

import React, {
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
// @ts-expect-error: TS2307
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/dist/photoswipe.css';
import styled from 'styled-components';
import Image from 'next/image';
import {LDEvent, LDMyEvents} from '../../utils/fetch-events';
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

interface ImageProps {
  hasLink: boolean;
}

const ImageWrapper = styled.div<ImageProps>`
  width: 100%;
  height: 100%;

  display: flex;

  img:hover {
    transform: scale(1.05);
    cursor: ${({hasLink}) => (hasLink ? 'pointer' : 'default')};
  }
`;

const WaitingBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
`;

interface EventsLayoutProps {
  events: LDMyEvents;
}

export function EventsLayout({
  events,
}: EventsLayoutProps): ReactElement {
  const hasHeadline = useMemo(() => typeof events?.headlineEvent?.banner?.url !== 'undefined'
    && typeof events?.headlineEvent?.title !== 'undefined', [events?.headlineEvent]);
  const hasHeadlineLink = useMemo(() => typeof events?.headlineEvent?.eventLink !== 'undefined', [events?.headlineEvent?.eventLink]);
  const hasPastEvents = useMemo(() => events.pastEventsCollection.items.length > 0, [events.pastEventsCollection.items]);

  const [lightboxData, setLightboxData] = useState([]);

  useEffect(() => {
    const l = new PhotoSwipeLightbox({
      dataSource: lightboxData,
      showHideAnimationType: 'none',
      pswpModule: () => import('photoswipe'),
    });

    if (lightboxData.length === 0) {
      return;
    }

    l.init();
    l.loadAndOpen();

    return () => {
      l.destroy();
    };
  }, [lightboxData]);

  const handleClick = useCallback((event: LDEvent) => {
    setLightboxData(event.picturesCollection.items.map((e) => ({
      src: e.url,
      width: e.width,
      height: e.height,
    })));
  }, []);

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
              {events.title.toUpperCase()}
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
                objectFit="cover"
                width={events.headlineEvent.banner.width}
                height={events.headlineEvent.banner.width * 0.5625}
              />
            </ImageWrapper>
          </HeroComponent>

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
