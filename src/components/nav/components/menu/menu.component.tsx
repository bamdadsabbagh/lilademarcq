import React, {ReactElement} from 'react';
import {useAtom} from 'jotai';
import {menuAtom} from '../../../../atoms/menuAtom';
import {Item} from '../dropdown/Item';

export function MenuComponent(): ReactElement {
  const [menu] = useAtom(menuAtom);

  return (
    <>
      {menu.map((item, index) => {
        const {name, slug, children} = item;
        return (
          <Item
            key={name}
            name={name}
            slug={slug}
            index={index}
            first={index === 0}
            last={index === menu.length - 1}
          />
        );
      })}
    </>
  );
}
