import React, {ReactElement, useState} from 'react';
import {SectionComponent} from '../../components/section/section.component';
import {TitleComponent} from '../../components/title/title.component';
import {ListComponent} from '../../components/list/list.component';
import {
  ProductTileComponent,
} from '../../components/product-tile/product-tile.component';
import Object01Image from '../../../public/images/object-01.png';
import Object02Image from '../../../public/images/object-02.png';
import Object03Image from '../../../public/images/object-03.png';
import Object04Image from '../../../public/images/object-04.png';
import Object05Image from '../../../public/images/object-05.png';
import Object06Image from '../../../public/images/object-06.png';

export function ProductsModule(): ReactElement {
  const [products] = useState([
    {
      image: Object01Image,
      title: 'INDLU',
      description: 'Portant et créateur d\'espaces',
      href: '/objets/indlu',
    },
    {
      image: Object02Image,
      title: 'isiqu',
      description: 'Le canapé hybride',
      href: '/objets/isiqu',
    },
    {
      image: Object03Image,
      title: 'isihla',
      description: 'Une oeuvre-persienne',
      href: '/objets/isihla',
    },
    {
      image: Object04Image,
      title: 'sa-poro',
      description: 'Le nouveau Senufo',
      href: '/objets/sa-poro',
    },
    {
      image: Object05Image,
      title: 'usha',
      description: 'La finesse de l\'acier',
      href: '/objets/usha-acier',
    },
    {
      image: Object06Image,
      title: 'usha',
      description: 'La douceur du papier',
      href: '/objets/usha-papier',
    },
  ]);

  return (
    <>
      <SectionComponent>
        <TitleComponent>
          Objets design
        </TitleComponent>
        <ListComponent>
          {products.map((product) => <ProductTileComponent
            key={product.href}
            image={product.image}
            title={product.title}
            description={product.description}
            href={product.href}
          />)}
        </ListComponent>
      </SectionComponent>
    </>
  );
}
