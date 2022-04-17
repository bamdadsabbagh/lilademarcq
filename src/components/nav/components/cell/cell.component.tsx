import React, {ReactElement, useCallback, useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {
  Cell,
  Dropdown,
  DropdownEmptyItem,
  DropdownItem,
  Text,
} from './cell.styles';

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

export function CellComponent({
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

        {items && (
          <Dropdown display={open ? 1 : 0}>
            {items.map((item) => {
              if (item.text.includes('empty')) {
                return <DropdownEmptyItem key={item.text} />;
              }

              return (
                <Link href={item.href} key={item.text}>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a>
                    <DropdownItem active={item.href === router.pathname}>{item.text}</DropdownItem>
                  </a>
                </Link>
              );
            })}
          </Dropdown>
        )}
      </Cell>
    </>
  );
}