import {atom} from 'jotai';
import {CatalogInterface} from '../utils/fetch-catalog';

export const catalogAtom = atom<CatalogInterface>(null as CatalogInterface);

export const setCatalogAtom = atom(
  null,
  (_get, set, p: CatalogInterface) => set(catalogAtom, p),
);
