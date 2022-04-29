import {useEffect} from 'react';
import {useAtom} from 'jotai';
import {setCatalogAtom} from '../../atoms/catalog.atom';

export function useCatalogFetch(): void {
  const [, setCatalog] = useAtom(setCatalogAtom);

  useEffect(() => {
    (async () => {
      const catalog = await fetch(`${window.location.origin}/api/catalog`);
      const json = await catalog.json();
      setCatalog(json);
    })();
  }, [setCatalog]);
}
