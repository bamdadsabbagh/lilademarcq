type Endpoint = 'menu' | 'form' | 'form-post' | 'catalog'

export function getApiEndpoint(endpoint: Endpoint): string {
  return `${window.location.origin}/api/${endpoint}`;
}
