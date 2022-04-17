import React, {ReactElement} from 'react';
import Link from 'next/link';
import {StaticImageData} from 'next/image';
import useMeasure from 'react-use-measure';
import {StyledContainer, StyledContent, StyledImage} from './tile.styles';

interface ProductTileComponentProps {
  image: StaticImageData;
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
          <StyledContainer>
            <StyledImage
              src={image}
              width={350}
              height={350}
              objectFit="cover"
            />
            <StyledContent size={bounds.width}>
              <h3>{title}</h3>
              <span>{description}</span>
            </StyledContent>
          </StyledContainer>
        </a>
      </Link>
    </li>
  );
}
