import {useGoogleAnalytics} from './use-google-analytics';
import {useMenuFetch} from './use-menu-fetch';

export function useApp(): void {
  useGoogleAnalytics();
  useMenuFetch();
}
