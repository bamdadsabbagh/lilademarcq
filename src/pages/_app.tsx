/* eslint-disable react/jsx-props-no-spreading */

import {DefaultSeo} from 'next-seo';
import {AppProps} from 'next/app';
import React from 'react';
import 'sass-reset';
import {WithTheme} from '../app/components/with-theme/with-theme';
import {useApp} from '../app/hooks/use-app';
import {SEO} from '../constants';
import {AppLayout} from '../layouts/app/app.layout';

// noinspection JSUnusedGlobalSymbols
export default function MyApp({Component, pageProps}: AppProps): JSX.Element {
  useApp();

  return (
    <>
      <DefaultSeo {...SEO} />
      <WithTheme>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </WithTheme>
    </>
  );
}
