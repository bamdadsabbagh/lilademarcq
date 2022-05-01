import {Dispatch, SetStateAction, useCallback, useState} from 'react';

interface UseInfiniteArrayIndexes {
  index: number;
  previousIndex: number;
  nextIndex: number;
  setIndex: Dispatch<SetStateAction<number>>;
  decrement: () => void;
  increment: () => void;
  updatePreviousIndex: (i: number) => void;
  updateNextIndex: (i: number) => void;
}

export function useInfiniteArrayIndexes(length: number): UseInfiniteArrayIndexes {
  const [index, setIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(length - 1);
  const [nextIndex, setNextIndex] = useState(1);

  const updateNextIndex = useCallback((i) => {
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
    updateNextIndex(index);
  }, [index, length, updateNextIndex]);

  const updatePreviousIndex = useCallback((i) => {
    setPreviousIndex(i - 2 <= -1 ? length - 1 : i - 2);
  }, [length]);

  const decrement = useCallback(() => {
    if (index === 0) {
      setPreviousIndex(length - 2);
      setIndex(length - 1);
      setNextIndex(0);
      return;
    }

    updatePreviousIndex(index);
    setIndex((i) => i - 1);
    setNextIndex(index);
  }, [index, length, updatePreviousIndex]);

  return {
    index,
    setIndex,
    nextIndex,
    previousIndex,
    increment,
    decrement,
    updateNextIndex,
    updatePreviousIndex,
  };
}
