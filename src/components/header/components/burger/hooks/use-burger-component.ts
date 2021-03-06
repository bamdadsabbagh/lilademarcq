import {
  Dispatch,
  RefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import useMeasure from 'react-use-measure';
import {NextRouter, useRouter} from 'next/router';
import {MenuInterface} from '../../../../../utils/fetch-menu';

interface UseBurgerComponent {
  router: NextRouter;
  isHover: boolean;
  setIsHover: Dispatch<SetStateAction<boolean>>;
  isScrollTop: boolean;
  getCurrentRoute: () => string;
  containerRef: RefObject<HTMLDivElement>;
  ref: (element: HTMLOrSVGElement) => void;
  height: number;
  firstRender: boolean;
  setFirstRender: Dispatch<SetStateAction<boolean>>;
}

export function useBurgerComponent(menu: MenuInterface): UseBurgerComponent {
  const [isHover, setIsHover] = useState(false);
  const [ref, {height}] = useMeasure();
  const router = useRouter();
  const getCurrentRoute = useCallback(() => menu.find((item) => item.slug === router.asPath)?.name, [menu, router]);
  const [isScrollTop, setIsScrollTop] = useState(true);
  const containerRef = useRef<HTMLDivElement>();

  // handle scroll if top
  const handleScroll = useCallback(() => {
    if (window.scrollY > 100) {
      setIsScrollTop(false);
    } else {
      setIsScrollTop(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // handle click outside the container
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      if (isHover === false) {
        return;
      }

      setIsHover(false);
    }
  }, [containerRef, isHover]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [handleClickOutside]);

  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    const listener = () => {
      const style = window.getComputedStyle(containerRef.current);
      if (style.display === 'none') {
        setFirstRender(true);
      }
    };

    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, [containerRef]);

  return {
    isHover,
    setIsHover,
    isScrollTop,
    getCurrentRoute,
    containerRef,
    ref,
    height,
    router,
    firstRender,
    setFirstRender,
  };
}
