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
  const [savedIndex, setSavedIndex] = useState(-1);
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [loading]);

  return (
    <>
      <Features>
        <Caption hasFooter={hasFooter}>
          <CaptionBody active={!loading}>
            {captions[index]}
          </CaptionBody>
        </Caption>

        {hasFooter && <Footer />}
      </Features>
    </>
  );
}
