import { useCallback, useEffect, useState } from 'react';

import { initFacebookPixel } from './initFacebookPixel';

export const useTracking = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const { fbq } = global;

    if (!fbq) initFacebookPixel();

    setIsLoaded(true);
  }, []);

  const triggerEvent = useCallback(
    (name, data) => {
      if (!isLoaded) return;
      global.fbq('track', name, data);
    },
    [isLoaded]
  );

  return triggerEvent;
};
