import React from 'react';
import {Tile} from '../tile/tile.component';
import {HoverBoxFull, HoverBoxHalf} from './hover-box.component.styles';

interface HoverBoxComponentProps {
  tile: Tile;
  isFull?: boolean;
}

export function HoverBoxComponent({
  tile,
  isFull,
}: HoverBoxComponentProps): JSX.Element {
  return (
    <>
      {isFull && (
        <HoverBoxFull>
          <h3>{tile.h3}</h3>
          <span>{tile.span}</span>
          <h4>{tile.h4}</h4>
        </HoverBoxFull>
      )}

      {!isFull && (
        <HoverBoxHalf>
          <h3>{tile.h3}</h3>
          <span>{tile.span}</span>
        </HoverBoxHalf>
      )}
    </>
  );
}
