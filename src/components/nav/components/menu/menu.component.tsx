import React, {ReactElement} from 'react';
import {ItemComponent} from '../item/item.component';
import {useMenuComponent} from './hooks/use-menu-component';

export function MenuComponent(): ReactElement {
  const {menu, borders} = useMenuComponent();

  return (
    <>
      {borders.length > 0 && menu.map((item, index) => {
        const {
          name,
          slug,
          dropdown,
        } = item;

        return (
          <ItemComponent
            key={slug}
            index={index}
            name={name}
            slug={slug}
            noBorderLeft={!borders[index][0]}
            noBorderRight={!borders[index][1]}
            dropdown={dropdown}
          />
        );
      })}
    </>
  );
}
