import React, {ReactElement, useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import axios from 'axios';
import {Nav, StyledList} from './nav.styles';
import {MenuComponent} from './components/menu/menu.component';

export default function NavComponent(): ReactElement {
  const router = useRouter();
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get('/api/routes');
      const data = await response.data;
      setRoutes(data);
    })();
  }, []);

  return (
    <Nav>
      <StyledList>
        {routes.length !== 0 && routes.map((route, index) => {
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
