import React, {ReactElement, useEffect, useState} from 'react';
import {
  Caption,
  CaptionBody,
  Features,
  Footer,
} from './carousel-features.component.styles';
import {LDImage} from '../../utils/fetch-object';

interface CarouselFeaturesComponentProps {
  captions: LDImage['description'][];
  index: number;
  hasFooter?: boolean;
}

export function CarouselFeaturesComponent({
  hasFooter,
  index,
  captions,
}: CarouselFeaturesComponentProps): ReactElement {
  const [loading, setLoading] = useState(true);
  const [caption, setCaption] = useState('');

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
      setCaption(captions[index]);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [index, captions]);

  return (
    <>
      <Features>
        <Caption hasFooter={hasFooter}>
          <CaptionBody active={!loading}>
            {caption}
          </CaptionBody>
        </Caption>

        {hasFooter && <Footer />}
      </Features>
    </>
  );
}
