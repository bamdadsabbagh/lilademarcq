import React, {ReactElement, useState} from 'react';
import {useRouter} from 'next/router';
import {LinkComponent} from '../../../link/link.component';
import {
  BorderLeft,
  BorderRight,
  Container,
  Dropdown,
  DropdownItem,
  DropdownSpacer,
  Item,
} from './nav-item.component.styles';
import {MenuDropdownInterface} from '../../../../utils/fetch-menu';

interface DropdownProps {
  index: number;
  name: string;
  slug: string;
  noBorderLeft: boolean;
  noBorderRight: boolean;
  dropdown?: MenuDropdownInterface[];
}

export function NavItemComponent({
  index,
  name,
  slug,
  noBorderLeft,
  noBorderRight,
  dropdown,
}: DropdownProps): ReactElement {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Container
        index={index}
        hasChildren={!!dropdown}
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

        {dropdown?.length > 0 && (
          <Dropdown isOpen={isOpen}>
            <DropdownSpacer />
            {dropdown.map((item) => (
              <LinkComponent href={item.slug} key={item.slug}>
                <DropdownItem isActive={item.slug === router.asPath}>
                  {item.menuName ?? item.name}
                </DropdownItem>
              </LinkComponent>
            ))}
            <DropdownSpacer />
          </Dropdown>
        )}

      </Container>
    </>
  );
}
