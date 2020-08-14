import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';

const BREAKPOINT = 900;

const getIsMobile = () => window.innerWidth <= BREAKPOINT;

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(getIsMobile());

  const handleResize = useCallback(
    debounce(() => {
      setIsMobile(getIsMobile());
    }, 100)
  );

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};
