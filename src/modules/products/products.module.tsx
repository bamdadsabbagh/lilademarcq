import React, {ReactElement, useEffect, useState} from 'react';
import {SectionComponent} from '../../components/section/section.component';
import {
  SectionTitleComponent,
} from '../../components/section-title/section-title.component';
import {GridComponent} from './components/grid/grid.component';
import {TileComponent} from './components/tile/tile.component';
import {capitalizeFirstLetter} from '../../utils/capitalize-first-letter';

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
  const [images, setImages] = useState([]);

  useEffect(() => {
    const array = [];

    products.forEach((product) => {
      (async () => {
        const image = (await import('../../../public/images/' + product.thumbnail)).default;

        array.push(image);

        if (array.length === products.length) {
          setImages(array);
        }
      })();
    });
  }, [products]);

  return (
    <>
      {images.length !== 0 && (
        <SectionComponent>
          <SectionTitleComponent>
            Objets design
          </SectionTitleComponent>
          <GridComponent>
            {products.map((product, index) => (
              <TileComponent
                key={product.slug}
                image={images[index]}
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
