import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useCallback,
  useState,
} from 'react';

interface UseFormComponent {
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
  const [isOpen, setIsOpen] = useState(false);
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

  return {
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
