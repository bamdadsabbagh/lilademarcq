import React, {ReactElement} from 'react';
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
import {useBurgerComponent} from './hooks/use-burger-component';

interface BurgerComponentProps {
  menu: MenuInterface;
}

export function BurgerComponent({menu}: BurgerComponentProps): ReactElement {
  const {
    router,
    isHover,
    setIsHover,
    isScrollTop,
    getCurrentRoute,
    containerRef,
    ref,
    height,
  } = useBurgerComponent(menu);

  return (
    <>
      <BurgerContainer
        onClick={() => setIsHover((h) => !h)}
        ref={containerRef}
      >
        <Circle
          close={!isHover}
        >
          <ExpandableLine close={!isHover} size={height} />
          <Line />
          <Line />
        </Circle>
        {getCurrentRoute() && (
          <BNavTitle active={!isHover && isScrollTop}>
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
