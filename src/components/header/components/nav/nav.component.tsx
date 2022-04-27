import React, {ReactElement, useState} from 'react';
import useMeasure from 'react-use-measure';
import {NavItemComponent} from '../nav-item/nav-item.component';
import {useNavComponent} from './hooks/use-nav-component';
import {
  BNav,
  BNavItem,
  BurgerContainer,
  Circle,
  Container,
  ExpandableLine,
  Line,
  Nav,
} from './nav.styles';
import {LinkComponent} from '../../../link/link.component';

export function NavComponent(): ReactElement {
  const {menu, borders} = useNavComponent();
  const [hover, setHover] = useState(true);
  const [ref, bounds] = useMeasure();

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
      <BurgerContainer
        onMouseLeave={() => setHover(false)}
      >
        <Circle
          onMouseEnter={() => setHover(true)}
          close={!hover}
        >
          <ExpandableLine close={!hover} size={bounds.height} />
          <Line />
          <Line />
        </Circle>
        <BNav ref={ref} close={!hover}>
          {menu.map((item) => (
            <LinkComponent href={item.slug} key={item.slug}>
              <BNavItem>{item.name}</BNavItem>
            </LinkComponent>
          ))}
        </BNav>
      </BurgerContainer>
    </Container>
  );
}
