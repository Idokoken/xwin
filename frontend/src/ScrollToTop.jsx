import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop({ children }) {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsFadingOut(false);

    const loadingTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 1000);

    const hideTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(hideTimer);
    };
  }, [pathname]);

  useEffect(() => {
    if (isLoading) return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname, isLoading]);

  if (isLoading) {
    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ${
          isFadingOut ? "opacity-0" : "opacity-80"
        }`}
        role="status"
        aria-label="Loading page"
      >
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-red-600 border-r-transparent" />
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return children;
}

export default ScrollToTop;
