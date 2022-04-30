import {useEffect} from 'react';
import {useAtom} from 'jotai';
import {setMenuAtom} from '../../atoms/menu.atom';
import {getApiEndpoint} from '../../utils/get-api-endpoint';

export function useMenuFetch(): void {
  const [, setMenu] = useAtom(setMenuAtom);

  useEffect(() => {
    (async () => {
      const menu = await fetch(getApiEndpoint('menu'));
      const json = await menu.json();
      setMenu(json);
    })();
  }, [setMenu]);
}
