import {useCallback} from 'react';
import {useAtom} from 'jotai';
import {StaticImageData} from 'next/image';
import {modalAtom, setModalAtom} from '../../../atoms/modal.atom';

interface UseModalComponent {
  isOpen: boolean;
  src: StaticImageData;
  handleClick: () => void;
}

export function useModalComponent(): UseModalComponent {
  const [{isOpen, src}] = useAtom(modalAtom);
  const [, setModal] = useAtom(setModalAtom);

  const handleClick = useCallback(() => {
    setModal({isOpen: false, src: null});
  }, [setModal]);

  return {
    isOpen,
    src,
    handleClick,
  };
}
