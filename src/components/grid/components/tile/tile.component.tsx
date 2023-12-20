import Image from 'next/image';
import React from 'react';
import {GridImage, GridTile} from '../../grid.component.styles';
import {HoverBoxComponent} from '../hover-box/hover-box.component';

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

interface TileComponentProps {
  tile: Tile;
  isFull?: boolean;
}

export function TileComponent({tile, isFull}: TileComponentProps): JSX.Element {
  return (
    <>
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
            objectFit="cover"
          />
        </GridImage>
        <HoverBoxComponent
          isFull={isFull}
          tile={tile}
        />
      </GridTile>
    </>
  );
}
