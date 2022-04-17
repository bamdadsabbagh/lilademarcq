import React, {ReactElement, useState} from 'react';
import {useRouter} from 'next/router';
import {Nav, StyledList} from './nav.styles';
import {CellComponent} from './components/cell/cell.component';

export default function NavComponent(): ReactElement {
  const router = useRouter();

  const [routes] = useState([
    {text: 'home', href: '/'},
    {text: 'à propos', href: '/a-propos'},
    {
      text: 'objets',
      href: '/objets',
      items: [
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
      ],
    },
    {text: 'poésie', href: '/poesie'},
    {text: 'événements', href: '/evenements'},
    {text: 'presse', href: '/presse'},
    {text: 'livre d\'or', href: '/livre-d-or'},
  ]);

  return (
    <Nav>
      <StyledList>
        {routes.map((route, index) => {
          const {text, href, items} = route;
          return (
            <CellComponent
              key={text}
              k={index}
              primary={{text, href}}
              noLeft={index === 0}
              noRight={index === routes.length - 1}
              active={router.pathname === href}
              items={items || []}
            />
          );
        })}
      </StyledList>
    </Nav>
  );
}
