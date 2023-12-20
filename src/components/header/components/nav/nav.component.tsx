import React from 'react';
import {BurgerComponent} from '../burger/burger.component';
import {NavItemComponent} from '../nav-item/nav-item.component';
import {useNavComponent} from './hooks/use-nav-component';
import {Container, Nav} from './nav.component.styles';

export function NavComponent(): JSX.Element {
  const {menu, borders} = useNavComponent();

  return (
    <Container>
      <Nav>
        {borders.length > 0 &&
          menu.map((item, index) => {
            const {name, slug, dropdown} = item;

            return (
              <NavItemComponent
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
      </Nav>
      <BurgerComponent menu={menu} />
    </Container>
  );
}
