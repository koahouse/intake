import { useEffect } from 'react';

export const Component = ({ step }) => {
  const handleUnload = (event) => {
    if (window.location.hostname === 'localhost') return;

    event.preventDefault();
    event.returnValue = 'something';
    return 'something';
  };

  useEffect(() => {
    if ([0, 7].includes(step)) return;

    window.addEventListener('beforeunload', handleUnload);

    return () => window.removeEventListener('beforeunload', handleUnload);
  }, [step]);

  return null;
};

Component.displayName = 'CloseWindowWarner';
