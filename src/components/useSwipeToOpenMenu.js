import { useState, useEffect } from "react";

const useSwipeToOpenMenu = (setIsMenuOpen) => {
  const [touchStart, setTouchStart] = useState(null);
  const minSwipeDistance = 50; // Adjust as needed

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    const touchEnd = e.changedTouches[0].clientX;

    // Check if swipe is from left to right and if it's a significant swipe
    if (touchStart < touchEnd && touchEnd - touchStart > minSwipeDistance) {
      setIsMenuOpen(true); // Open the menu
    }
  };

  useEffect(() => {
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchMove);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchMove);
    };
  }, [touchStart, setIsMenuOpen]);

  // No return value needed, as the hook's purpose is to modify state
};

export default useSwipeToOpenMenu;
