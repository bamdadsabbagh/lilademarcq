import React, {ReactElement} from 'react';
import {useRouter} from 'next/router';
import {Nav, StyledList} from './nav.styles';
import {MenuComponent} from './components/menu/menu.component';
import {Route} from '../../pages/api/routes';

interface NavComponentProps {
  routes: Route[];
}

export default function NavComponent({routes}: NavComponentProps): ReactElement {
  const router = useRouter();

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
