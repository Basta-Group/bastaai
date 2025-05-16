import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import React from 'react';

export function useScrollToTop(scrollRef?: React.RefObject<HTMLElement> | null) {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("Scroll to top triggered for pathname:", pathname);
    
    const scrollToTop = () => {
      if (scrollRef?.current) {
        scrollRef.current.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    };

    // Add a slight delay (e.g., 100ms) before scrolling
    const timer = setTimeout(scrollToTop, 100);

    // Cleanup timeout on unmount or pathname change
    return () => clearTimeout(timer);
  }, [pathname, scrollRef]);

  return null;
} 