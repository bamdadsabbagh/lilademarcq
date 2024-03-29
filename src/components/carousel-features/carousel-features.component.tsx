import React, {useEffect, useState} from 'react';
import {LDImage} from '../../utils/fetch-object';
import {
  Caption,
  CaptionBody,
  Features,
  Footer,
} from './carousel-features.component.styles';

interface CarouselFeaturesComponentProps {
  captions: LDImage['description'][];
  index: number;
  hasFooter?: boolean;
}

export function CarouselFeaturesComponent({
  hasFooter,
  index,
  captions,
}: CarouselFeaturesComponentProps): JSX.Element {
  const [savedIndex, setSavedIndex] = useState(-1);
  const [loading, setLoading] = useState(true);
  const [caption, setCaption] = useState('');

  useEffect(() => {
    if (index === savedIndex) {
      return;
    }

    setSavedIndex(index);
    setLoading(true);
  }, [index, savedIndex]);

  useEffect(() => {
    if (!loading) {
      return;
    }

    const timer = setTimeout(() => {
      setCaption(captions[index]);
      setLoading(false);
    }, 800);

    return () => {
      clearTimeout(timer);
    };
  }, [loading, index, captions]);

  return (
    <>
      <Features>
        <Caption hasFooter={hasFooter}>
          <CaptionBody active={!loading && caption?.length > 0}>
            {caption}
          </CaptionBody>
        </Caption>

        {hasFooter && <Footer />}
      </Features>
    </>
  );
}
