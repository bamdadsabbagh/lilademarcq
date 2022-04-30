import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useCallback,
  useState,
} from 'react';
import {useAtom} from 'jotai';
import {formAtom} from '../../../atoms/form.atom';
import {FormInterface} from '../../../utils/fetch-form';
import {getApiEndpoint} from '../../../utils/get-api-endpoint';

interface UseFormModule {
  form: FormInterface;
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

export function useFormModule(): UseFormModule {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [isSubscribeHover, setIsSubscribeHover] = useState(false);
  const [form] = useAtom(formAtom);
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const [submitText, setSubmitText] = useState(form?.submit || 'Envoyer');

  const toggleSubscribe = useCallback(() => {
    setIsSubscribe((s) => !s);
  }, []);

  const hoverSubscribe = useCallback((enter: boolean) => {
    setIsSubscribeHover(enter);
  }, []);

  const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (wasSubmitted) {
      return;
    }

    setWasSubmitted(true);
    setSubmitText(form.submitLoading);

    const formData = new FormData(event.currentTarget);
    const fieldValues = Object.fromEntries(formData.entries());

    const payload = {
      ...fieldValues,
      subscribe: isSubscribe,
    };

    const request = await fetch(
      getApiEndpoint('form-post'),
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      },
    );

    const response = await request.json();

    if (response.ok !== true) {
      setWasSubmitted(false);
      setSubmitText(form.submit);
      return;
    }

    setWasSubmitted(true);
    setSubmitText(form.submitSuccess);
    setTimeout(() => {
      setIsOpen(false);
    }, 850);
  }, [wasSubmitted, isSubscribe, form]);

  return {
    form,
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
