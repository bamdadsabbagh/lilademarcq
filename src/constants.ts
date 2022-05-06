import {DefaultSeoProps} from 'next-seo';

export const GA_TRACKING_ID = '';
export const RECAPTCHA_SITE_KEY = '6LcKWLQfAAAAACgMB8kM3DVcmVQhgjrlGMXj6rbP';

export const HEADER_HEIGHT = '12rem';
export const FOOTER_HEIGHT = '8rem';
export const MAX_WIDTH = '1200px';

export const REVALIDATE = 60 * 5;
export const PADDING = '3.5rem';
export const SECTION_SPACE_AROUND = '2%';

export const CAROUSEL_INTERVAL = 10; // seconds

export type ApiEndpointKeys = 'menu' | 'catalog' | 'form';

export const IMAGE_SETTINGS = {
  quality: 60,
  highRes: 3000,
  lowRes: 736,
  thumbRatio: 0.1,
  thumbQuality: 60,
};

export const MENU = [
  {name: 'home', slug: '/'},
  {name: 'à propos', slug: '/a-propos'},
  {name: 'objets', slug: '/objets', dropdown: []},
  {name: 'poésie', slug: '/poesie'},
  {name: 'événements', slug: '/evenements'},
  {name: 'presse', slug: '/presse'},
  {name: 'contact', slug: '/contact'},
];

export const SEO: DefaultSeoProps = {
  defaultTitle: 'Lila Demarcq',
  titleTemplate: '%s | Lila Demarcq',
  description: 'Artiste, designer et poétesse',
  canonical: 'https://www.lilademarcq.com/',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    site_name: 'Lila Demarcq',
    url: 'https://www.lilademarcq.com/',
  },
  twitter: {
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'manifest',
      href: '/favicon/site.webmanifest',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: 'favicon/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'mask-icon',
      href: '/favicon/safari-pinned-tab.svg',
      color: '#5bbad5',
    },
  ],
  additionalMetaTags: [
    {
      name: 'msapplication-TileColor',
      content: '#da532c',
    },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
  ],
};
