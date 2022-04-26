import {atom} from 'jotai';
import {FormInterface} from '../utils/fetch-form';

export const formAtom = atom<FormInterface>(undefined as FormInterface | undefined);

export const setFormAtom = atom(
  null,
  (_get, set, p: FormInterface) => set(formAtom, p),
);
