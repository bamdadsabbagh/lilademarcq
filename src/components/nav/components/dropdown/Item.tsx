import React, {ReactElement} from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {Text} from './dropdown.styles';
import {SlideInAnimation} from '../../../../app/styles/animations';
import {tf, to} from '../../../../app/styles/timers';

interface CellProps {
  index: number;
  first?: boolean;
  last?: boolean;
}

const Cell = styled.div<CellProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-left: -1px;
  border-left: ${({first}) => first ? 0 : '1px'} solid black;
  border-right: ${({last}) => last ? 0 : '1px'} solid black;

  user-select: none;

  opacity: 0;

  animation: ${SlideInAnimation} calc(0.9s * ${tf}) forwards calc(0.5s * ${tf});
  animation-delay: calc((0.7s + ${to}s * ${({index}) => index}) * ${tf});
`;

interface DropdownProps {
  name: string;
  slug: string;
  index: number;
  first?: boolean;
  last?: boolean;
}

export function Item({
  name,
  slug,
  first,
  last,
  index,
}: DropdownProps): ReactElement {
  return (
    <>
      <Cell index={index} first={first} last={last}>
        <Link href={slug}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>
            <Text>
              {name}
            </Text>
          </a>
        </Link>
      </Cell>
    </>
  );
}
