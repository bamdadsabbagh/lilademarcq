import React, {ReactElement, useEffect, useState} from 'react';
import {
  Caption,
  CaptionBody,
  Dot,
  Dots,
  Features,
  Footer,
} from './image-features.component.styles';
import {LDImage} from '../../utils/fetch-object';
import {RichImage} from '../../utils/fetch-hero';
import {LinkComponent} from '../link/link.component';

interface ImageFeaturesComponentProps {
  images?: LDImage[];
  richImages?: RichImage[];
  index: number;
  dotCallback: (index: number) => void;
  isReverse?: boolean;
  hasFooter?: boolean;
  isBig?: boolean;
}

export function ImageFeaturesComponent({
  images,
  richImages,
  index,
  dotCallback,
  isReverse,
  hasFooter,
  isBig,
}: ImageFeaturesComponentProps): ReactElement {
  const [isCaptionHovered, setIsCaptionHovered] = useState(false);
  const [caption, setCaption] = useState('');

  useEffect(() => {
    // images
    if (images) {
      setCaption(images[index].description || images[index].title || '');
      return;
    }

    // rich images
    if (richImages) {
      const {longDescription, shortDescription} = richImages[index];

      if (isCaptionHovered && longDescription) {
        setCaption(longDescription);
      } else {
        setCaption(shortDescription);
      }
    }
  }, [index, images, richImages, isCaptionHovered]);

  return (
    <>
      <Features
        isBig={isBig}
      >
        <Dots
          isReverse={isReverse}
          hasFooter={hasFooter}
        >
          {images && images.map((image, key) => (
            <Dot
              key={image.url}
              active={index === key}
              onClick={() => dotCallback(key)}
            />
          ))}

          {richImages && richImages.map((richImage, key) => (
            <Dot
              key={richImage.image.url}
              active={index === key}
              onClick={() => dotCallback(key)}
            />
          ))}
        </Dots>

        {images && (
          <Caption
            hide={typeof images[index].description === 'undefined'}
            isReverse={isReverse}
            hasFooter={hasFooter}
          >
            <CaptionBody
              isReverse={isReverse}
              hide={typeof images[index].description === 'undefined'}
            >
              {caption}
            </CaptionBody>
          </Caption>
        )}

        {richImages && (
          <Caption
            hide={false}
            isReverse={isReverse}
            hasFooter={hasFooter}
            onMouseEnter={() => setIsCaptionHovered(true)}
            onMouseLeave={() => setIsCaptionHovered(false)}
          >
            <CaptionBody
              isReverse={isReverse}
              hide={false}
            >
              {richImages[index]?.link ? (
                <LinkComponent href={richImages[index].link}>
                  <>
                    {caption}
                  </>
                </LinkComponent>
              ) : (
                <>
                  {caption}
                </>
              )}
            </CaptionBody>
          </Caption>
        )}

        {hasFooter && <Footer />}
      </Features>
    </>
  );
}
