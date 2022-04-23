import {useAppLoad} from './use-app-load';
import {useReady} from './use-ready';

interface UseAppLayout {
  isReady: boolean;
}

export function useAppLayout(): UseAppLayout {
  useAppLoad();
  const isReady = useReady();

  return {
    isReady,
  };
}
