import React, {useCallback} from 'react';
import {ImagePointerComponentProps} from '../image-pointer.component';

interface UseImagePointerComponent {
  handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export function useImagePointerComponent({
  gap,
  onClickLeft,
  onClickCenter,
  onClickRight,
}: ImagePointerComponentProps): UseImagePointerComponent {
  const handleClick = useCallback((
    e: React.MouseEvent<HTMLDivElement>,
  ) => {
    const target = e.target as HTMLDivElement;
    const x = e.nativeEvent.offsetX;
    const width = target.clientWidth;

    const g = gap / 100;
    const percent = x / width;

    // center
    if (percent >= g && percent <= 1 - g) {
      onClickCenter(e);
      return;
    }

    // left
    if (percent < g) {
      onClickLeft();
      return;
    }

    // right
    if (percent > 1 - g) {
      onClickRight();
    }
  }, [gap, onClickCenter, onClickLeft, onClickRight]);

  return {
    handleClick,
  };
}
