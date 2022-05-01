import {Dispatch, SetStateAction, useCallback} from 'react';

export interface UseHandlers {
  handleSelect: (i: number) => void;
  openTarget: (layer: HTMLDivElement) => void;
}

interface UseHandlersProps {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  updatePreviousIndex: (i: number) => void;
  updateNextIndex: (i: number) => void;
}

export function useHandlers({
  index,
  setIndex,
  updatePreviousIndex,
  updateNextIndex,
}: UseHandlersProps): UseHandlers {
  const handleSelect = useCallback((i) => {
    if (i === index) {
      return;
    }

    updatePreviousIndex(i);
    setIndex(i);
    updateNextIndex(i);
  }, [index, setIndex, updateNextIndex, updatePreviousIndex]);

  const openTarget = useCallback((parent: HTMLDivElement) => {
    const anchor = parent.nextElementSibling.firstElementChild.children[index] as HTMLAnchorElement;
    anchor.click();
  }, [index]);

  return {
    handleSelect,
    openTarget,
  };
}
