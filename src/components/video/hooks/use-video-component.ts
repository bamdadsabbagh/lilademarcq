import {RefObject, useEffect, useRef, useState} from 'react';

interface UseVideoComponent {
  ref: RefObject<HTMLDivElement>;
  isPlaying: boolean;
}

export function useVideoComponent(): UseVideoComponent {
  const ref = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (isPlaying) {
            return;
          }

          if (entry.isIntersecting) {
            setIsPlaying(true);
            observer.disconnect();
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.5,
        },
      );
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [ref, isPlaying]);

  return {
    ref,
    isPlaying,
  };
}
