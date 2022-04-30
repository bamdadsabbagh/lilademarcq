import {atom} from 'jotai';
import {MenuInterface} from '../utils/fetch-menu';
import {MENU} from '../constants';

export const menuAtom = atom<MenuInterface>(MENU);

export const setMenuAtom = atom(
  null,
  (_get, set, p: MenuInterface) => set(menuAtom, p),
);
