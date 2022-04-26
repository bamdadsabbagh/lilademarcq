import {atom} from 'jotai';

export const isFirstDrawAtom = atom(true);

export const setIsFirstDrawAtom = atom(
  null,
  (_get, set, p) => set(isFirstDrawAtom, p),
);
