import { useState, useEffect, useCallback } from "react";

// Custom hook for enabling swipe to open menu functionality.
const useSwipeToOpenMenu = (setIsMenuOpen) => {
  // State to keep track of where the touch event started.
  const [touchStart, setTouchStart] = useState(null);

  // Define the minimum distance (in pixels) for a swipe to be recognized.
  const minSwipeDistance = 50;

  // useCallback to memoize the function so it doesn't cause unnecessary renders.
  // handleTouchStart sets the initial touch position.
  const handleTouchStart = useCallback((e) => {
    setTouchStart(e.touches[0].clientX);
  }, []);

  // handleTouchMove checks if the touch movement qualifies as a swipe and opens the menu.
  // It's also memoized with useCallback to prevent unnecessary effect triggers.
  const handleTouchMove = useCallback(
    (e) => {
      const touchEnd = e.changedTouches[0].clientX;

      // Check if the touch ended at a point greater than the start point and if the
      // distance traveled is more than the minimum swipe distance.
      if (touchStart < touchEnd && touchEnd - touchStart > minSwipeDistance) {
        setIsMenuOpen(true); // Open the menu on a valid swipe.
      }
    },
    [touchStart, setIsMenuOpen] // Dependencies for useCallback.
  );

  // useEffect hook to add event listeners for touch events.
  useEffect(() => {
    // Add touch event listeners to the window.
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchMove);

    // Cleanup function to remove the event listeners.
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchMove);
    };
  }, [handleTouchStart, handleTouchMove]); // Dependencies for useEffect.

  // This hook doesn't return anything as its only job is to manage side effects (event listeners).
};

export default useSwipeToOpenMenu;
