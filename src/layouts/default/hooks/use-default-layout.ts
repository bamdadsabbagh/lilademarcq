import {useAtom} from 'jotai';
import {setIsFirstDrawAtom} from '../../../atoms/is-first-draw.atom';
import {FIRST_DRAW_TIMEOUT} from '../../../constants';
import {useTimeout} from '../../../hooks/use-timeout';

export function useDefaultLayout(): void {
  const [, setIsFirstDraw] = useAtom(setIsFirstDrawAtom);

  useTimeout(() => {
    setIsFirstDraw(false);
  }, FIRST_DRAW_TIMEOUT);
}
