import React, {ReactElement} from 'react';
import Image, {StaticImageData} from 'next/image';
import useMeasure from 'react-use-measure';
import {
  StyledContent,
  StyledImageContainer,
  StyledText,
} from './text-image.styles';

interface ContentTextImageComponentProps {
  image: StaticImageData;
  alt: string;
  children: string | ReactElement;
}

export function TextImageComponent({
  image,
  alt,
  children,
}: ContentTextImageComponentProps): ReactElement {
  const [ref, bounds] = useMeasure();

  return (
    <StyledContent ref={ref} width={bounds.width} right={bounds.right}>
      <StyledImageContainer>
        <Image
          alt={alt}
          src={image}
          layout="intrinsic"
          placeholder="blur"
          height={420}
          width={420}
        />
      </StyledImageContainer>
      <StyledText width={bounds.width} right={bounds.right}>
        {children}
      </StyledText>
    </StyledContent>
  );
}
