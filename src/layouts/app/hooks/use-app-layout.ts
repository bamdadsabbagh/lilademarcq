import {useAtom} from 'jotai';
import {useEffect, useMemo} from 'react';
import {setIsFirstDrawAtom} from '../../../atoms/is-first-draw.atom';
import {FIRST_DRAW_TIMEOUT} from '../../../constants';
import {menuAtom} from '../../../atoms/menu.atom';

interface UseAppLayout {
  isReady: boolean;
}

export function useAppLayout(): UseAppLayout {
  const [, setIsFirstDraw] = useAtom(setIsFirstDrawAtom);
  const [menu] = useAtom(menuAtom);

  const isReady = useMemo(() => menu.length > 0, [menu.length]);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    setTimeout(() => {
      setIsFirstDraw(false);
    }, FIRST_DRAW_TIMEOUT);
  }, [isReady, setIsFirstDraw]);

  return {
    isReady,
  };
}
