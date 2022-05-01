import React, {useCallback} from 'react';
import {ImagePointerComponentProps} from '../image-pointer.component';

interface UseImagePointerComponent {
  handleClick: (layerElement: React.MouseEvent<HTMLDivElement>) => void;
}

type UseImagePointerComponentProps = Omit<ImagePointerComponentProps, 'gap'>

export function useImagePointerComponent({
  onClickLeft,
  onClickCenter,
  onClickRight,
}: UseImagePointerComponentProps): UseImagePointerComponent {
  const handleClick = useCallback((
    e: React.MouseEvent<HTMLDivElement>,
  ) => {
    const target = e.target as HTMLDivElement;
    const parent = target.parentElement as HTMLDivElement;
    const children = Array.from(parent.children);

    // center
    if (children.indexOf(target) === 1) {
      if (onClickCenter) {
        onClickCenter(parent);
      }
      return;
    }

    // left
    if (children.indexOf(target) === 0) {
      onClickLeft();
      return;
    }

    // right
    if (children.indexOf(target) === 2) {
      onClickRight();
    }
  }, [onClickCenter, onClickLeft, onClickRight]);

  return {
    handleClick,
  };
}
