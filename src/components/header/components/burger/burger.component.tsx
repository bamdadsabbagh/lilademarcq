import React, {ReactElement, useState} from 'react';
import useMeasure from 'react-use-measure';
import {
  BNav,
  BNavItem,
  BurgerContainer,
  Circle,
  ExpandableLine,
  Line,
} from './burger.styles';
import {LinkComponent} from '../../../link/link.component';
import {MenuInterface} from '../../../../utils/fetch-menu';

interface BurgerComponentProps {
  menu: MenuInterface;
}

export function BurgerComponent({menu}: BurgerComponentProps): ReactElement {
  const [hover, setHover] = useState(false);
  const [ref, bounds] = useMeasure();

  return (
    <>
      <BurgerContainer
        onClick={() => setHover((h) => !h)}
      >
        <Circle
          close={!hover}
        >
          <ExpandableLine close={!hover} size={bounds.height} />
          <Line />
          <Line />
        </Circle>
        <BNav
          ref={ref}
          close={!hover}
        >
          {menu.map((item) => (
            <LinkComponent href={item.slug} key={item.slug}>
              <BNavItem>{item.name}</BNavItem>
            </LinkComponent>
          ))}
        </BNav>
      </BurgerContainer>
    </>
  );
}
