import {useEffect, useState} from 'react';
import axios from 'axios';
import {Route} from '../../../../api/routes';

export function useRoutes(): Route[] {
  const [routes, setRoutes] = useState<Route[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get('/api/routes');
      const data = await response.data;
      setRoutes(data);
    })();
  }, []);

  return routes;
}
