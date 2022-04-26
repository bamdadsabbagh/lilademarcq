import {atom} from 'jotai';

export interface MenuDropdownItems {
  slug: string;
  position: number;
  name: string;
  menuName: string | null;
}

export interface MenuItem {
  name: string;
  slug: string;
  dropdown?: MenuDropdownItems[];
}

export const menuAtom = atom<MenuItem[]>([]);

export const setMenuAtom = atom(
  null,
  (_get, set, p: MenuItem[]) => set(menuAtom, p),
);
