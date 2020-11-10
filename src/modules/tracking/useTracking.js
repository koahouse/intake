import { useCallback, useEffect, useState } from 'react';

import { useLanguageCode } from '../I18n';

import { initGoogleTagManager } from './initGoogleTagManager';
import { getEvent } from './getEvent';

export const useTracking = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const languageCode = useLanguageCode();

  useEffect(() => {
    if (!global.google_tag_manager) initGoogleTagManager();

    setIsLoaded(true);
  }, []);

  const triggerEvent = useCallback(
    (name, data) => {
      if (!isLoaded) return;

      const event = getEvent(name, data, languageCode);

      global.dataLayer && global.dataLayer.push(event);
    },
    [isLoaded]
  );

  return triggerEvent;
};
