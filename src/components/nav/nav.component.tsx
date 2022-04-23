import React, {ReactElement} from 'react';
import {useRouter} from 'next/router';
import {useAtom} from 'jotai';
import {Nav, StyledList} from './nav.styles';
import {MenuComponent} from './components/menu/menu.component';
import {navAtom} from '../../atoms/nav.atom';

export default function NavComponent(): ReactElement {
  const router = useRouter();
  const [nav] = useAtom(navAtom);

  return (
    <Nav>
      <StyledList>
        {nav.map((route, index) => {
          const {name, slug, items} = route;
          return (
            <MenuComponent
              key={name}
              k={index}
              primary={{name, slug}}
              noLeft={index === 0}
              noRight={index === nav.length - 1}
              active={router.pathname === slug}
              items={items || []}
            />
          );
        })}
      </StyledList>
    </Nav>
  );
}
