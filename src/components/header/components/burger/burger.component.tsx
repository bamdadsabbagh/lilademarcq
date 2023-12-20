import React, {useEffect, useState} from 'react';
import {MenuInterface} from '../../../../utils/fetch-menu';
import {LinkComponent} from '../../../link/link.component';
import {
  BNav,
  BNavItem,
  BNavProps,
  BNavTitle,
  BurgerContainer,
  Circle,
  ExpandableLine,
  Line,
} from './burger.component.styles';
import {useBurgerComponent} from './hooks/use-burger-component';

interface BurgerComponentProps {
  menu: MenuInterface;
}

export function BurgerComponent({menu}: BurgerComponentProps): JSX.Element {
  const {
    router,
    isHover,
    setIsHover,
    isScrollTop,
    getCurrentRoute,
    containerRef,
    ref,
    height,
    firstRender,
    setFirstRender,
  } = useBurgerComponent(menu);

  const [animation, setAnimation] =
    useState<BNavProps['animation']>('first-render');

  useEffect(() => {
    if (!isHover && firstRender) {
      setAnimation('first-render');
    } else if (isHover) {
      if (firstRender) {
        setFirstRender(false);
      }
      setAnimation('open');
    } else {
      setAnimation('close');
    }

    return () => {
      setAnimation('first-render');
    };
  }, [firstRender, isHover, setFirstRender]);

  return (
    <>
      <BurgerContainer ref={containerRef}>
        <Circle
          close={!isHover}
          onClick={() => setIsHover((h) => !h)}
        >
          <ExpandableLine
            close={!isHover}
            size={height}
          />
          <Line />
          <Line />
        </Circle>
        {getCurrentRoute() && (
          <BNavTitle
            active={!isHover && isScrollTop}
            onClick={() => setIsHover((h) => !h)}
          >
            {getCurrentRoute()}
          </BNavTitle>
        )}
        <BNav
          ref={ref}
          animation={animation}
          onClick={() => setIsHover((h) => !h)}
        >
          {menu.map((item) => (
            <LinkComponent
              href={item.slug}
              key={item.slug}
            >
              <BNavItem active={item.slug === router.asPath}>
                {item.name}
              </BNavItem>
            </LinkComponent>
          ))}
        </BNav>
      </BurgerContainer>
    </>
  );
}
