import React, {ReactElement, useCallback, useMemo} from 'react';
import {GridBody, GridContainer} from './grid.component.styles';
import {LinkComponent} from '../link/link.component';
import {Tile, TileComponent} from './components/tile/tile.component';

interface GridComponentProps {
  tiles: Tile[];
  isFull?: boolean;
}

export function GridComponent({
  tiles,
  isFull,
}: GridComponentProps): ReactElement {
  const isButton = useCallback((tile: Tile) => typeof tile?.onClick === 'function', []);
  const areButtons = useMemo(() => tiles.some(isButton), [tiles, isButton]);

  const isLink = useCallback((tile: Tile) => typeof tile?.href === 'string', []);
  const areLinks = useMemo(() => tiles.some(isLink), [tiles, isLink]);

  return (
    <>
      <GridContainer>
        <GridBody>
          {areButtons && tiles.map((tile) => (
            <button
              type="button"
              key={tile.image.src}
              onClick={tile.onClick}
            >
              <TileComponent isFull={isFull} tile={tile} />
            </button>
          ))}

          {areLinks && tiles.map((tile) => (
            <LinkComponent
              key={tile.image.src}
              href={tile.href}
            >
              <TileComponent isFull={isFull} tile={tile} />
            </LinkComponent>
          ))}
        </GridBody>
      </GridContainer>
    </>
  );
}
