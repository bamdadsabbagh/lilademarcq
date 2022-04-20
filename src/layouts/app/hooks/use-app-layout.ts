import {useAtom} from 'jotai';
import {appLoadedAtom} from '../../../atoms/app-loaded';
import {useTimeout} from '../../../hooks/use-timeout';

export function useAppLayout(): void {
  const [, setAppLoaded] = useAtom(appLoadedAtom);

  useTimeout(() => {
    setAppLoaded(true);
  }, 2100);
}
