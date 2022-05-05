import React, {ReactElement, useMemo} from 'react';
import {
  GridTileHoverBoxFull,
  GridTileHoverBoxHalf,
} from './hover-box.component.styles';
import {Tile} from '../../grid.component';

interface HoverBoxComponentProps {
  tile: Tile;
}

export function HoverBoxComponent({
  tile,
}: HoverBoxComponentProps): ReactElement {
  const isFullHoverBox = useMemo(() => typeof tile?.h4 === 'string', [tile]);

  return (
    <>
      {isFullHoverBox ? (
        <GridTileHoverBoxFull>
          <h3>{tile.h3}</h3>
          <span>{tile.span}</span>
          <h4>{tile.h4}</h4>
        </GridTileHoverBoxFull>
      ) : (
        <GridTileHoverBoxHalf>
          <h3>{tile.h3}</h3>
          <span>{tile.span}</span>
        </GridTileHoverBoxHalf>
      )}
    </>
  );
}
