import React, {ReactElement} from 'react';
import Image, {StaticImageData} from 'next/image';
import useMeasure from 'react-use-measure';
import {Container, ImageWrapper, TextWrapper} from './image-text.styles';

interface ContentTextImageComponentProps {
  image: StaticImageData;
  imageAlt: string;
  children: string | ReactElement;
  gap?: number;
  textVerticalCenter?: boolean;
}

const defaultProps = {
  gap: 3,
  textVerticalCenter: false,
};

export function ImageTextComponent({
  image,
  imageAlt,
  children,
  gap = defaultProps.gap,
  textVerticalCenter = defaultProps.textVerticalCenter,
}: ContentTextImageComponentProps): ReactElement {
  const [ref, bounds] = useMeasure();

  return (
    <Container
      ref={ref}
      width={bounds.width}
      right={bounds.right}
      gap={gap}
    >
      <ImageWrapper>
        <Image
          alt={imageAlt}
          src={image}
          placeholder="blur"
          layout="intrinsic"
          objectFit="contain"
        />
      </ImageWrapper>
      {bounds.width !== 0 && bounds.right !== 0 && (
        <TextWrapper
          width={bounds.width}
          right={bounds.right}
          textVerticalCenter={textVerticalCenter}
        >
          {children}
        </TextWrapper>
      )}
    </Container>
  );
}
