import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useCallback,
  useState,
} from 'react';
import {FormInterface} from '../../../utils/fetch-form';

interface UseFormModule {
  wasSubmitted: boolean;
  submitText: string;
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

export function useFormModule(form: FormInterface): UseFormModule {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [isSubscribeHover, setIsSubscribeHover] = useState(false);
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const [submitText, setSubmitText] = useState(form?.submit || 'Envoyer');

  const toggleSubscribe = useCallback(() => {
    setIsSubscribe((s) => !s);
  }, []);

  const hoverSubscribe = useCallback((enter: boolean) => {
    setIsSubscribeHover(enter);
  }, []);

  const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    const load = () => {
      setWasSubmitted(true);
      setSubmitText(form.submitLoading);
    };

    const fail = () => {
      setWasSubmitted(false);
      setSubmitText(form.submit);
    };

    const success = () => {
      setWasSubmitted(true);
      setSubmitText(form.submitSuccess);
      setTimeout(() => {
        setIsOpen(false);
      }, 850);
    };

    try {
      event.preventDefault();

      if (wasSubmitted) {
        return;
      }

      load();

      const formData = new FormData(event.currentTarget);
      const fieldValues = Object.fromEntries(formData.entries());

      const payload = {
        ...fieldValues,
        subscribe: isSubscribe,
      };

      const request = await fetch(
        form.target,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        },
      );

      if (request.status !== 200) {
        fail();
        return;
      }

      success();
    } catch {
      fail();
    }
  }, [wasSubmitted, isSubscribe, form]);

  return {
    wasSubmitted,
    submitText,
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
