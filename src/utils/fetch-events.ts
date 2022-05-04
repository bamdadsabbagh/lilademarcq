import {fetchContentful} from './fetch-contentful';
import {getPlaceholder} from './get-placeholder';
import {IMAGE_SETTINGS} from '../constants';

const queryEvents = `
fragment EventParts on Event {
  slug
  title
  eventName
  eventLink
  eventLocation
  thumbnail {
    url(transform: { 
      format: WEBP,
      quality: ${IMAGE_SETTINGS.quality},
      width: ${IMAGE_SETTINGS.highRes},
    })
    width
    height
  }
  banner {
    url(transform: { 
      format: WEBP,
      quality: ${IMAGE_SETTINGS.quality},
      width: ${IMAGE_SETTINGS.highRes},
    })
    width
    height
  }
  picturesCollection {
    items {
      url(transform: { 
        format: WEBP,
        quality: ${IMAGE_SETTINGS.quality},
        width: ${IMAGE_SETTINGS.highRes},
      })
      width
      height
    }
  }
}

query {
  myEventsCollection (limit: 1) {
    items {
      waitingTitle
      waitingText
      waitingImage {
        url
        width
        height
      }
      title
      pastEventsTitle
      headlineEvent {
        ...EventParts
      }
      pastEventsCollection {
        items {
          ...EventParts
        }
      }
    }
  }
}
`;

export interface LDEvent {
  slug: string;
  title: string;
  eventName: string;
  eventLink: string;
  eventLocation: string;
  thumbnail: {
    url: string;
    width: number;
    height: number;
    base64: string;
  };
  banner: {
    url: string;
    width: number;
    height: number;
    base64: string;
  };
  picturesCollection: {
    items: {
      url: string;
      width: number;
      height: number;
      base64: string;
    }[];
  };
}

export interface LDMyEvents {
  waitingTitle: string;
  waitingText: string;
  waitingImage: {
    url: string;
    width: number;
    height: number;
    base64: string;
  };
  title?: string;
  headlineEvent?: LDEvent;
  pastEventsTitle?: string;
  pastEventsCollection?: {
    items: LDEvent[];
  };
}

interface EventsResponse {
  myEventsCollection: {
    items: LDMyEvents[];
  };
}

export async function fetchEvents(): Promise<LDMyEvents> {
  const response: EventsResponse = await fetchContentful(queryEvents);
  const events = response.myEventsCollection.items[0];

  events.waitingImage.base64 = await getPlaceholder(events.waitingImage.url);

  if (events.headlineEvent) {
    events.headlineEvent.banner.base64 = await getPlaceholder(events.headlineEvent.banner.url);
  }

  const pastEvents = events.pastEventsCollection.items;

  await Promise.all(pastEvents.map(async (event) => {
    event.thumbnail.base64 = await getPlaceholder(event.thumbnail.url);
  }));

  return events;
}
