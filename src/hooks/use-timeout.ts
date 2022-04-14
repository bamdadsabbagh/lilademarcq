import {useEffect, useRef} from 'react';
import {useIsomorphicLayoutEffect} from './use-isomorphic-layout-effect';

export function useTimeout(callback: () => void, delay: number | null): void {
  const savedCallback = useRef(callback);

  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }

    const id = setTimeout(() => savedCallback.current(), delay);

    return () => clearTimeout(id);
  }, [delay]);
}
