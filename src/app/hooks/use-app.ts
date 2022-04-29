import {useGoogleAnalytics} from './use-google-analytics';
import {useMenuFetch} from './use-menu-fetch';
import {useFormFetch} from './use-form-fetch';
import {useCatalogFetch} from './use-catalog-fetch';

export function useApp(): void {
  useGoogleAnalytics();
  useMenuFetch();
  useFormFetch();
  useCatalogFetch();
}
