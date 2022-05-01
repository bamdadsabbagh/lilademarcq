import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useCallback,
  useState,
} from 'react';
import {FormInterface} from '../../../utils/fetch-form';
import {getApiEndpoint} from '../../../utils/get-api-endpoint';
import {RECAPTCHA_SITE_KEY} from '../../../constants';

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

      const formData = new FormData(event.currentTarget);
      const fieldValues = Object.fromEntries(formData.entries());

      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {action: 'submit'})
          .then((token) => {
            (async () => {
              load();

              const payload = {
                ...fieldValues,
                subscribe: isSubscribe,
                token,
              };

              const request = await fetch(
                getApiEndpoint('form'),
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(payload),
                },
              );

              const response = await request.json();

              if (response.ok === true) {
                success();
              } else {
                fail();
              }
            })();
          });
      });
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
