import {Redirect} from 'next';

export function getRedirectionObject(destination = '/'): {redirect: Redirect;} {
  return {
    redirect: {
      destination,
      permanent: false,
    },
  };
}
