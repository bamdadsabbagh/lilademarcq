import {useAtom} from 'jotai';
import {useEffect} from 'react';
import axios from 'axios';
import {setNavAtom} from '../../atoms/nav.atom';

export function useNav(): void {
  const [, setNav] = useAtom(setNavAtom);

  useEffect(() => {
    (async () => {
      const response = await axios.get('/api/nav');
      const data = await response.data;
      setNav(data);
    })();
  }, [setNav]);
}
