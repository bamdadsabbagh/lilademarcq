import {useEffect} from 'react';
import {useAtom} from 'jotai';
import {setMenuAtom} from '../../atoms/menu.atom';

export function useMenuFetch(): void {
  const [, setMenu] = useAtom(setMenuAtom);

  useEffect(() => {
    (async () => {
      const menu = await fetch(`${window.location.origin}/api/menu`);
      const json = await menu.json();
      setMenu(json);
    })();
  }, [setMenu]);
}
