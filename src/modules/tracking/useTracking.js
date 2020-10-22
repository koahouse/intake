import { useCallback, useEffect, useState } from 'react';

import { initFacebookPixel } from './initFacebookPixel';
import { initGoogleTagManager } from './initGoogleTagManager';
import {
  INTAKE_FORM_COMPLETE,
  PAYMENT_COMPLETE,
  BOOKING_COMPLETE,
} from './constants';

export const useTracking = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const { fbq, google_tag_manager } = global;

    if (!fbq) initFacebookPixel();

    if (!google_tag_manager) initGoogleTagManager();

    setIsLoaded(true);
  }, []);

  const triggerEvent = useCallback(
    (name, data) => {
      if (!isLoaded) return;

      global.fbq &&
        global.fbq(
          'track',
          {
            [INTAKE_FORM_COMPLETE]: 'CompleteRegistration',
            [PAYMENT_COMPLETE]: 'Purchase',
            [BOOKING_COMPLETE]: 'Schedule',
          }[name],
          data
        );

      global.gtag &&
        global.gtag('event', 'conversion', {
          send_to: `AW-528274137/${
            {
              [INTAKE_FORM_COMPLETE]: 'S5OzCLXw9-MBENml8_sB',
              [PAYMENT_COMPLETE]: '5Sm1CK_xj-MBENml8_sB',
              [BOOKING_COMPLETE]: 'pk1BCI64ieQBENml8_sB',
            }[name]
          }`,
          ...(data || {}),
        });
    },
    [isLoaded]
  );

  return triggerEvent;
};
