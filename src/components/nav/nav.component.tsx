import React, {ReactElement, useState} from 'react';
import {useRouter} from 'next/router';
import {Nav, StyledList} from './nav.styles';
import {MenuComponent} from './components/menu/menu.component';

export default function NavComponent(): ReactElement {
  const router = useRouter();

  const [routes] = useState([
    {text: 'home', href: '/'},
    {text: 'à propos', href: '/a-propos'},
    {
      text: 'objets',
      href: '/objets',
      items: [
        {text: 'Indlu', href: '/objets/indlu'},
        {text: 'Isiqu', href: '/objets/isiqu'},
        {text: 'Isihla', href: '/objets/isihla'},
        {text: 'Sa-Poro', href: '/objets/sa-poro'},
        {text: 'Usha papier', href: '/objets/usha-papier'},
        {text: 'Usha acier', href: '/objets/usha-acier'},
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
            <MenuComponent
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
