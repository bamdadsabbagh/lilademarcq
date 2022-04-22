import React, {ReactElement} from 'react';
import Link from 'next/link';
import useMeasure from 'react-use-measure';
import {Container, Content, Image} from './tile.styles';

interface ProductTileComponentProps {
  image: string;
  title: string;
  description: string;
  href: string;
}

export function TileComponent({
  image,
  title,
  description,
  href,
}: ProductTileComponentProps): ReactElement {
  const [ref, bounds] = useMeasure();
  return (
    <li ref={ref}>
      <Link href={href}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          <Container>
            <Image
              src={image}
              width={350}
              height={350}
              objectFit="cover"
            />
            <Content size={bounds.width}>
              <h3>{title}</h3>
              <span>{description}</span>
            </Content>
          </Container>
        </a>
      </Link>
    </li>
  );
}
