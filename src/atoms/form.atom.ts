import {atom} from 'jotai';
import {FormInterface} from '../utils/fetch-form';

export const formAtom = atom<FormInterface>(null as FormInterface);

export const setFormAtom = atom(
  null,
  (_get, set, p: FormInterface) => set(formAtom, p),
);
