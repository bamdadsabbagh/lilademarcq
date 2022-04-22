import React, {ReactElement} from 'react';
import {SectionComponent} from '../../components/section/section.component';
import {
  SectionTitleComponent,
} from '../../components/section-title/section-title.component';
import {GridComponent} from './components/grid/grid.component';
import {TileComponent} from './components/tile/tile.component';
import {capitalizeFirstLetter} from '../../utils/capitalize-first-letter';

export interface ProductTile {
  slug: string;
  position: number;
  name: string;
  description: string;
  thumbnail: {
    url: string;
  };
}

interface ProductsModuleProps {
  products: ProductTile[];
}

export function ProductsModule({products}: ProductsModuleProps): ReactElement {
  return (
    <>
      <SectionComponent>
        <SectionTitleComponent>
          Objets design
        </SectionTitleComponent>
        <GridComponent>
          {products.map((product) => (
            <TileComponent
              key={product.slug}
              image={product.thumbnail.url}
              title={product.name.toUpperCase()}
              description={capitalizeFirstLetter(product.description.toLowerCase())}
              href={`/objets/${product.slug}`}
            />
          ))}
        </GridComponent>
      </SectionComponent>
    </>
  );
}
