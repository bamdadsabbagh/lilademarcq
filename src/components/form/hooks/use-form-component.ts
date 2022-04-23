import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useCallback,
  useState,
} from 'react';
import {useAtom} from 'jotai';
import {FormAtom, formAtom} from '../../../atoms/form.atom';

interface UseFormComponent {
  form: FormAtom;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<this['isOpen']>>;
  isHover: boolean;
  setIsHover: Dispatch<SetStateAction<this['isHover']>>;
  isSubscribe: boolean;
  isSubscribeHover: boolean;
  toggleSubscribe: () => void;
  hoverSubscribe: (enter: boolean) => void;
  handleSubmit: (e: FormEvent) => void;
}

export function useFormComponent(): UseFormComponent {
  const [isOpen, setIsOpen] = useState(true);
  const [isHover, setIsHover] = useState(false);
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [isSubscribeHover, setIsSubscribeHover] = useState(false);

  const toggleSubscribe = useCallback(() => {
    setIsSubscribe((s) => !s);
  }, []);

  const hoverSubscribe = useCallback((enter: boolean) => {
    setIsSubscribeHover(enter);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  const [form] = useAtom(formAtom);

  return {
    form,
    isOpen,
    setIsOpen,
    isHover,
    setIsHover,
    isSubscribe,
    isSubscribeHover,
    toggleSubscribe,
    hoverSubscribe,
    handleSubmit,
  };
}
