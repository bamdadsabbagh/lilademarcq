import {atom} from 'jotai';
import {StaticImageData} from 'next/image';

interface ModalAtom {
  isOpen: boolean;
  src: StaticImageData;
}

export const modalAtom = atom({
  isOpen: false,
  src: null,
});

export const setModalAtom = atom(
  null,
  (_get, set, p: ModalAtom) => set(modalAtom, p),
);
