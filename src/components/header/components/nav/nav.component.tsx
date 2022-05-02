import React, {ReactElement} from 'react';
import {NavItemComponent} from '../nav-item/nav-item.component';
import {useNavComponent} from './hooks/use-nav-component';
import {Container, Nav} from './nav.component.styles';
import {BurgerComponent} from '../burger/burger.component';

export function NavComponent(): ReactElement {
  const {menu, borders} = useNavComponent();

  return (
    <Container>
      <Nav>
        {borders.length > 0 && menu.map((item, index) => {
          const {
            name,
            slug,
            dropdown,
          } = item;

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
