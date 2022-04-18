import React, {ReactElement} from 'react';
import Image, {StaticImageData} from 'next/image';
import useMeasure from 'react-use-measure';
import {Container, ImageWrapper, TextWrapper} from './image-text.styles';

interface ContentTextImageComponentProps {
  image: StaticImageData;
  alt: string;
  children: string | ReactElement;
}

export function ImageTextComponent({
  image,
  alt,
  children,
}: ContentTextImageComponentProps): ReactElement {
  const [ref, bounds] = useMeasure();

  return (
    <Container ref={ref} width={bounds.width} right={bounds.right}>
      <ImageWrapper>
        <Image
          alt={alt}
          src={image}
          placeholder="blur"
          layout="intrinsic"
          objectFit="contain"
        />
      </ImageWrapper>
      {bounds.width !== 0 && bounds.right !== 0 && (
        <TextWrapper width={bounds.width} right={bounds.right}>
          {children}
        </TextWrapper>
      )}
    </Container>
  );
}
