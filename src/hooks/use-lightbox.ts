import {useEffect} from 'react';
// eslint-disable-next-line import/no-unresolved
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/dist/photoswipe.css';

interface LightboxData {
  src: string;
  width: number;
  height: number;
}

export function useLightbox(data: LightboxData[]): void {
  useEffect(() => {
    const l = new PhotoSwipeLightbox({
      dataSource: data,
      showHideAnimationType: 'none',
      pswpModule: () => import('photoswipe'),
    });

    if (data.length === 0) {
      return;
    }

    l.init();
    l.loadAndOpen(0);

    return () => {
      l.destroy();
    };
  }, [data]);
}
