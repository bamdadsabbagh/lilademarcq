import {useEffect, useRef} from 'react';

interface UseSwipeGesture {
  ref: React.Ref<HTMLDivElement>;
}

interface UseSwipeGestureProps {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

export function useSwipeGesture({
  onSwipeLeft,
  onSwipeRight,
}: UseSwipeGestureProps): UseSwipeGesture {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    let touchstartX = 0;
    let touchendX = 0;

    const slider = ref.current;

    const handleGesture = () => {
      if (touchendX < touchstartX) {
        onSwipeRight();
      } else if (touchendX > touchstartX) {
        onSwipeLeft();
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      touchstartX = e.changedTouches[0].screenX;
    };

    const onTouchEnd = (e: TouchEvent) => {
      touchendX = e.changedTouches[0].screenX;
      handleGesture();
    };

    slider.addEventListener('touchstart', onTouchStart);
    slider.addEventListener('touchend', onTouchEnd);

    return () => {
      slider.removeEventListener('touchstart', onTouchStart);
      slider.removeEventListener('touchend', onTouchEnd);
    };
  }, [onSwipeLeft, onSwipeRight, ref]);

  return {
    ref,
  };
}
