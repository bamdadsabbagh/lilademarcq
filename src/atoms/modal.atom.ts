import {atom} from 'jotai';

interface ModalAtom {
  isOpen: boolean;
  src: string;
}

export const modalAtom = atom({
  isOpen: false,
  src: null,
});

export const setModalAtom = atom(
  null,
  (_get, set, p: ModalAtom) => set(modalAtom, p),
);
