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
  const getRoute = useCallback((slug: string) => `/objets/${slug}`, []);
  const getLeft = useCallback(() => noLeft ? 1 : 0, [noLeft]);
  const getRight = useCallback(() => noRight ? 1 : 0, [noRight]);
  const getOpen = useCallback(() => open ? 1 : 0, [open]);
  const isMenu = useCallback(() => items.length > 0, [items.length]);

  return (
    <>
      <Cell
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        noLeft={getLeft()}
        noRight={getRight()}
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

        {isMenu() && (
          <Dropdown display={getOpen()}>
            <DropdownEmptyItem />
            {items.map((item) => (
              <Link
                href={getRoute(item.slug)}
                key={item.menuName ?? item.name}
              >
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>
                  <DropdownItem active={getRoute(item.slug) === router.asPath}>{item.menuName ?? item.name}</DropdownItem>
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
