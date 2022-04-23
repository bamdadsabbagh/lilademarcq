import {useAtom} from 'jotai';
import {useEffect} from 'react';
import {setNavAtom} from '../../atoms/nav.atom';

export function useNav(): void {
  const [, setNav] = useAtom(setNavAtom);

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/nav');
      const data = await response.json();
      setNav(data);
    })();
  }, [setNav]);
}
