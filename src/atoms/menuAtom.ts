import {atom} from 'jotai';

interface MenuChild {
  slug: string;
  position: number;
  name: string;
  menuName: string | null;
}

interface MenuItem {
  name: string;
  slug: string;
  children?: MenuChild[];
}

export type NavAtom = MenuItem[];

export const menuAtom = atom<MenuItem[]>([]);

export const setMenuAtom = atom(
  null,
  (_get, set, p: NavAtom) => set(menuAtom, p),
);
