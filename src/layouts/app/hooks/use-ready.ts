import {useMemo} from 'react';
import {useAtom} from 'jotai';
import {navAtom} from '../../../atoms/nav.atom';

export function useReady(): boolean {
  const [nav] = useAtom(navAtom);
  return useMemo(() => nav.length > 0, [nav.length]);
}
