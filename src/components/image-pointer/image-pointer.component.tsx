import React, {ReactElement} from 'react';
import {
  LayerCenter,
  LayerLeft,
  LayerRight,
  Layers,
} from './image-pointer.component.styles';
import {useImagePointerComponent} from './hooks/use-image-pointer-component';
import {TriangleComponent} from '../triangle/triangle.component';

export interface ImagePointerComponentProps {
  gap: number;
  onClickLeft: () => void;
  onClickCenter?: (layerElement: HTMLDivElement) => void;
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
    onClickCenter,
    onClickLeft,
    onClickRight,
  });

  return (
    <>
      <Layers
        gap={gap}
        onClick={handleClick}
        debug={debug}
      >
        <LayerLeft>
          <TriangleComponent isLeft noWiggle />
        </LayerLeft>
        {onClickCenter ? <LayerCenter /> : <span />}
        <LayerRight>
          <TriangleComponent isRight noWiggle />
        </LayerRight>
      </Layers>
    </>
  );
}
