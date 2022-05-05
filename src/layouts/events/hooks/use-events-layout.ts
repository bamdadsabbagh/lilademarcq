import {useCallback, useMemo, useState} from 'react';
import {LDEvent, LDMyEvents} from '../../../utils/fetch-events';
import {useLightbox} from '../../../hooks/use-lightbox';

interface UseEventsLayout {
  hasHeadline: boolean;
  hasHeadlineLink: boolean;
  hasPastEvents: boolean;
  handleClick: (event: LDEvent) => void;
}

export function useEventsLayout(events: LDMyEvents): UseEventsLayout {
  const hasHeadline = useMemo(() => typeof events?.headlineEvent?.banner?.url !== 'undefined'
    && typeof events?.headlineTitle !== 'undefined', [events]);
  const hasHeadlineLink = useMemo(() => typeof events?.headlineEvent?.eventLink !== 'undefined', [events?.headlineEvent?.eventLink]);
  const hasPastEvents = useMemo(() => events.pastEventsCollection.items.length > 0, [events.pastEventsCollection.items]);

  const [lightboxData, setLightboxData] = useState([]);

  useLightbox(lightboxData);

  const handleClick = useCallback((event: LDEvent) => {
    setLightboxData(event.picturesCollection.items.map((e) => ({
      src: e.url,
      width: e.width,
      height: e.height,
    })));
  }, []);

  return {
    hasHeadline,
    hasHeadlineLink,
    hasPastEvents,
    handleClick,
  };
}
