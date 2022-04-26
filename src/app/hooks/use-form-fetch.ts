import {useEffect} from 'react';
import {useAtom} from 'jotai';
import {setFormAtom} from '../../atoms/form.atom';

export function useFormFetch(): void {
  const [, setForm] = useAtom(setFormAtom);

  useEffect(() => {
    (async () => {
      const form = await fetch(`${window.location.origin}/api/form`);
      const json = await form.json();
      setForm(json);
    })();
  }, [setForm]);
}
