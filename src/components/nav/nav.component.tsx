import React, {ReactElement} from 'react';
import {Nav, StyledList} from './nav.styles';
import {MenuComponent} from './components/menu/menu.component';

export default function NavComponent(): ReactElement {
  return (
    <Nav>
      <StyledList>
        <MenuComponent k={0} main={{text: 'home', href: '/'}} noLeft active />
        <MenuComponent
          k={1}
          main={{text: 'à propos', href: '/a-propos'}}
          noLeft
        />
        <MenuComponent
          k={2}
          main={{text: 'objets', href: '/objets'}}
          items={[
            {text: 'empty-0'},
            {text: 'Indlu', href: '/objets/indlu'},
            {text: 'Isiqu', href: '/objets/isiqu'},
            {text: 'Isihla', href: '/objets/isihla'},
            {text: 'empty-1'},
            {text: 'Sa-Poro', href: '/objets/sa-poro'},
            {text: 'empty-2'},
            {text: 'Usha papier', href: '/objets/usha-papier'},
            {text: 'Usha acier', href: '/objets/usha-acier'},
            {text: 'empty-3'},
          ]}
        />
        <MenuComponent k={3} main={{text: 'poésie', href: '/poesie'}} />
        <MenuComponent k={4} main={{text: 'événements', href: '/evenements'}} />
        <MenuComponent k={5} main={{text: 'presse', href: '/presse'}} />
        <MenuComponent
          k={6} main={{text: 'livre d\'or', href: '/livre-d-or'}}
          noRight
        />
      </StyledList>
    </Nav>
  );
}
