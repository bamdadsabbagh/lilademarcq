import React, {ReactElement} from 'react';
import {SectionComponent} from '../../components/section/section.component';
import {
  SectionTitleComponent,
} from '../../components/section-title/section-title.component';
import {GridComponent} from './components/grid/grid.component';
import {TileComponent} from './components/tile/tile.component';
import {capitalizeFirstLetter} from '../../utils/capitalize-first-letter';
import {useImageSource} from '../../hooks/use-image-source';

export interface ProductTile {
  name: string;
  description: string;
  slug: string;
  thumbnail: string;
}

interface ProductsModuleProps {
  products: ProductTile[];
}

export function ProductsModule({products}: ProductsModuleProps): ReactElement {
  const [sources, loading] = useImageSource(products.map(({thumbnail}) => thumbnail));

  return (
    <>
      {!loading && (
        <SectionComponent>
          <SectionTitleComponent>
            Objets design
          </SectionTitleComponent>
          <GridComponent>
            {products.map((product, index) => (
              <TileComponent
                key={product.slug}
                image={sources[index]}
                title={product.name.toUpperCase()}
                description={capitalizeFirstLetter(product.description.toLowerCase())}
                href={`/objets/${product.slug}`}
              />
            ))}
          </GridComponent>
        </SectionComponent>
      )}
    </>
  );
}
