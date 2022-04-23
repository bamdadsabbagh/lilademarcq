import {atom} from 'jotai';

export const appLoadedAtom = atom(false);

export const setAppLoadedAtom = atom(
  null,
  (_get, set, p) => set(appLoadedAtom, p),
);
