import React, {useCallback, useState} from 'react';
import {useAtom} from 'jotai';
import {setModalAtom} from '../../../atoms/modal.atom';

export interface UseIncrements {
  previousIndex: number;
  index: number;
  nextIndex: number;
  handleClick: (e: React.MouseEvent<HTMLDivElement>, src: string) => void;
  select: (i: number) => void;
}

export function useIncrements(length: number): UseIncrements {
  const [index, setIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(length - 1);
  const [nextIndex, setNextIndex] = useState(1);
  const [, setModal] = useAtom(setModalAtom);

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

  const select = useCallback((i) => {
    if (i === index) {
      return;
    }

    decrementPreviousIndex(i);
    setIndex(i);
    incrementNextIndex(i);
  }, [index, incrementNextIndex, decrementPreviousIndex]);

  const handleClick = useCallback((
    e: React.MouseEvent<HTMLDivElement>,
    src: string,
  ) => {
    const target = e.target as HTMLDivElement;
    const x = e.nativeEvent.offsetX;
    const width = target.clientWidth;

    const gap = 0.3;
    const percent = x / width;

    if (percent >= gap && percent <= 1 - gap) {
      setModal({isOpen: true, src});
      return;
    }

    if (percent < gap) {
      decrement();
      return;
    }

    if (percent > 1 - gap) {
      increment();
    }
  }, [decrement, increment, setModal]);

  return {
    previousIndex,
    index,
    nextIndex,
    select,
    handleClick,
  };
}