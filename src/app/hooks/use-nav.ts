import {useAtom} from 'jotai';
import {useEffect} from 'react';
import {setMenuAtom} from '../../atoms/menuAtom';

export function useNav(): void {
  const [, setNav] = useAtom(setMenuAtom);

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/nav');
      const data = await response.json();
      setNav(data);
    })();
  }, [setNav]);
}
