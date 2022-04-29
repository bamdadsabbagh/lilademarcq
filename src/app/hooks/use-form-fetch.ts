import {useEffect} from 'react';
import {useAtom} from 'jotai';
import {setFormAtom} from '../../atoms/form.atom';
import {getApiEndpoint} from '../../utils/get-api-endpoint';

export function useFormFetch(): void {
  const [, setForm] = useAtom(setFormAtom);

  useEffect(() => {
    (async () => {
      const form = await fetch(getApiEndpoint('form'));
      const json = await form.json();
      setForm(json);
    })();
  }, [setForm]);
}
