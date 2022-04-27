import React, {Ref, useCallback, useEffect} from 'react';

interface UseNavComponent {
  navRef: Ref<HTMLElement>;
  isOverHeight: boolean;
}

export function useNavComponent(): UseNavComponent {
  // create a ref to get the height of the nav
  const navRef = React.useRef<HTMLDivElement>(null);

  // make MenuContainer sticky when scroll over a certain value
  const [isOverHeight, setSticky] = React.useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > navRef.current.offsetHeight) {
      setSticky(true);
      return;
    }

    setSticky(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return {
    navRef,
    isOverHeight,
  };
}
