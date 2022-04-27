import React, {ReactElement} from 'react';
import Head from 'next/head';
import {META} from '../../constants';

export interface MetaComponentProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

/**
 * Component for rendering meta tags
 */
export function MetaComponent({
  title = META.title,
  url = META.url,
  description = META.description,
  image = META.image,
}: MetaComponentProps): ReactElement {
  // noinspection HtmlUnknownTarget, HtmlRequiredTitleElement
  return (
    <Head>

      <meta charSet="UTF-8" />
      <meta
        property="viewport"
        content="width=device-width, initial-scale=1.0"
      />

      <title>{`${title} - ${description}`}</title>

      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta name="description" content={description} />
      <meta itemProp="image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:site_name" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* from https://realfavicongenerator.net/ */}
      {/* <link */}
      {/*  rel="apple-touch-icon" */}
      {/*  sizes="180x180" */}
      {/*  href="/favicon/apple-touch-icon.png" */}
      {/* /> */}
      {/* <link */}
      {/*  rel="icon" */}
      {/*  type="image/png" */}
      {/*  sizes="32x32" */}
      {/*  href="/favicon/favicon-32x32.png" */}
      {/* /> */}
      {/* <link */}
      {/*  rel="icon" */}
      {/*  type="image/png" */}
      {/*  sizes="16x16" */}
      {/*  href="/favicon/favicon-16x16.png" */}
      {/* /> */}
      {/* <link rel="manifest" href="/favicon/site.webmanifest" /> */}
      {/* <link */}
      {/*  rel="mask-icon" */}
      {/*  href="/favicon/safari-pinned-tab.svg" */}
      {/*  color="#5bbad5" */}
      {/* /> */}
      {/* <meta name="msapplication-TileColor" content="#da532c" /> */}
      {/* <meta name="theme-color" content="#ffffff" /> */}

    </Head>
  );
}
