import React, {ReactElement, useState} from 'react';
import {useRouter} from 'next/router';
import {MenuDropdownItems} from '../../../../atoms/menuAtom';
import {LinkComponent} from '../../../link/link.component';
import {
  BorderLeft,
  BorderRight,
  Container,
  Dropdown,
  DropdownItem,
  DropdownSpacer,
  Item,
} from './item.styles';

interface DropdownProps {
  index: number;
  name: string;
  slug: string;
  noBorderLeft: boolean;
  noBorderRight: boolean;
  dropdownItems?: MenuDropdownItems[];
}

export function ItemComponent({
  index,
  name,
  slug,
  noBorderLeft,
  noBorderRight,
  dropdownItems,
}: DropdownProps): ReactElement {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Container
        index={index}
        hasChildren={!!dropdownItems}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        isOpen={isOpen}
      >
        {!noBorderLeft && <BorderLeft isOpen={isOpen} />}
        {!noBorderRight && <BorderRight isOpen={isOpen} />}
        <LinkComponent href={slug}>
          <Item isOpen={isOpen} isActive={slug === router.asPath}>
            {name}
          </Item>
        </LinkComponent>
        <Dropdown isOpen={isOpen}>
          {dropdownItems && <DropdownSpacer />}
          {dropdownItems && dropdownItems.map((item) => (
            <LinkComponent href={item.slug} key={item.slug}>
              <DropdownItem isActive={item.slug === router.asPath}>
                {item.menuName ?? item.name}
              </DropdownItem>
            </LinkComponent>
          ))}
          {dropdownItems && <DropdownSpacer />}
        </Dropdown>
      </Container>
    </>
  );
}
