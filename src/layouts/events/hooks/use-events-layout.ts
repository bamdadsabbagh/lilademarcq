import {useCallback, useMemo, useState} from 'react';
import {LDEvent, LDMyEvents} from '../../../utils/fetch-my-events';
import {useLightbox} from '../../../hooks/use-lightbox';
import {buildNextImageUrl} from '../../../utils/build-next-image-url';

interface UseEventsLayout {
  hasHeadline: boolean;
  hasHeadlineLink: boolean;
  hasPastEvents: boolean;
  handleClick: (event: LDEvent) => void;
}

export function useEventsLayout(events: LDMyEvents): UseEventsLayout {
  const hasHeadline = useMemo(() => typeof events?.headlineEvent?.banner?.url !== 'undefined', [events]);
  const hasHeadlineLink = useMemo(() => events?.headlineEvent?.eventLink !== null, [events?.headlineEvent?.eventLink]);
  const hasPastEvents = useMemo(() => events?.pastEventsCollection?.items?.length > 0, [events?.pastEventsCollection?.items]);

  const [lightboxData, setLightboxData] = useState([]);

  useLightbox(lightboxData);

  const handleClick = useCallback((event: LDEvent) => {
    const pictures = event.picturesCollection.items;
    setLightboxData(pictures.map((e) => ({
      src: buildNextImageUrl(e.url),
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
