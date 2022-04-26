import {useMemo} from 'react';
import {useAtom} from 'jotai';
import {menuAtom} from '../../../atoms/menuAtom';

export function useReady(): boolean {
  const [nav] = useAtom(menuAtom);
  return useMemo(() => nav.length > 0, [nav.length]);
}
