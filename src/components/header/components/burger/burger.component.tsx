import React, {ReactElement, useState} from 'react';
import useMeasure from 'react-use-measure';
import {useRouter} from 'next/router';
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
  const router = useRouter();

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
              <BNavItem active={item.slug === router.asPath}>{item.name}</BNavItem>
            </LinkComponent>
          ))}
        </BNav>
      </BurgerContainer>
    </>
  );
}
