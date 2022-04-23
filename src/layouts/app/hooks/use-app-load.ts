import {useAtom} from 'jotai';
import {appLoadedAtom} from '../../../atoms/app-loaded.atom';
import {useTimeout} from '../../../hooks/use-timeout';

export function useAppLoad(): void {
  const [, setAppLoaded] = useAtom(appLoadedAtom);

  useTimeout(() => {
    setAppLoaded(true);
  }, 2100);
}
