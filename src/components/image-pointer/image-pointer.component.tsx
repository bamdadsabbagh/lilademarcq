import React, {ReactElement} from 'react';
import {PointerLayer} from './image-pointer.component.styles';
import {useImagePointerComponent} from './hooks/use-image-pointer-component';

export interface ImagePointerComponentProps {
  gap: number;
  onClickLeft: () => void;
  onClickCenter: (e: React.MouseEvent<HTMLDivElement>) => void;
  onClickRight: () => void;
  debug?: boolean;
}

export function ImagePointerComponent({
  gap,
  onClickLeft,
  onClickCenter,
  onClickRight,
  debug,
}: ImagePointerComponentProps): ReactElement {
  const {handleClick} = useImagePointerComponent({
    gap,
    onClickCenter,
    onClickLeft,
    onClickRight,
  });

  return (
    <>
      <PointerLayer
        gap={gap}
        onClick={handleClick}
        debug={debug}
      />
    </>
  );
}
