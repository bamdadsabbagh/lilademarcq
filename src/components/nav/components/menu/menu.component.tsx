import React, {ReactElement} from 'react';
import {useAtom} from 'jotai';
import {menuAtom} from '../../../../atoms/menuAtom';
import {ItemComponent} from '../item/item.component';

export function MenuComponent(): ReactElement {
  const [menu] = useAtom(menuAtom);

  return (
    <>
      {menu.map((item, index) => {
        const {
          name,
          slug,
          dropdownItems,
        } = item;

        return (
          <ItemComponent
            key={slug}
            index={index}
            name={name}
            slug={slug}
            first={index === 0}
            last={index === menu.length - 1}
            dropdownItems={dropdownItems}
          />
        );
      })}
    </>
  );
}
