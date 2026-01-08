import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToAnchor() {
  const location = useLocation();
  const lastHash = useRef('');

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1); // remove the '#'
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        const element = document.getElementById(lastHash.current);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          lastHash.current = '';
        }
      }, 100);
    } else if (!location.hash) {
        window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}
