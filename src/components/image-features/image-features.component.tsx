import React, {ReactElement} from 'react';
import {
  Caption,
  Dot,
  Dots,
  Features,
  Footer,
} from './image-features.component.styles';
import {LDImage} from '../../utils/fetch-object';

interface ImageFeaturesComponentProps {
  images: LDImage[];
  currentIndex: number;
  dotCallback: (index: number) => void;
  isReverse?: boolean;
  hasFooter?: boolean;
  isBig?: boolean;
}

export function ImageFeaturesComponent({
  images,
  currentIndex,
  dotCallback,
  isReverse,
  hasFooter,
  isBig,
}: ImageFeaturesComponentProps): ReactElement {
  return (
    <>
      <Features
        isBig={isBig}
      >
        <Dots
          isReverse={isReverse}
          hasFooter={hasFooter}
        >
          {images.map((image, key) => (
            <Dot
              key={image.url}
              active={currentIndex === key}
              onClick={() => dotCallback(key)}
            />
          ))}
        </Dots>

        <Caption
          hide={typeof images[currentIndex].description === 'undefined'}
          isReverse={isReverse}
          hasFooter={hasFooter}
        >
          <span>
            {images[currentIndex].description || images[currentIndex].title || ''}
          </span>
        </Caption>

        {hasFooter && <Footer />}
      </Features>
    </>
  );
}
