import {useCallback, useState} from 'react';

export interface UseIncrements {
  previousIndex: number;
  index: number;
  nextIndex: number;
  handleSelect: (i: number) => void;
  increment: () => void;
  decrement: () => void;
  openTarget: (layer: HTMLDivElement) => void;
}

export function useIncrements(length: number): UseIncrements {
  const [index, setIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(length - 1);
  const [nextIndex, setNextIndex] = useState(1);

  const incrementNextIndex = useCallback((i) => {
    setNextIndex(i + 2 >= length ? 0 : i + 2);
  }, [length]);

  const increment = useCallback(() => {
    if (index === length - 1) {
      setPreviousIndex(length - 1);
      setIndex(0);
      setNextIndex(1);
      return;
    }

    setPreviousIndex(index);
    setIndex((i) => i + 1);
    incrementNextIndex(index);
  }, [index, length, incrementNextIndex]);

  const decrementPreviousIndex = useCallback((i) => {
    setPreviousIndex(i - 2 <= -1 ? length - 1 : i - 2);
  }, [length]);

  const decrement = useCallback(() => {
    if (index === 0) {
      setPreviousIndex(length - 2);
      setIndex(length - 1);
      setNextIndex(0);
      return;
    }

    decrementPreviousIndex(index);
    setIndex((i) => i - 1);
    setNextIndex(index);
  }, [index, length, decrementPreviousIndex]);

  const handleSelect = useCallback((i) => {
    if (i === index) {
      return;
    }

    decrementPreviousIndex(i);
    setIndex(i);
    incrementNextIndex(i);
  }, [index, incrementNextIndex, decrementPreviousIndex]);

  const openTarget = useCallback((parent: HTMLDivElement) => {
    const anchor = parent.nextElementSibling.firstElementChild.children[index] as HTMLAnchorElement;
    anchor.click();
  }, [index]);

  return {
    previousIndex,
    index,
    nextIndex,
    handleSelect,
    increment,
    decrement,
    openTarget,
  };
}
