import {useEffect} from 'react';
import {useAtom} from 'jotai';
import {setCatalogAtom} from '../../atoms/catalog.atom';
import {getApiEndpoint} from '../../utils/get-api-endpoint';

export function useCatalogFetch(): void {
  const [, setCatalog] = useAtom(setCatalogAtom);

  useEffect(() => {
    (async () => {
      const catalog = await fetch(getApiEndpoint('catalog'));
      const json = await catalog.json();
      setCatalog(json);
    })();
  }, [setCatalog]);
}
