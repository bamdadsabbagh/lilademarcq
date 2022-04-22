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
          const {name, slug, items} = route;
          return (
            <MenuComponent
              key={name}
              k={index}
              primary={{name, slug}}
              noLeft={index === 0}
              noRight={index === routes.length - 1}
              active={router.pathname === slug}
              items={items || []}
            />
          );
        })}
      </StyledList>
    </Nav>
  );
}
