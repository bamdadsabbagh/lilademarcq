import React, {ReactElement, useCallback, useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {
  Cell,
  Dropdown,
  DropdownEmptyItem,
  DropdownItem,
  Text,
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
  primary: MenuComponentMain;
  items?: MenuComponentItem[];
  active?: boolean;
  noLeft?: boolean;
  noRight?: boolean;
}

export function MenuComponent({
  k,
  primary,
  items,
  active,
  noLeft,
  noRight,
}: MenuComponentProps): ReactElement {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const isActive = useCallback(() => active ? 1 : 0, [active]);
  const isOpen = useCallback(() => open ? 1 : 0, [open]);

  return (
    <>
      <Cell
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        noLeft={noLeft ? 1 : 0}
        noRight={noRight ? 1 : 0}
        index={k}
      >
        {primary.href ? (
          <Link href={primary.href}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <Text
                isActive={isActive()}
                isOpen={isOpen()}
                isLink
              >
                {primary.text}
              </Text>
            </a>
          </Link>
        ) : (
          <Text isActive={isActive()} isOpen={isOpen()}>
            {primary.text}
          </Text>
        )}

        {items.length > 0 && (
          <Dropdown display={open ? 1 : 0}>
            <DropdownEmptyItem />
            {items.map((item) => (
              <Link href={item.href} key={item.text}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>
                  <DropdownItem active={item.href === router.asPath}>{item.text}</DropdownItem>
                </a>
              </Link>
            ))}
            <DropdownEmptyItem />
          </Dropdown>
        )}
      </Cell>
    </>
  );
}
