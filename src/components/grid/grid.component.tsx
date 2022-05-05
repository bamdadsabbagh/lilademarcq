import React, {ReactElement, useCallback, useMemo} from 'react';
import Image from 'next/image';
import {
  GridBody,
  GridContainer,
  GridImage,
  GridTile,
} from './grid.component.styles';
import {HoverBoxComponent} from './components/hover-box/hover-box.component';
import {LinkComponent} from '../link/link.component';

export interface Tile {
  image: {
    src: string;
    blur: string;
  };
  href?: string;
  onClick?: () => void;
  h3: string;
  h4?: string;
  span: string;
}

interface GridComponentProps {
  tiles: Tile[];
}

export function GridComponent({
  tiles,
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
              <GridTile>
                <GridImage>
                  <Image
                    src={tile.image.src}
                    blurDataURL={tile.image.blur}
                    alt=""
                    placeholder="blur"
                    layout="responsive"
                    width="100%"
                    height="100%"
                  />
                </GridImage>
                <HoverBoxComponent tile={tile} />
              </GridTile>
            </button>
          ))}

          {areLinks && tiles.map((tile) => (
            <LinkComponent
              key={tile.image.src}
              href={tile.href}
            >
              <GridTile>
                <GridImage>
                  <Image
                    src={tile.image.src}
                    blurDataURL={tile.image.blur}
                    alt=""
                    placeholder="blur"
                    layout="responsive"
                    width="100%"
                    height="100%"
                  />
                </GridImage>
                <HoverBoxComponent tile={tile} />
              </GridTile>
            </LinkComponent>
          ))}
        </GridBody>
      </GridContainer>
    </>
  );
}
