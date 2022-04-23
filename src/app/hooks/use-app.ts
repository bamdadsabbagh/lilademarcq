import {useGoogleAnalytics} from './use-google-analytics';
import {useNav} from './use-nav';

export function useApp(): void {
  useNav();
  useGoogleAnalytics();
}
