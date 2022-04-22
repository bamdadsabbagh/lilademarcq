import {Route} from '../../../pages/api/routes';
import {useRoutes} from './use-routes';
import {useAppLoad} from './use-app-load';

interface UseAppLayout {
  routes: Route[];
}

export function useAppLayout(): UseAppLayout {
  useAppLoad();
  const routes = useRoutes();

  return {
    routes,
  };
}
