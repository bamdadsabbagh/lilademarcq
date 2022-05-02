import React, {ReactElement, useCallback, useState} from 'react';
import useMeasure from 'react-use-measure';
import {useRouter} from 'next/router';
import {
  BNav,
  BNavItem,
  BNavTitle,
  BurgerContainer,
  Circle,
  ExpandableLine,
  Line,
} from './burger.component.styles';
import {LinkComponent} from '../../../link/link.component';
import {MenuInterface} from '../../../../utils/fetch-menu';

interface BurgerComponentProps {
  menu: MenuInterface;
}

export function BurgerComponent({menu}: BurgerComponentProps): ReactElement {
  const [isHover, setIsHover] = useState(false);
  const [ref, bounds] = useMeasure();
  const router = useRouter();
  const getCurrentRoute = useCallback(() => menu.find((item) => item.slug === router.asPath)?.name, [menu, router]);

  return (
    <>
      <BurgerContainer
        onClick={() => setIsHover((h) => !h)}
      >
        <Circle
          close={!isHover}
        >
          <ExpandableLine close={!isHover} size={bounds.height} />
          <Line />
          <Line />
        </Circle>
        {getCurrentRoute() && (
          <BNavTitle active={!isHover}>
            {getCurrentRoute()}
          </BNavTitle>
        )}
        <BNav
          ref={ref}
          close={!isHover}
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
