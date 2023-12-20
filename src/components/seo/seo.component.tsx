import {NextSeo} from 'next-seo';
import React from 'react';
import {SEO} from '../../constants';
import {LDImage} from '../../utils/fetch-object';

interface SeoComponentProps {
  title: string;
  description: string;
  canonical: string;
  image?: LDImage;
}

export function SeoComponent({
  title,
  description,
  canonical,
  image,
}: SeoComponentProps): JSX.Element {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`${SEO.canonical}${canonical}`}
        openGraph={{
          url: `${SEO.canonical}${canonical}`,
        }}
      />
      {image && (
        <NextSeo
          openGraph={{
            images: [
              {
                url: image.url,
              },
            ],
          }}
        />
      )}
    </>
  );
}
