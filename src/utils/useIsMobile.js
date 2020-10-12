import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';

const BREAKPOINT = 900;

const getIsMobile = () => window.innerWidth <= BREAKPOINT;

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(null);

  const handleResize = useCallback(
    debounce(() => {
      setIsMobile(getIsMobile());
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('load', handleResize);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return isMobile;
};
