import React, {ReactElement, useState} from 'react';
import Link from 'next/link';
import {
  EmptyItem,
  Item,
  Items,
  StyledContainer,
  StyledMain,
} from './menu.styles';

export interface MenuComponentMain {
  text: string;
  href?: string;
}

export interface MenuComponentItem {
  text: string;
  href?: string;
}

interface MenuComponentProps {
  k: number;
  main: MenuComponentMain;
  items?: MenuComponentItem[];
  active?: boolean;
  noLeft?: boolean;
  noRight?: boolean;
}

export function MenuComponent({
  k,
  main,
  items,
  active,
  noLeft,
  noRight,
}: MenuComponentProps): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StyledContainer
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        noLeft={noLeft ? 1 : 0}
        noRight={noRight ? 1 : 0}
        index={k}
      >
        {main.href ? (
          <Link href={main.href}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <StyledMain
                isActive={active ? 1 : 0}
                isOpen={isOpen ? 1 : 0}
                isLink
              >
                {main.text}
              </StyledMain>
            </a>
          </Link>
        ) : (
          <StyledMain isActive={active ? 1 : 0} isOpen={isOpen ? 1 : 0}>
            {main.text}
          </StyledMain>
        )}

        {items && <Items display={isOpen ? 1 : 0}>
          {items.map((item) => {
            if (item.text.includes('empty')) {
              return <EmptyItem key={item.text} />;
            }

            return (
              <Link href={item.href} key={item.text}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>
                  <Item>{item.text}</Item>
                </a>
              </Link>
            );
          })}
        </Items>}
      </StyledContainer>
    </>
  );
}
