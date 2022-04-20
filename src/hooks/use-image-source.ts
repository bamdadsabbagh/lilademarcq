import {useEffect, useState} from 'react';
import {StaticImageData} from 'next/image';

type UseImageSource = [StaticImageData[], boolean]

export function useImageSource(images: string[]): UseImageSource {
  const [sources, setSources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const array = [];

    images.forEach((image) => {
      (async () => {
        const i = (await import('../../public' + image)).default;

        array.push(i);

        if (array.length !== images.length) {
          return;
        }

        setSources(array);
        setLoading(false);
      })();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [sources, loading];
}
