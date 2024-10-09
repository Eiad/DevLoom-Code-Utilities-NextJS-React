import { useState, useEffect, useCallback } from "react";

const useSwipeToOpenMenu = (setIsMenuOpen) => {
  const [touchStart, setTouchStart] = useState(null);
  const minSwipeDistance = 50;

  const handleTouchStart = useCallback((e) => {
    setTouchStart(e.touches[0].clientX);
  }, []);

  const handleTouchMove = useCallback(
    (e) => {
      const touchEnd = e.changedTouches[0].clientX;
      if (touchStart < touchEnd && touchEnd - touchStart > minSwipeDistance) {
        setIsMenuOpen(true);
      }
    },
    [touchStart, setIsMenuOpen]
  );

  useEffect(() => {
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchMove);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchMove);
    };
  }, [handleTouchStart, handleTouchMove]);
};

export default useSwipeToOpenMenu;
