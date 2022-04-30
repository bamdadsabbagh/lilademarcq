import {ApiEndpointKeys} from '../constants';

export function getApiEndpoint(endpoint: ApiEndpointKeys): string {
  return `${window.location.origin}/api/${endpoint}`;
}
