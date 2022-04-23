import {atom} from 'jotai';

interface NavMenu {
  slug: string;
  position: number;
  name: string;
  menuName: string | null;
}

interface NavItem {
  name: string;
  slug: string;
  items?: NavMenu[];
}

export type NavAtom = NavItem[];

export const navAtom = atom([]);

export const setNavAtom = atom(
  null,
  (_get, set, p: NavAtom) => set(navAtom, p),
);
