import React, {ReactElement} from 'react';
import {PointerLayer} from './image-pointer.component.styles';

interface ImagePointerEventsComponentProps {
  gap: number;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  debug?: boolean;
}

export function ImagePointerComponent({
  gap,
  onClick,
  debug,
}: ImagePointerEventsComponentProps): ReactElement {
  return (
    <>
      <PointerLayer
        gap={gap}
        onClick={onClick}
        debug={debug}
      />
    </>
  );
}
