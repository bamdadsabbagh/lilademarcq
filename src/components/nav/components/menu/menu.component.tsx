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
  name: string;
  slug?: string;
}

export interface MenuComponentItem {
  name: string;
  menuName: string | null;
  slug?: string;
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
        {primary.slug ? (
          <Link href={primary.slug}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <Text
                isActive={isActive()}
                isOpen={isOpen()}
                isLink
              >
                {primary.name}
              </Text>
            </a>
          </Link>
        ) : (
          <Text isActive={isActive()} isOpen={isOpen()}>
            {primary.name}
          </Text>
        )}

        {items.length > 0 && (
          <Dropdown display={open ? 1 : 0}>
            <DropdownEmptyItem />
            {items.map((item) => (
              <Link
                href={`/objets/${item.slug}`}
                key={item.menuName ?? item.name}
              >
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>
                  <DropdownItem active={item.slug === router.asPath}>{item.menuName ?? item.name}</DropdownItem>
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
