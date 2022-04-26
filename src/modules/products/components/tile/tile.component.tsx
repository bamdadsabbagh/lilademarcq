import React, {ReactElement} from 'react';
import useMeasure from 'react-use-measure';
import {Container, Content, Image} from './tile.styles';
import {LinkComponent} from '../../../../components/link/link.component';

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
      <LinkComponent href={href}>
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
      </LinkComponent>
    </li>
  );
}
