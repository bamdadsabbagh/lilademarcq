import {MetaComponentProps} from './components/meta/meta.component';

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
  {name: 'livre d\'or', slug: '/livre-d-or'},
];

export const META: MetaComponentProps = {
  title: 'Lila Demarcq',
  url: 'https://www.lilademarcq.com/',
  description: 'Artiste, designer et poétesse',
  image: '',
};
