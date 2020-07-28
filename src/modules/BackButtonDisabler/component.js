import { useEffect } from 'react';

export const Component = () => {
  useEffect(() => {
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = () => {
      window.history.pushState(null, '', window.location.href);
    };
  }, []);

  return null;
};

Component.displayName = 'BackButtonDisabler';
