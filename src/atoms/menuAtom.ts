import {atom} from 'jotai';

export interface MenuDropdownItems {
  slug: string;
  position: number;
  name: string;
  menuName: string | null;
}

interface MenuItem {
  name: string;
  slug: string;
  dropdownItems?: MenuDropdownItems[];
}

export type NavAtom = MenuItem[];

export const menuAtom = atom<MenuItem[]>([]);

export const setMenuAtom = atom(
  null,
  (_get, set, p: NavAtom) => set(menuAtom, p),
);